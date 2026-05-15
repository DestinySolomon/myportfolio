import React from "react";
import * as jsxRuntime from "react/jsx-runtime";
import * as jsxDevRuntime from "react/jsx-dev-runtime";
import FiberDebugger from "./fibber-debugger";

// (TypeScript types removed) Runtime helpers operate on JS values

export const DEBUG_ERROR_KEY = "debugerror";

// Store debug information for all elements (with Fiber node as key)
const fiberDebugMap = new WeakMap();
// Store debug information for native DOM elements (with DOM element as key, for fast lookup)
const nativeElementDebugMap = new WeakMap();

// ========== Dual guarantee: Ref stability + correct source location ==========

// Function Ref: cache wrapped ref, use queue to store debugErrorFn (FIFO for correct source mapping)
const wrappedRefCache = new WeakMap();
const pendingDebugErrors = new WeakMap();

// RefObject: cache wrapped ref, store latest debugErrorFn (RefObject typically used in one place)
const refObjectCache = new WeakMap();
const refObjectDebugMap = new WeakMap();

// Helper function to store debug info with error handling
const storeDebugInfo = (element, debugErrorFn) => {
  try {
    nativeElementDebugMap.set(element, debugErrorFn);
    const fiber = FiberDebugger.getFiberFromDOMNode(element);
    if (fiber) {
      fiberDebugMap.set(fiber, debugErrorFn);
    }
  } catch (e) {
    // Silently fail - don't break the app for debug functionality
    if (process.env.NODE_ENV === "development") {
      console.warn("[Debug Source] Failed to store debug info:", e);
    }
  }
};

// Helper function to create or get cached wrapped ref
const getOrCreateWrappedRef = (originalRef, debugErrorFn) => {
  // No original ref - create a simple wrapper (no caching needed)
  if (!originalRef) {
    return (element) => {
      if (element instanceof HTMLElement) {
        storeDebugInfo(element, debugErrorFn);
      }
    };
  }

  // Function ref - use cache + queue for stable identity and correct source location
  if (typeof originalRef === "function") {
    // Add debugErrorFn to pending queue
    let pending = pendingDebugErrors.get(originalRef);
    if (!pending) {
      pending = [];
      pendingDebugErrors.set(originalRef, pending);
    }
    pending.push(debugErrorFn);

    // Get or create wrapped ref (created only once for stability)
    let wrapped = wrappedRefCache.get(originalRef);
    if (!wrapped) {
      wrapped = (element) => {
        // Only consume queue when element exists (null is cleanup callback)
        if (element instanceof HTMLElement) {
          const queue = pendingDebugErrors.get(originalRef);
          if (queue && queue.length > 0) {
            const fn = queue.shift(); // FIFO: first in, first out
            if (fn) storeDebugInfo(element, fn);
          }
        }
        try {
          originalRef(element);
        } catch (e) {
          // ignore ref callbacks errors
        }
      };
      wrappedRefCache.set(originalRef, wrapped);
    }
    return wrapped;
  }

  // RefObject - use cache + latest value (RefObject is typically used in one place)
  if (
    originalRef &&
    typeof originalRef === "object" &&
    "current" in originalRef
  ) {
    // Update with latest debugErrorFn
    refObjectDebugMap.set(originalRef, debugErrorFn);

    // Get or create wrapped ref (created only once for stability)
    let wrapped = refObjectCache.get(originalRef);
    if (!wrapped) {
      wrapped = (element) => {
        if (element instanceof HTMLElement) {
          const fn = refObjectDebugMap.get(originalRef);
          if (fn) {
            storeDebugInfo(element, fn);
          }
        }
        try {
          originalRef.current = element;
        } catch (e) {
          // ignore
        }
      };
      refObjectCache.set(originalRef, wrapped);
    }
    return wrapped;
  }

  return undefined;
};

export function interceptReactJSX() {
  // Save original functions
  const originalCreateElement = React.createElement;
  const originalJsx = jsxRuntime && jsxRuntime.jsx;
  const originalJsxs = jsxRuntime && jsxRuntime.jsxs;
  const originalJsxDEV = jsxDevRuntime && jsxDevRuntime.jsxDEV;
  const setKeys = new Map();
  const overrideRuntimeMethod = (runtime, key, value) => {
    if (!runtime) return;
    const setObj = runtime && runtime.default ? runtime.default : runtime;
    try {
      Object.defineProperty(setObj, key, {
        configurable: true,
        writable: true,
        value,
      });
    } catch (e) {
      console.warn(`[Debug Source] Failed to override ${String(key)}:`, e);
    }
  };

  const createElementDebugError = () => {
    const error = new Error();
    return () => error;
  };

  // Check if it's a native DOM element (string type)
  const isNativeDOMElement = (type) => {
    return typeof type === "string";
  };

  // Intercept React.createElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.createElement = function (type, props, ...children) {
    // Only intercept native DOM elements or components that might render DOM
    if (!isNativeDOMElement(type) && typeof type !== "function") {
      return originalCreateElement(type, props, ...children);
    }

    const debugErrorFn = createElementDebugError();

    // Create a shallow copy to avoid mutating original props
    const mutableProps = props ? { ...props } : {};

    const wrappedRef = getOrCreateWrappedRef(mutableProps.ref, debugErrorFn);
    if (wrappedRef) {
      mutableProps.ref = wrappedRef;
    }
    return originalCreateElement(type, mutableProps, ...children);
  };

  // Intercept jsx
  overrideRuntimeMethod(jsxRuntime, "jsx", function (type, props, key) {
    // Only intercept native DOM elements or components
    if (!isNativeDOMElement(type) && typeof type !== "function") {
      return originalJsx(type, props, key);
    }

    const debugErrorFn = createElementDebugError();

    // Create a shallow copy to avoid mutating original props
    const mutableProps = props ? { ...props } : {};

    const wrappedRef = getOrCreateWrappedRef(mutableProps.ref, debugErrorFn);
    if (wrappedRef) {
      mutableProps.ref = wrappedRef;
    }

    return originalJsx(type, mutableProps, key);
  });

  // Intercept jsxs
  overrideRuntimeMethod(jsxRuntime, "jsxs", function (type, props, key) {
    // Only intercept native DOM elements or components
    if (!isNativeDOMElement(type) && typeof type !== "function") {
      return originalJsxs(type, props, key);
    }

    const debugErrorFn = createElementDebugError();

    // Create a shallow copy to avoid mutating original props
    const mutableProps = props ? { ...props } : {};

    const wrappedRef = getOrCreateWrappedRef(mutableProps.ref, debugErrorFn);
    if (wrappedRef) {
      mutableProps.ref = wrappedRef;
    }

    return originalJsxs(type, mutableProps, key);
  });

  // Intercept jsxDEV
  if (originalJsxDEV) {
    overrideRuntimeMethod(
      jsxDevRuntime,
      "jsxDEV",
      function (type, props, key, isStaticChildren, source, self) {
        // Only intercept native DOM elements or components
        if (!isNativeDOMElement(type) && typeof type !== "function") {
          return originalJsxDEV(
            type,
            props,
            key,
            isStaticChildren,
            source,
            self,
          );
        }

        const debugErrorFn = createElementDebugError();

        // Create a shallow copy to avoid mutating original props
        const mutableProps = props ? { ...props } : {};

        const wrappedRef = getOrCreateWrappedRef(
          mutableProps.ref,
          debugErrorFn,
        );
        if (wrappedRef) {
          mutableProps.ref = wrappedRef;
        }

        return originalJsxDEV(
          type,
          mutableProps,
          key,
          isStaticChildren,
          source,
          self,
        );
      },
    );
  }
}

export function getDebugErrorFromSelector(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    return null;
  }

  const tagName = element.tagName.toLowerCase();

  // First try to get from WeakMap (native DOM elements)
  const nativeDebugErrorFn = nativeElementDebugMap.get(element);
  if (nativeDebugErrorFn) {
    return {
      element,
      tagName,
      debugError: nativeDebugErrorFn(),
    };
  }

  // Then try to get via Fiber node
  const fiber = FiberDebugger.getFiberFromDOMNode(element);
  if (fiber) {
    const fiberDebugErrorFn = fiberDebugMap.get(fiber);
    if (fiberDebugErrorFn) {
      return {
        element,
        tagName,
        debugError: fiberDebugErrorFn(),
      };
    }
  }

  return null;
}
