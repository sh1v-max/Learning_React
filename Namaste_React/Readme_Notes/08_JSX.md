# **What is JSX?**  
**JSX (JavaScript XML)** is a **syntax extension** for JavaScript, commonly used in **React** to write HTML-like code inside JavaScript. It makes UI development easier and more readable.

---

## **Why Use JSX?**
1. **More Readable UI Code** – Looks like HTML but works inside JavaScript.
2. **Prevents XSS Attacks** – Automatically escapes dangerous inputs.
3. **Easier Debugging** – Helps catch errors in UI development.

---

## **Example: JSX vs. Regular JavaScript**
### **Without JSX (Using `React.createElement`)**
```js
const element = React.createElement("h1", null, "Hello, World!");
```

### **With JSX (Simpler & Readable)**
```jsx
const element = <h1>Hello, World!</h1>;
```
JSX makes it **cleaner and easier** to write UI components.

---

## **JSX Rules & Syntax**
### **1. Must Return a Single Parent Element**
✅ Correct:
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```
❌ Incorrect (multiple root elements):
```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```
**Solution**: Wrap elements in a `<div>` or **React Fragment (`<> </>`)**.

---

### **2. Use `{}` for JavaScript Expressions**
✅ Example:
```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

---

### **3. Use `className` Instead of `class`**
✅ Correct:
```jsx
const element = <p className="my-class">Styled Text</p>;
```
❌ Incorrect:
```jsx
const element = <p class="my-class">Styled Text</p>; // 'class' is a reserved keyword in JS
```

---

### **4. Self-Closing Tags for Single Elements**
✅ Correct:
```jsx
const img = <img src="image.jpg" alt="Example" />;
```
❌ Incorrect:
```jsx
const img = <img src="image.jpg" alt="Example"></img>;
```

---

## **JSX Inside a React Component**
```jsx
import React from "react";

const App = () => {
  const username = "Alice";
  return <h1>Hello, {username}!</h1>;
};

export default App;
```

---

## **How JSX Works**
- JSX is **not valid JavaScript**.
- **Babel transpiles JSX** into `React.createElement()` calls.
- Example:
  ```jsx
  <h1>Hello</h1>;
  ```
  Converts to:
  ```js
  React.createElement("h1", null, "Hello");
  ```

