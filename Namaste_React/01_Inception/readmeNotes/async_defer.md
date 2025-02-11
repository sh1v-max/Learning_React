# Difference between async and defer attribute

The `async` and `defer` attributes are used in `<script>` tags in HTML to control how scripts are loaded and executed in relation to the rest of the HTML document. They both allow scripts to be downloaded in parallel (asynchronous), but they handle the execution timing differently.

### 1. **`async` (Asynchronous Loading)**
   - **Behavior:** The script is downloaded in parallel (asynchronously) with other resources on the page, and once the script is fully downloaded, it is executed immediately, without waiting for the HTML document to finish parsing.
   - **Execution Order:** Scripts with `async` are executed as soon as they are downloaded, potentially out of order (not guaranteed to execute in the order they appear in the document).
   - **Use Case:** Suitable for independent scripts that don't rely on the DOM being fully parsed and don't need to wait for other scripts.
   
   **Example:**
   ```html
   <script src="script.js" async></script>
   ```
   - The script `script.js` is downloaded in parallel, and once it's ready, it runs, potentially interrupting the parsing of the rest of the HTML.

### 2. **`defer` (Deferred Loading)**
   - **Behavior:** The script is downloaded in parallel (asynchronously), but it will **not execute** until the entire HTML document has been fully parsed. This means the script will execute after the DOM is ready, just before the `DOMContentLoaded` event.
   - **Execution Order:** Scripts with `defer` are guaranteed to execute in the order they appear in the document.
   - **Use Case:** Suitable for scripts that interact with the DOM or need to be executed in a specific order, ensuring that the document is fully loaded first.
   
   **Example:**
   ```html
   <script src="script.js" defer></script>
   ```
   - The script `script.js` is downloaded in parallel, but it will only execute after the entire HTML document has been parsed.

### **Key Differences:**
- **Execution Timing:** 
  - `async` executes the script as soon as it's downloaded (without waiting for the DOM).
  - `defer` executes the script after the DOM is completely parsed.
  
- **Execution Order:**
  - `async` does not guarantee the order of script execution.
  - `defer` guarantees scripts will execute in the order they are listed in the HTML.

### **When to Use:**
- **`async`:** Use it for scripts that don't need to wait for the DOM to be parsed or rely on other scripts (e.g., analytics or external APIs).
- **`defer`:** Use it for scripts that depend on the DOM being fully loaded, such as those interacting with HTML elements or relying on the order of execution.

### Example:
```html
<!-- Asynchronous script -->
<script src="asyncScript.js" async></script>

<!-- Deferred script -->
<script src="deferredScript.js" defer></script>
```