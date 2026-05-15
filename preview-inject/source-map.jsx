// @ts-ignore
import { SourceMapConsumer } from "source-map";
import {
  correctSourceMapPosition,
  findOpeningTag,
  findNextMatchingTag,
  extractRange,
  extractSourceContext,
  loadSourceMap,
} from "./helper/source-map-helper";

// Initialize SourceMapConsumer with the WebAssembly mappings
let isInitialized = false;

// Error deduplication cache
const errorCache = new Map();
const ERROR_CACHE_TTL = 5 * 60 * 1000; // 5 minutes expiration time
const ERROR_CACHE_MAX_SIZE = 1000; // Maximum cache size

// Clean expired cache
setInterval(() => {
  const now = Date.now();
  for (const [key, result] of errorCache.entries()) {
    if (now - result.timestamp > ERROR_CACHE_TTL) {
      errorCache.delete(key);
    }
  }
}, 60000); // Clean every minute

async function initializeSourceMapConsumer() {
  if (isInitialized) return;

  try {
    // Initialize with the mappings.wasm file URL
    // Try to initialize SourceMapConsumer mappings
    await SourceMapConsumer.initialize({
      "lib/mappings.wasm":
        "https://unpkg.com/source-map@0.7.6/lib/mappings.wasm",
    });
    isInitialized = true;
  } catch (error) {
    console.warn("Failed to initialize SourceMapConsumer:", error);
    // Try alternative initialization methods
    try {
      // Fallback: try without explicit URL (some environments have built-in support)
      await SourceMapConsumer.initialize({});
      isInitialized = true;
    } catch (fallbackError) {
      console.error(
        "SourceMapConsumer initialization failed completely:",
        fallbackError,
      );
      throw fallbackError;
    }
  }
}

// Define return type
// ErrorMappingResult shape (documented for clarity)
// {
//   errorMessage: string,
//   mappedStack: string,
//   sourceContext: Array<{file,line,column,context,closedBlock?}>
// }

/**
 * Generate error signature for deduplication
 * @param error Error object
 * @returns Error signature string
 */
function generateErrorSignature(error) {
  if (!error || !error.stack) {
    return `no-stack-${error?.message || "unknown"}`;
  }

  // Extract key parts of the stack to generate signature
  const stack = error.stack;
  // 取更多行，因为前 3 行通常是拦截器代码（对所有元素相同）
  // 第 4 行及之后才是实际的组件调用位置，用于区分不同元素
  const lines = stack.split("\n").slice(0, 6);

  // Remove dynamic parts (like timestamps, random numbers, etc.)
  const normalizedLines = lines.map(
    (line) =>
      line
        .replace(/\?t=\d+/g, "") // Remove timestamp parameters
        .replace(/\?v=[\w\d]+/g, "") // Remove version parameters
        .replace(/\d{13,}/g, "TIMESTAMP"), // Replace timestamps
  );

  return `${error.name || "Error"}-${error.message}-${normalizedLines.join(
    "|",
  )}`;
}

const FILTER_STACK_PATH = "preview-inject/";

/**
 * Map production error stack to source code stack
 * @param {Error} error - Error object
 * @param {number} maxContexLimit - Maximum number of context entries
 * @param {string} expectedTagName - Expected element tag name for validation (optional)
 * @returns {Promise<ErrorMappingResult>} Mapped stack information and source context
 */
export async function mapErrorStack(
  error,
  maxContexLimit = 10,
  expectedTagName,
) {
  if (!error || !error.stack) {
    return {
      errorMessage: (error && error.message) || "",
      mappedStack: (error && error.stack) || "",
      sourceContext: [],
    };
  }

  // Generate error signature for deduplication check
  const errorSignature = generateErrorSignature(error);

  // Check if it already exists in cache
  if (errorCache.has(errorSignature)) {
    const cachedResult = errorCache.get(errorSignature);
    console.log("Using cached error mapping for:", errorSignature);
    return cachedResult;
  }

  // Check cache size, return null if exceeds limit
  if (errorCache.size >= ERROR_CACHE_MAX_SIZE) {
    return null;
  }

  // Initialize SourceMapConsumer before use
  await initializeSourceMapConsumer();

  const stackLines = error.stack.split("\n");
  const mappedLines = [];
  const sourceContext = [];

  const sourceMapCache = new Map();
  const sourceContentCache = new Map();
  let contextLimit = 0;

  for (const line of stackLines) {
    // support three stack formats:
    // 1. Chrome/V8: at functionName (file:line:column)
    // 2. Chrome/V8 anonymous: at file:line:column
    // 3. Firefox: functionName@file:line:column
    const match = line.match(
      /at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)|([^@]*)@(.+?):(\d+):(\d+)/,
    );

    if (!match) {
      mappedLines.push(line);
      continue;
    }

    let functionName, fileName, lineNumber, columnNumber;

    if (match[1]) {
      functionName = match[1];
      fileName = match[2];
      lineNumber = parseInt(match[3]);
      columnNumber = parseInt(match[4]);
    } else if (match[5]) {
      // Chrome/V8 anonymous: at file:line:column
      functionName = "<anonymous>";
      fileName = match[5];
      lineNumber = parseInt(match[6]);
      columnNumber = parseInt(match[7]);
    } else {
      // Firefox: functionName@file:line:column
      functionName = match[8];
      fileName = match[9];
      lineNumber = parseInt(match[10]);
      columnNumber = parseInt(match[11]);
    }

    try {
      const sourceMapUrl = `${fileName}.map`;

      let consumer = sourceMapCache.get(sourceMapUrl);
      if (!consumer) {
        const sourceMapContent = await loadSourceMap(sourceMapUrl);
        consumer = await new SourceMapConsumer(sourceMapContent);
        sourceMapCache.set(sourceMapUrl, consumer);
      }

      const originalPosition = consumer.originalPositionFor({
        line: lineNumber,
        column: columnNumber,
      });

      if (originalPosition.source) {
        if (originalPosition.source.includes(FILTER_STACK_PATH)) {
          continue;
        }
        const source = originalPosition.source
          .split("/")
          .filter((s) => s !== "..")
          .join("/");
        const originalFunctionName = originalPosition.name || functionName;
        const mappedLine = `    at ${originalFunctionName} (${source}:${originalPosition.line}:${originalPosition.column})`;
        mappedLines.push(mappedLine);

        // Get source code context
        if (
          originalPosition.line &&
          originalPosition.column &&
          contextLimit < maxContexLimit
        ) {
          contextLimit++;
          try {
            const sourceContent = await getSourceContent(
              consumer,
              originalPosition.source,
              sourceContentCache,
            );
            if (sourceContent) {
              const isNodeModules = source.includes("node_modules");
              const isJSXFile = /\.(tsx|jsx)$/.test(source);

              // Extract JSX closed block (only for .tsx/.jsx files, skip node_modules)
              let closedBlock;

              if (!isNodeModules && isJSXFile) {
                const jsxElement = extractJSXElement(
                  sourceContent,
                  originalPosition.line,
                  originalPosition.column,
                  expectedTagName,
                );
                if (jsxElement) {
                  closedBlock = {
                    tagName: jsxElement.tagName,
                    code: jsxElement.code,
                    context: jsxElement.context,
                    startLine: jsxElement.startLine,
                    endLine: jsxElement.endLine,
                  };
                }
              }

              const context = extractSourceContext(
                sourceContent,
                originalPosition.line,
                isNodeModules ? 1 : 10,
              );

              sourceContext.push({
                file: source,
                line: originalPosition.line,
                column: originalPosition.column,
                context: context,
                closedBlock,
              });
            }
          } catch (contextError) {
            console.warn("Failed to extract source context:", contextError);
          }
        }
      } else {
        mappedLines.push(line);
      }
    } catch (err) {
      console.warn("Failed to map stack line:", line, err);
      mappedLines.push(line);
    }
  }

  // Clean up source map consumers
  for (const consumer of sourceMapCache.values()) {
    try {
      consumer.destroy();
    } catch (e) {
      // ignore
    }
  }

  const result = {
    errorMessage: (error && error.message) || "",
    mappedStack: mappedLines.join("\n"),
    sourceContext: sourceContext,
  };

  // Cache result (add timestamp for TTL)
  result.timestamp = Date.now();
  errorCache.set(errorSignature, result);

  return result;
}

/**
 * Clear error cache (for debugging or reset)
 */
export function clearErrorCache() {
  errorCache.clear();
}

/**
 * Get current cache status (for debugging)
 */
export function getErrorCacheStats() {
  return {
    size: errorCache.size,
    keys: Array.from(errorCache.keys()),
  };
}

/**
 * Get source file content
 * @param consumer SourceMapConsumer instance
 * @param sourcePath Source file path
 * @param cache Cache Map
 * @returns Source file content
 */
async function getSourceContent(consumer, sourcePath, cache) {
  // First try to get from cache
  if (cache.has(sourcePath)) {
    return cache.get(sourcePath) || null;
  }

  // Try to get source content from source map
  const sourceContent = consumer.sourceContentFor(sourcePath);
  if (sourceContent) {
    cache.set(sourcePath, sourceContent);
    return sourceContent;
  }

  return null;
}

/**
 * JSX Element information
 */
// JSXElementInfo shape documented above

/**
 * Extract the JSX/HTML element containing the specified position
 * @param sourceContent Source file content
 * @param targetLine Target line number (1-based)
 * @param targetColumn Target column number (1-based, optional)
 * @param expectedTagName Expected element tag name for validation (optional)
 * @returns JSX element information or undefined
 */
export function extractJSXElement(
  sourceContent,
  targetLine,
  targetColumn,
  expectedTagName,
) {
  const lines = sourceContent.split("\n");
  let targetIndex = targetLine - 1;

  if (targetIndex < 0 || targetIndex >= lines.length) {
    return undefined;
  }

  // First try without correction
  let openTagInfo = findOpeningTag(lines, targetIndex, targetColumn);

  // If expectedTagName is provided, validate and search if mismatch
  if (expectedTagName && openTagInfo) {
    const normalizedExpected = expectedTagName.toLowerCase();
    const normalizedFound = openTagInfo.tagName.toLowerCase();

    if (normalizedExpected !== normalizedFound) {
      // Tag mismatch - search for the expected tag below current position
      const correctedInfo = findNextMatchingTag(
        lines,
        targetIndex,
        normalizedExpected,
      );
      if (correctedInfo) {
        openTagInfo = correctedInfo;
      }
    }
  } else if (!openTagInfo) {
    // No tag found at original position, try with correction
    const corrected = correctSourceMapPosition(
      lines,
      targetIndex,
      targetColumn,
    );
    openTagInfo = findOpeningTag(lines, corrected.lineIndex, corrected.column);
  }

  if (!openTagInfo) {
    return undefined;
  }

  const {
    tagName,
    lineIndex: openLineIndex,
    columnStart,
    closeLineIndex,
    closeColumnEnd,
    isSelfClosing,
  } = openTagInfo;

  return {
    tagName,
    code: extractRange(
      lines,
      openLineIndex,
      columnStart,
      closeLineIndex,
      closeColumnEnd,
    ),
    context: lines.slice(openLineIndex, closeLineIndex + 1).join("\n"),
    startLine: openLineIndex + 1,
    endLine: closeLineIndex + 1,
    isSelfClosing,
  };
}
