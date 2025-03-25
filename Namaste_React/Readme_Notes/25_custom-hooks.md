# 📌 **Custom Hooks in React**  

## 🔹 **What is a Custom Hook?**  
A **custom hook** is a **reusable function** in React that starts with `use` and allows you to **extract logic** from components for better reusability and organization.  

### ✅ **Why Use Custom Hooks?**  
✔ **Avoid Repetitive Code** – Common logic can be reused.  
✔ **Separate Logic from UI** – Keeps components clean.  
✔ **Share Stateful Logic** – Logic like fetching data, form handling, or authentication can be easily shared.  
✔ **Improve Maintainability** – Easier debugging and updates.  

---

## 🔹 **How Custom Hooks Work**  
Custom hooks follow these principles:  
1️⃣ **They start with `use`** (e.g., `useCounter`, `useFetch`).  
2️⃣ **They can use React’s built-in hooks (`useState`, `useEffect`, etc.)**.  
3️⃣ **They return values (state, functions, or data)** that can be used inside components.  

---

## 🛠️ **Example 1: Custom Hook for Counter (`useCounter`)**  
📌 **A hook to manage a counter with increment and decrement functionality.**  

### 🔹 **Step 1: Create the Custom Hook (`useCounter.js`)**
```javascript
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

### 🔹 **Step 2: Use it in a Component (`CounterComponent.js`)**
```jsx
import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```

✅ **Benefits:**  
✔ The counter logic is separate from UI.  
✔ Can be reused in multiple components.  

---

## 🛠️ **Example 2: Custom Hook for Fetching Data (`useFetch`)**  
📌 **A hook to fetch data from an API and manage loading state.**  

### 🔹 **Step 1: Create the Custom Hook (`useFetch.js`)**
```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

### 🔹 **Step 2: Use it in a Component (`UsersList.js`)**
```jsx
import React from "react";
import useFetch from "./useFetch";

function UsersList() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default UsersList;
```

✅ **Benefits:**  
✔ Avoids repeating fetch logic in multiple components.  
✔ Handles loading and error states automatically.  
✔ Easy to use in different parts of an app.  

---

## 🛠️ **Example 3: Custom Hook for Managing Local Storage (`useLocalStorage`)**  
📌 **A hook to store and retrieve values from local storage.**  

### 🔹 **Step 1: Create the Custom Hook (`useLocalStorage.js`)**
```javascript
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
```

### 🔹 **Step 2: Use it in a Component (`ThemeSwitcher.js`)**
```jsx
import React from "react";
import useLocalStorage from "./useLocalStorage";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={theme}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
```

✅ **Benefits:**  
✔ Saves user preferences across sessions.  
✔ Removes the need for manual `localStorage` handling.  
✔ Reusable for storing any data in local storage.  

---

## 🎯 **Key Takeaways About Custom Hooks**
| Feature | What It Does |
|---------|-------------|
| **Starts with `use`** | Ensures React recognizes it as a hook |
| **Uses built-in hooks** | Can use `useState`, `useEffect`, etc. |
| **Encapsulates logic** | Extracts complex logic from components |
| **Reusable** | Can be used in multiple components |
| **Keeps code clean** | Improves readability and maintainability |

---

## 🔥 **When Should You Use a Custom Hook?**
✅ When **multiple components** share the same logic (e.g., fetching data, managing local storage).  
✅ When you want to **separate concerns** (keeping UI and logic separate).  
✅ When your component’s logic becomes **too complex** and needs to be broken down.  

---

## 🚀 **Final Thoughts**
Custom hooks **make React development easier** by providing a way to extract reusable logic. They **improve readability, maintainability, and reusability**, making them an essential tool in modern React applications.  
