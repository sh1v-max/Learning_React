# **Class-Based Components**  

Before **React Hooks** (`useState`, `useEffect`, etc.), **class-based components** were widely used for managing **state** and **lifecycle methods**. While functional components are now preferred, understanding class components is crucial for maintaining older React projects.  

---

## **1️⃣ What is a Class-Based Component?**  
A **class component** is a JavaScript class that extends `React.Component` and must include a `render()` method that returns JSX.

### **✅ Example: Basic Class Component**
```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```
### **📌 Key Points:**  
- It **extends `React.Component`**, making it a React component.  
- The **`render()` method** is required and returns JSX.  
- It **receives `props` using `this.props`** instead of function parameters.  

---

## **2️⃣ Using Props in a Class Component**
Props (short for **properties**) allow us to pass data from a **parent component** to a **child component**.

### **✅ Example: Passing Props to a Class Component**
```jsx
import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome name="John" />
      <Welcome name="Alice" />
    </div>
  );
}

export default App;
```
### **🚀 How This Works?**
- When `<Welcome name="John" />` is used, `this.props.name` becomes `"John"`.  
- The **`render()` method** in `Welcome` returns:  
  ```jsx
  <h1>Hello, John!</h1>
  ```

---

## **3️⃣ Adding State to a Class Component**  
Unlike functional components (which use `useState`), class components use **`this.state`** to manage state.

### **✅ Example: Class Component with State**
```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }; // Initializing state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Updating state
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
### **📌 How This Works?**
- **`this.state`** holds component state (`count: 0`).  
- **`this.setState()`** updates the state (`count + 1`).  
- React automatically **re-renders the component** when `state` changes.  

---

## **4️⃣ Class Component Lifecycle Methods**  
Class components have **lifecycle methods** that execute code at specific stages of the component's life.

| Lifecycle Method | When It Runs | Equivalent in Functional Components |
|-----------------|-------------|-------------------------------------|
| `componentDidMount()` | After first render (useful for API calls) | `useEffect(() => {}, [])` |
| `componentDidUpdate(prevProps, prevState)` | After state/props update | `useEffect(() => {}, [dependency])` |
| `componentWillUnmount()` | Just before component is removed | `useEffect(() => { return () => cleanup }, [])` |

---

### **✅ Example: Lifecycle Methods in a Class Component**
```jsx
import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor() {
    super();
    this.state = { message: "Loading..." };
  }

  componentDidMount() {
    console.log("Component Mounted! Fetching data...");
    setTimeout(() => {
      this.setState({ message: "Data Loaded!" });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated!");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount!");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default LifecycleDemo;
```
### **📌 Explanation:**
- **`componentDidMount()`** → Runs **after** first render. Used for API calls.  
- **`componentDidUpdate(prevProps, prevState)`** → Runs when state/props change.  
- **`componentWillUnmount()`** → Runs before the component is removed. Used for cleanup (e.g., removing event listeners).  

---

## **5️⃣ Handling Events in Class Components**
Event handling is slightly different in class components because `this` needs to be bound.

### **✅ Example: Handling Click Events**
```jsx
import React, { Component } from "react";

class ClickHandler extends Component {
  constructor() {
    super();
    this.state = { message: "Click the button" };
  }

  handleClick = () => {
    this.setState({ message: "Button Clicked!" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClickHandler;
```
### **📌 Why Use Arrow Functions (`handleClick = () => {}`)?**
- Arrow functions **automatically bind `this`**, avoiding the need to manually bind it in the constructor.  

---

## **6️⃣ Converting a Class Component to a Functional Component**
Since **functional components** and **Hooks** (`useState`, `useEffect`) are now the preferred way, let’s convert a class component to a functional one.

### **🟢 Class Component with Props & State**
```jsx
import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello" };
  }

  updateText = () => {
    this.setState({ text: "Hello, React!" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <h2>Welcome, {this.props.name}!</h2>
        <button onClick={this.updateText}>Update Text</button>
      </div>
    );
  }
}

export default Message;
```

---

### **🔵 Equivalent Functional Component with Hooks**
```jsx
import React, { useState } from "react";

const Message = ({ name }) => {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h1>{text}</h1>
      <h2>Welcome, {name}!</h2>
      <button onClick={() => setText("Hello, React!")}>Update Text</button>
    </div>
  );
};

export default Message;
```

---

### **📌 What's Changed?**
| Feature | Class Component | Functional Component |
|---------|----------------|----------------------|
| Props | `this.props.name` | `({ name })` |
| State | `this.state` | `useState` |
| Update State | `this.setState()` | `setState` from `useState` |
| Lifecycle Methods | `componentDidMount` | `useEffect(() => {}, [])` |

---

## **7️⃣ When to Use Class Components?**
| ✅ Use Class Components When... | ❌ Avoid Class Components When... |
|--------------------------------|--------------------------------|
| Working on older React projects. | Starting a new React project. |
| Using libraries that depend on class components. | Want better performance with hooks. |
| Maintaining complex components with lifecycle methods. | Need simpler, readable code. |

---

## **🎯 Conclusion**
- **Class components were essential before React Hooks.**  
- **Functional components with Hooks** (`useState`, `useEffect`) are now the preferred way.  
- Understanding **class components** is useful for maintaining **legacy code**.  
