

# 🔹 What is Prop Drilling?

**Prop Drilling** is when you pass data from a **top-level component** down to **deeply nested components** **via props**, even if some of the intermediate components **don’t need** that data.

> The props are just “passing through” those middle components to get to the target.

---

### 🧠 Example:

Let's say we have this component tree:

```
App → Parent → Child → Grandchild
```

Now imagine you want to pass some data (`userName`) from `App` to `Grandchild`.

You’d have to do this:

```jsx
function App() {
  const userName = "Zeno";
  return <Parent userName={userName} />;
}

function Parent({ userName }) {
  return <Child userName={userName} />;
}

function Child({ userName }) {
  return <Grandchild userName={userName} />;
}

function Grandchild({ userName }) {
  return <h1>Hello, {userName}</h1>;
}
```

👉 Here, only **Grandchild** needs `userName`,  
but **Parent** and **Child** are forced to **receive and pass it** — even though they don't use it.

That’s prop drilling.

---

## ❌ Why Prop Drilling is a Problem

- Becomes messy in large apps
- Makes components tightly coupled
- Harder to refactor
- Unnecessary re-renders in components that don’t even use the prop

---

## ✅ Alternatives to Prop Drilling

1. **React Context API**  
   → Store shared data in a context and use it directly wherever needed.

2. **State Management Libraries**  
   → Like Redux, Zustand, Jotai, Recoil — for more scalable state sharing.

3. **Lifting State Up**  
   → Sometimes drilling is okay if the component tree is shallow.

---

### ✍️ In Summary:

| Concept          | Description |
|------------------|-------------|
| Prop Drilling    | Passing data through intermediate components via props |
| Problem          | Unnecessary complexity & tight coupling |
| Better Options   | Context API, state management libraries |

