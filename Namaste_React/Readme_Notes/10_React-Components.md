# **React Components**  

## **What is a React Component?**  
A **React component** is a reusable piece of UI that controls how a part of the web page looks and behaves. Instead of writing an entire page in one file, React lets you break it into **small, independent components** that can be reused and managed easily.  

---

## **1. Functional Components** (Modern Approach ✅)  
### **What are Functional Components?**  
A **functional component** is a simple JavaScript function that:
- Accepts **props** (inputs) as arguments.
- Returns **JSX (HTML-like syntax)** to define the UI.
- Is **stateless** by default but can manage state using **React Hooks**.

---

### **Example: Simple Functional Component**
```jsx
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

export default Greeting;
```
- This function returns **JSX** (`<h1>Hello, World!</h1>`).
- **No `class` keyword** is needed.

---

### **Props in Functional Components**  
Props (short for **properties**) allow components to receive data from their parent.

✅ **Example: Functional Component with Props**  
```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Using the component
<Greeting name="Alice" />
```
- `name="Alice"` is passed as a **prop** to the `Greeting` component.
- Inside the component, `{props.name}` dynamically displays the name.

---

### **State in Functional Components (Using Hooks)**  
Functional components can manage state using **React Hooks**, mainly `useState`.

✅ **Example: Functional Component with State (`useState`)**
```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // useState initializes "count" to 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```
### **How `useState` Works**
1. `useState(0)` creates a **state variable (`count`)** and sets its initial value to `0`.
2. `setCount(count + 1)` updates the state when the button is clicked.
3. React **re-renders** the component whenever state changes.

---

### **Lifecycle Methods in Functional Components (`useEffect`)**
Functional components use `useEffect` to perform **side effects** (e.g., fetching data, DOM updates).

✅ **Example: Fetching Data with `useEffect`**
```jsx
import { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <p>Data: {data}</p>;
};

export default DataFetcher;
```
### **How `useEffect` Works**
- Runs **after** the component renders.
- Fetches data from an API.
- Updates the state (`setData(data)`), causing a re-render.

---

## **2. Class Components** (Older Approach ❌)  
### **What are Class Components?**  
Class components use ES6 **class syntax** and **extend `React.Component`**. They can:
- Hold **state** inside a `this.state` object.
- Use **lifecycle methods** for side effects (`componentDidMount`, `componentDidUpdate`).

---

### **Example: Simple Class Component**
```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default Greeting;
```
- Uses a **class** instead of a function.
- Must include a `render()` method to return JSX.

---

### **Props in Class Components**
✅ **Example: Class Component with Props**
```jsx
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Using the component
<Greeting name="Alice" />
```
- Props are accessed using `this.props`.

---

### **State in Class Components**
✅ **Example: Class Component with State**
```jsx
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```
### **How State Works in Class Components**
1. `this.state = { count: 0 }` initializes the state.
2. `this.setState({ count: this.state.count + 1 })` updates the state.
3. React **re-renders** the component when the state changes.

---

### **Lifecycle Methods in Class Components**
| Method | Purpose |
|--------|---------|
| `componentDidMount()` | Runs after the component first appears on the screen. |
| `componentDidUpdate()` | Runs when the component updates. |
| `componentWillUnmount()` | Runs before the component is removed from the UI. |

✅ **Example: Fetching Data in `componentDidMount`**
```jsx
class DataFetcher extends Component {
  state = { data: null };

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return <p>Data: {this.state.data}</p>;
  }
}

export default DataFetcher;
```
- `componentDidMount()` fetches data **after** the component is mounted.
- `setState()` updates the component when data is received.

---

## **Functional vs. Class Components (Comparison)**
| Feature | Functional Components ✅ | Class Components ❌ |
|---------|------------------|----------------|
| Syntax | Simple function | ES6 class (`extends Component`) |
| State Management | `useState()` | `this.state` & `this.setState()` |
| Lifecycle | `useEffect()` | `componentDidMount()`, `componentDidUpdate()` |
| Performance | **Faster** (no `this` binding) | **Slower** (requires `this` binding) |
| Code Size | **Shorter, cleaner** | More boilerplate code |
| Hooks Support | ✅ Yes | ❌ No |

---

## **Conclusion**
- ✅ **Functional components** are **preferred** because they are **simpler, faster, and require less code**.
- ✅ **React Hooks (`useState`, `useEffect`)** allow functional components to handle state and side effects **without class components**.
- ❌ **Class components are outdated** and are no longer used in modern React apps.

