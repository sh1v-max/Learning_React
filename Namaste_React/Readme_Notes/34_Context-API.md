
# 🔷 What is the Context API?

The **Context API** is a built-in feature in React that lets you **share data across components**, without passing props down manually at every level.

> You can think of it as a global data store — but lighter and simpler than something like Redux.

---

### 🧠 When to Use It?

Use Context API when:
- You have data that needs to be accessed by many nested components
- You're tired of passing props through multiple layers
- You want a **cleaner**, more maintainable app

Examples of shared data:
- User info (like login status, name)
- Theme (dark / light mode)
- Language or locale
- Cart items in an e-commerce app
- Restaurant info (like your Swiggy clone!)

---

## 🔧 How to Use Context API (Step-by-Step)

---

### **Step 1: Create the Context**

```jsx
// UserContext.js
import { createContext } from "react";

// Create context object
export const UserContext = createContext();
```

---

### **Step 2: Create a Provider Component**

You’ll use the `UserContext.Provider` to wrap your app or part of your component tree.

```jsx
// App.js
import { UserContext } from './UserContext';
import Dashboard from './Dashboard';

function App() {
  const user = {
    name: "Zeno",
    role: "Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```

> Now `Dashboard` and any child inside it can access `user`.

---

### **Step 3: Use the Context in Child Components**

```jsx
// Dashboard.js
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Your role is: {user.role}</p>
    </div>
  );
}
```

🔁 Any update to the context will re-render all components using it.

---

## 🔄 How It Works Behind the Scenes:

- `createContext()` creates a “channel” for shared data
- `Provider` sends the data down
- `useContext()` taps into it from any component

---

## 🧩 Multiple Contexts

You can have multiple contexts:

```jsx
export const ThemeContext = createContext();
export const AuthContext = createContext();
```

Wrap components like this:

```jsx
<ThemeContext.Provider value={theme}>
  <AuthContext.Provider value={auth}>
    <YourComponent />
  </AuthContext.Provider>
</ThemeContext.Provider>
```

Use them like this:

```jsx
const theme = useContext(ThemeContext);
const auth = useContext(AuthContext);
```

---

## ⚠️ Limitations

- Not a replacement for full-blown state management in very large apps
- Every context change causes all consuming components to re-render
- Avoid using it for high-frequency changing values (like form fields)

---

## ✅ When Context is Perfect

| Use Case                   | Is Context a Good Fit? |
|----------------------------|------------------------|
| Auth state (login info)    | ✅ Yes                 |
| Theme (dark/light)         | ✅ Yes                 |
| Language / Locale          | ✅ Yes                 |
| Shopping cart / menu state | ✅ Yes                 |
| Deep form values           | ❌ No (use local state or Redux) |

