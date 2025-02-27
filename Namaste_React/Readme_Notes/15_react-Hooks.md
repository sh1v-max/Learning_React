# **React Hooks 🪝 – A Detailed Guide**  

React Hooks allow **functional components** to use features like **state, lifecycle methods, and context** without needing class components.  

---

## **🚀 Why Do We Need Hooks?**  

Before Hooks, React used **class components** for state management and lifecycle methods:  
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}
```
### ❌ Problems with Class Components  
- **Complex Syntax:** Requires `this.state` and `this.setState`.  
- **Difficult Code Reuse:** Hard to share logic between components.  
- **Messy Lifecycle Methods:** Handling `componentDidMount`, `componentDidUpdate`, etc.  

👉 **Hooks solve these issues!** Now, we can use state and lifecycle features **inside functional components**.  

---

## **🔥 Common React Hooks**  

### **1️⃣ useState – Managing State**  

`useState` allows components to **store and update state** inside functional components.  

#### **✅ Example**  
```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Declare state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```
### **💡 How it Works?**
- `useState(0)`: Initializes `count` to `0`.  
- `setCount(count + 1)`: Updates state when the button is clicked.  
- No need for **`this.state` or `this.setState`**.  

---

### **2️⃣ useEffect – Handling Side Effects**  

`useEffect` helps with **side effects** like API calls, event listeners, and DOM updates. It replaces lifecycle methods like **`componentDidMount` and `componentDidUpdate`**.  

#### **✅ Example** – Timer Component  
```jsx
import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty array = Run only on mount

  return <p>Timer: {seconds}s</p>;
};
```
### **💡 How it Works?**
- Runs **after every render** by default.  
- **Dependency array (`[]`)** makes it run only once (like `componentDidMount`).  
- The **cleanup function** (`clearInterval`) prevents memory leaks.  

---

### **3️⃣ useContext – Global State Management**  

`useContext` allows components to **access global state** without passing props down multiple levels (**avoids prop drilling**).  

#### **✅ Example – User Context**  
```jsx
import { createContext, useContext } from "react";

const UserContext = createContext(); // Step 1: Create Context

const UserProvider = ({ children }) => {
  return <UserContext.Provider value="John Doe">{children}</UserContext.Provider>;
};

const Profile = () => {
  const user = useContext(UserContext); // Step 2: Access Context
  return <p>User: {user}</p>;
};

const App = () => (
  <UserProvider>
    <Profile />
  </UserProvider>
);
```
### **💡 How it Works?**
- `createContext()` creates a **global state**.  
- `UserProvider` **wraps** the components and provides a value.  
- `useContext(UserContext)` lets any component **access the shared state**.  

---

### **4️⃣ useRef – Directly Access DOM & Store Values**  

`useRef` helps to **access DOM elements directly** and **store values without causing re-renders**.  

#### **✅ Example – Auto Focus Input Field**  
```jsx
import { useRef, useEffect } from "react";

const InputFocus = () => {
  const inputRef = useRef(null); // Step 1: Create a ref

  useEffect(() => {
    inputRef.current.focus(); // Step 2: Focus input on mount
  }, []);

  return <input ref={inputRef} type="text" />;
};
```
### **💡 How it Works?**
- `useRef(null)`: Creates a reference.  
- `inputRef.current.focus()`: Focuses on the input when the component mounts.  

#### **✅ Example – Storing Previous State Without Re-Rendering**  
```jsx
import { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0); // Stores previous value

  useEffect(() => {
    prevCount.current = count;
  });

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```
### **💡 How it Works?**
- `useRef` stores `prevCount`, but **doesn't trigger re-renders**.  
- Unlike `useState`, updating a ref **doesn’t cause a component to re-render**.  

---

### **5️⃣ useReducer – Complex State Management**  

`useReducer` is like `useState`, but better for **managing complex state logic** (like Redux).  

#### **✅ Example – Counter Using Reducer**  
```jsx
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};
```
### **💡 How it Works?**
- `useReducer(reducer, initialState)`: Manages state with a **reducer function**.  
- `dispatch({ type: "increment" })`: Calls an action to update state.  

---

## **📌 Summary of React Hooks**
| Hook | Purpose |
|------|---------|
| **`useState`** | Manages component state |
| **`useEffect`** | Handles side effects like API calls |
| **`useContext`** | Manages global state (without prop drilling) |
| **`useRef`** | Accesses DOM elements and stores values without re-renders |
| **`useReducer`** | Manages complex state logic (like Redux) |

---

## **🚀 Key Takeaways**
✅ **Hooks simplify React development** by allowing state and lifecycle features in functional components.  
✅ **They make code cleaner, reusable, and more readable.**  
✅ **No need for class components** – all functionalities can be handled using hooks.  
