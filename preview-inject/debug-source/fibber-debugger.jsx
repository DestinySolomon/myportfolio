// FiberDebugger: utilities to extract React Fiber node from DOM element
export class FiberDebugger {
  /**
   * Get Fiber node from DOM element
   * React stores a reference to the internal Fiber node on the DOM element
   */
  static getFiberFromDOMNode(element) {
    if (!element) return null;

    // Find React internal properties
    const key = Object.keys(element).find(
      (key) =>
        key.startsWith("__reactFiber$") ||
        key.startsWith("__reactInternalInstance$"),
    );

    return key ? element[key] : null;
  }
}

export default FiberDebugger;
