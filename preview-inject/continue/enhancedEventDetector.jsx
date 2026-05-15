/**
 * Enhanced Event Detector
 * Combines React Fiber detection + addEventListener interception
 *
 * Note: Must be injected before React app starts to intercept all addEventListener calls
 *
 * Uses WeakMap to store element references. When DOM elements are removed,
 * corresponding records are automatically garbage collected, preventing memory leaks.
 */

/**
 * Global event listener registry
 * Uses WeakMap to prevent memory leaks - auto cleanup when elements are removed
 */
class EventListenerRegistry {
  // WeakMap: auto cleanup when element is GC'd
  #listeners = new WeakMap();
  #originalAddEventListener;
  #originalRemoveEventListener;
  #patched = false;

  constructor() {
    this.#originalAddEventListener = HTMLElement.prototype.addEventListener;
    this.#originalRemoveEventListener =
      HTMLElement.prototype.removeEventListener;
  }

  /**
   * Intercept addEventListener to record all event listeners
   */
  patch() {
    if (this.#patched) return;

    const self = this;

    // Intercept addEventListener
    HTMLElement.prototype.addEventListener = function (
      type,
      listener,
      options,
    ) {
      // Record listener
      self.#recordListener(this, type, listener);

      // Call original method
      return self.#originalAddEventListener.call(this, type, listener, options);
    };

    // Intercept removeEventListener
    HTMLElement.prototype.removeEventListener = function (
      type,
      listener,
      options,
    ) {
      // Remove record
      self.#removeListener(this, type, listener);

      // Call original method
      return self.#originalRemoveEventListener.call(
        this,
        type,
        listener,
        options,
      );
    };

    this.#patched = true;
    console.log("[EventListenerRegistry] ✅ addEventListener patched");
  }

  /**
   * Restore original addEventListener
   */
  unpatch() {
    if (!this.#patched) return;

    HTMLElement.prototype.addEventListener = this.#originalAddEventListener;
    HTMLElement.prototype.removeEventListener =
      this.#originalRemoveEventListener;

    this.#patched = false;
    console.log("[EventListenerRegistry] ⚠️ addEventListener unpatched");
  }

  /**
   * Record a listener
   */
  #recordListener(element, type, listener) {
    let elementListeners = this.#listeners.get(element);

    if (!elementListeners) {
      elementListeners = new Map();
      this.#listeners.set(element, elementListeners);
    }

    let typeListeners = elementListeners.get(type);
    if (!typeListeners) {
      typeListeners = new Set();
      elementListeners.set(type, typeListeners);
    }

    typeListeners.add(listener);
  }

  /**
   * Remove a listener record
   */
  #removeListener(element, type, listener) {
    const elementListeners = this.#listeners.get(element);
    if (!elementListeners) return;

    const typeListeners = elementListeners.get(type);
    if (!typeListeners) return;

    typeListeners.delete(listener);

    // Clean up empty collections
    if (typeListeners.size === 0) {
      elementListeners.delete(type);
    }
    // Note: WeakMap doesn't need manual cleanup of empty elementListeners
    // It auto-cleans when element is GC'd
  }

  /**
   * Check if element has event listeners
   */
  hasListeners(element, eventTypes) {
    const elementListeners = this.#listeners.get(element);
    if (!elementListeners || elementListeners.size === 0) {
      return false;
    }

    if (!eventTypes) {
      return true;
    }

    return eventTypes.some((type) => {
      const listeners = elementListeners.get(type);
      return listeners && listeners.size > 0;
    });
  }

  /**
   * Get all event listener types for an element
   */
  getEventTypes(element) {
    const elementListeners = this.#listeners.get(element);
    if (!elementListeners) return [];

    return Array.from(elementListeners.keys());
  }

  /**
   * Get listener count for a specific event type
   */
  getListenerCount(element, type) {
    const elementListeners = this.#listeners.get(element);
    if (!elementListeners) return 0;

    const typeListeners = elementListeners.get(type);
    return typeListeners ? typeListeners.size : 0;
  }

  /**
   * Get debug info
   * Note: WeakMap cannot be enumerated, so only basic state info is returned
   */
  getDebugInfo() {
    return {
      patched: this.#patched,
      // WeakMap cannot get size or enumerate - this is the tradeoff for memory leak prevention
      note: "WeakMap is used for automatic memory cleanup. Cannot enumerate elements.",
    };
  }

  /**
   * Get debug info for a specific element
   */
  getElementDebugInfo(element) {
    const elementListeners = this.#listeners.get(element);
    if (!elementListeners) {
      return {
        element,
        hasListeners: false,
        eventTypes: [],
        totalListeners: 0,
      };
    }

    return {
      element,
      tag: element.tagName,
      className: element.className,
      hasListeners: true,
      eventTypes: Array.from(elementListeners.keys()),
      totalListeners: Array.from(elementListeners.values()).reduce(
        (sum, set) => sum + set.size,
        0,
      ),
    };
  }
}

// Create global registry instance
const eventListenerRegistry = new EventListenerRegistry();

/**
 * Interaction event types (mouse, touch, etc.)
 */
const INTERACTION_EVENT_TYPES = [
  "click",
  "dblclick",
  "contextmenu",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointerup",
  "pointermove",
  "pointerenter",
  "pointerleave",
  "pointerover",
  "pointerout",
  "pointercancel",
];

/**
 * Check if element has interaction events added via addEventListener
 */
export function hasAddEventListenerInteractions(element) {
  return eventListenerRegistry.hasListeners(element, INTERACTION_EVENT_TYPES);
}

/**
 * Get interaction event types added via addEventListener
 */
export function getAddEventListenerInteractions(element) {
  const allTypes = eventListenerRegistry.getEventTypes(element);
  return allTypes.filter((type) => INTERACTION_EVENT_TYPES.includes(type));
}

/**
 * Get event listener details for an element
 */
export function getAddEventListenerDetail(element) {
  const eventTypes = getAddEventListenerInteractions(element);

  const listeners = {};
  eventTypes.forEach((type) => {
    listeners[type] = eventListenerRegistry.getListenerCount(element, type);
  });

  return {
    hasEvents: eventTypes.length > 0,
    eventTypes,
    listeners,
  };
}

/**
 * Get debug info for an element
 */
export function getAddEventListenerDebugInfo(element) {
  return eventListenerRegistry.getElementDebugInfo(element);
}

/**
 * Initialize enhanced detector (must be called before app starts)
 */
export function initEnhancedEventDetector(targetWindow = window) {
  eventListenerRegistry.patch();

  // Inject to global object
  targetWindow.__eventListenerRegistry__ = {
    hasListeners: hasAddEventListenerInteractions,
    getEventTypes: getAddEventListenerInteractions,
    getDetail: getAddEventListenerDetail,
    getDebugInfo: () => eventListenerRegistry.getDebugInfo(),
    getElementDebugInfo: getAddEventListenerDebugInfo,
  };

  console.log(
    "[EnhancedEventDetector] ✅ Initialized and patched addEventListener",
  );
}

/**
 * Cleanup enhanced detector
 */
export function cleanupEnhancedEventDetector() {
  eventListenerRegistry.unpatch();
  // WeakMap auto-cleans via GC
}

// Auto-inject (needed in both dev and prod)
if (typeof window !== "undefined") {
  initEnhancedEventDetector(window);
}
