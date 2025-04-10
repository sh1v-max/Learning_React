# **🪝 React Hooks – A Detailed Developer Guide**

React Hooks allow **functional components** to use features like **state, lifecycle methods, refs, context**, and more, **without needing class components**.

---

## **🚀 Why Were Hooks Introduced?**

Before Hooks, developers had to use **class components** to handle:
- Component **state** (`this.state`)
- **Lifecycle methods** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
- **Reusability** of logic across components

### ❌ Problems with Class Components
- Verbose syntax (`this.state`, `this.setState`)
- Hard to **reuse logic** between components
- Messy **lifecycle methods** with multiple responsibilities
- Confusing handling of `this` context

👉 **Hooks solve these problems** by making **functional components** more powerful and expressive.

---

## **📦 Common Built-In React Hooks**

---

### **1️⃣ `useState()` – Managing Local State**

Used to declare **state variables** inside functional components.

```jsx
const [state, setState] = useState(initialValue);
```

#### ✅ Example
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

### 🔍 How it Works:
- Returns a **pair**: current state and a function to update it.
- Component **re-renders** when state is updated.
- **Initial value** can be a static value or a function.

---

### **2️⃣ `useEffect()` – Handling Side Effects**

Handles operations that **don’t directly relate to rendering**, such as:
- API calls
- Timers
- Event listeners
- DOM manipulation

```jsx
useEffect(() => {
  // side-effect
  return () => {
    // cleanup
  };
}, [dependencies]);
```

#### ✅ Example – Timer
```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

### 🔍 How it Works:
- **Runs after render** by default.
- **Dependency array** controls when it runs:
  - `[]` → run only once on mount
  - `[count]` → run when `count` changes
- Returns an optional **cleanup function**.

---

### **3️⃣ `useContext()` – Access Global State Easily**

Allows a component to **subscribe to React context** without prop drilling.

```jsx
const value = useContext(MyContext);
```

#### ✅ Example
```jsx
const UserContext = createContext();

const App = () => (
  <UserContext.Provider value="John">
    <Profile />
  </UserContext.Provider>
);

const Profile = () => {
  const user = useContext(UserContext);
  return <p>Hello, {user}!</p>;
};
```

### 🔍 How it Works:
- Avoids passing props manually through multiple levels.
- Easy way to access global/shared state.

---

### **4️⃣ `useRef()` – Persistent Values & DOM Access**

Used to:
- Access and manipulate **DOM nodes**
- Store **mutable values** that don’t trigger re-renders

```jsx
const ref = useRef(initialValue);
```

#### ✅ Example – Focus an Input Field
```jsx
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);

return <input ref={inputRef} />;
```

#### ✅ Example – Store Previous State
```jsx
const prevCount = useRef();

useEffect(() => {
  prevCount.current = count;
});
```

### 🔍 Key Points:
- Changing `ref.current` **does not cause a re-render**.
- Ideal for timers, scroll positions, previous values, etc.

---

### **5️⃣ `useReducer()` – Complex State Logic (Redux-like)**

Great for **managing state with complex transitions**, especially when multiple values are related.

```jsx
const [state, dispatch] = useReducer(reducerFn, initialState);
```

#### ✅ Example
```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

### 🔍 When to Use:
- Complex state transitions
- Managing state objects
- When actions are dispatched from various components

---

### **6️⃣ `useMemo()` – Optimize Expensive Calculations**

Memoizes a **calculated value** to avoid recalculating it on every render.

```jsx
const memoizedValue = useMemo(() => compute(a, b), [a, b]);
```

#### ✅ Example
```jsx
const expensiveValue = useMemo(() => slowFunction(count), [count]);
```

### 🔍 Good For:
- Heavy computations
- Reducing unnecessary recalculations

---

### **7️⃣ `useCallback()` – Memoize Functions**

Returns a **memoized version of a callback** function, useful when passing callbacks to child components.

```jsx
const memoizedFn = useCallback(() => {
  doSomething();
}, [dependency]);
```

### 🔍 Helps Prevent:
- Unnecessary renders of child components that depend on function props.

---

## **🛠 Custom Hooks – Reuse Logic**

You can **build your own Hooks** by using built-in hooks inside a custom function prefixed with `use`.

#### ✅ Example – Custom `useWindowWidth`
```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

---

## **📝 Summary Table**

| Hook         | Purpose                                              |
|--------------|------------------------------------------------------|
| `useState`   | Manage local state                                   |
| `useEffect`  | Handle side effects (API, subscriptions, timers)     |
| `useContext` | Access global/shared state                           |
| `useRef`     | DOM access, store values without re-renders          |
| `useReducer` | Manage complex state logic                           |
| `useMemo`    | Cache expensive computations                         |
| `useCallback`| Cache functions to avoid re-renders                  |

---

## ✅ Final Takeaways

- Hooks let you **write cleaner, reusable logic** in **functional components**.
- No more class components required to use state or lifecycle features.
- Hooks help you manage:
  - State (`useState`, `useReducer`)
  - Side effects (`useEffect`)
  - Global state (`useContext`)
  - DOM refs and persistent values (`useRef`)
  - Performance (`useMemo`, `useCallback`)
- **Custom Hooks** = powerful way to organize and reuse logic.