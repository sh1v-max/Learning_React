# **Understanding `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React**  

These lifecycle methods are used in **class components** to control component behavior at different stages of its lifecycle.

---

## **1️⃣ `componentDidMount()` - Runs After Initial Render**
🔹 **Purpose:**  
- Runs **once** after the component is inserted into the DOM.  
- Used for **fetching data**, **setting up subscriptions**, or **starting timers**.  

🔹 **Example: Fetching API Data on Mount**  
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return <h1>Data: {this.state.data ? this.state.data : "Loading..."}</h1>;
  }
}
```
🔹 **When to Use?**  
✅ Fetching API data  
✅ Starting **intervals, timers** (`setInterval`, `setTimeout`)  
✅ Setting up **subscriptions (e.g., WebSockets, event listeners)**  

🔹 **Equivalent in Functional Components (Hooks):**  
```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);  // Empty dependency array means it runs once (on mount)
```

---

## **2️⃣ `componentDidUpdate(prevProps, prevState)` - Runs on Updates**
🔹 **Purpose:**  
- Runs **after every re-render** (when `state` or `props` change).  
- Used for **side effects**, like fetching new data based on state changes.  

🔹 **Example: Fetching New Data When `props.id` Changes**  
```jsx
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    fetch(`https://api.example.com/data/${this.props.id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
}
```
🔹 **When to Use?**  
✅ Fetching data when **props change**  
✅ Updating the DOM when **state changes**  

🔹 **Equivalent in Functional Components (Hooks):**  
```jsx
useEffect(() => {
  fetch(`https://api.example.com/data/${id}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, [id]);  // Runs only when `id` changes
```

---

## **3️⃣ `componentWillUnmount()` - Runs Before Component is Removed**
🔹 **Purpose:**  
- Runs **just before** the component is unmounted from the DOM.  
- Used for **cleanup** (e.g., clearing timers, unsubscribing from events).  

🔹 **Example: Cleaning Up Event Listeners**  
```jsx
componentDidMount() {
  window.addEventListener("resize", this.handleResize);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.handleResize);
}
```
🔹 **When to Use?**  
✅ Cleaning up **event listeners**  
✅ Clearing **intervals, timers** (`setInterval`, `setTimeout`)  
✅ Unsubscribing from **API/WebSocket connections**  

🔹 **Equivalent in Functional Components (Hooks):**  
```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);  // Cleanup function runs on unmount
```

---

## **🎯 Summary Table**
| Lifecycle Method | When It Runs | Use Cases | Functional Component Equivalent |
|-----------------|--------------|-----------|---------------------------------|
| **`componentDidMount`** | After the component is first rendered | Fetching API data, setting timers, event listeners | `useEffect(() => {...}, [])` |
| **`componentDidUpdate`** | After every re-render | Fetching new data on state/props update | `useEffect(() => {...}, [dependency])` |
| **`componentWillUnmount`** | Before component is removed | Cleaning up timers, event listeners | `useEffect(() => { return () => {...}; }, [])` |

---

## **🚀 Conclusion**
- **Use `componentDidMount`** to fetch data, start timers, or subscribe to events.  
- **Use `componentDidUpdate`** to fetch new data when state/props change.  
- **Use `componentWillUnmount`** for cleanup tasks like removing event listeners or clearing timers.  

