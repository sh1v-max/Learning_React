## 🧾 REDUX

---

### 🔍 What is Redux?

- **Redux** is a **state management library** for JavaScript applications.
- It's commonly used with **React**, but it can be used with any JavaScript framework or even plain JS.
- Redux helps you **manage and organize state** when your app becomes complex.
- Created by **Dan Abramov** and **Andrew Clark** in 2015.

---

### 💡 The Core Idea

Redux stores the **entire application state in one central place** (called the store), rather than letting each component manage its own state.

This makes state:
- **Predictable**
- **Centralized**
- **Traceable**

---

### 🔩 Key Concepts (with Explanations)

---

#### 1. **Store**
- A JavaScript object that holds the **entire state tree** of your application.
- Created using `createStore(reducer)` function.
- Only **one store** per Redux application (single source of truth).

```js
import { createStore } from 'redux';
const store = createStore(reducer);
```

---

#### 2. **Actions**
- Plain JavaScript objects that **describe an event** or intention.
- Must have a `type` property (a string).
- Can also carry extra data (called **payload**).

```js
const action = {
  type: 'INCREMENT',
  payload: 1
};
```

---

#### 3. **Reducers**
- Pure functions that **take current state and action**, and **return a new state**.
- Never mutate state directly—must return a **new state object**.

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
```

---

#### 4. **Dispatch**
- The method used to **send an action to the store**.
- Triggers the reducer to calculate the new state.

```js
store.dispatch({ type: 'INCREMENT', payload: 1 });
```

---

#### 5. **Subscribe**
- Allows components to **listen to state changes**.
- Useful for manual usage; with React, usually handled by `react-redux`.

```js
store.subscribe(() => {
  console.log(store.getState());
});
```

---

### 🔁 Redux Data Flow (One-Way)

1. Component **dispatches** an action.
2. Action is **sent to reducer**.
3. Reducer **calculates new state** based on action.
4. Store **updates the state**.
5. Components that subscribed to the store get the new state and re-render.

---

### ⚙️ Example Flow: Counter

```js
// Action
{ type: 'INCREMENT', payload: 1 }

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
  }
}

// Store
const store = createStore(reducer);

// Dispatching
store.dispatch({ type: 'INCREMENT' });
```

---

### 🚀 React + Redux Integration

Use the `react-redux` library, which provides:

1. **Provider**  
   - Wraps your app and gives components access to the Redux store.

```js
import { Provider } from 'react-redux';

<Provider store={store}>
  <App />
</Provider>
```

2. **useSelector()**  
   - Read state from the store.

```js
const count = useSelector(state => state.count);
```

3. **useDispatch()**  
   - Dispatch actions from components.

```js
const dispatch = useDispatch();
dispatch({ type: 'INCREMENT' });
```

---

### 🧩 Middleware

Middleware allows you to handle **asynchronous logic** (like API calls) or log actions.

Common middleware:
- **Redux Thunk** (simple async logic)
- **Redux Saga** (more complex workflows)

Example (Thunk):
```js
function fetchData() {
  return async function(dispatch) {
    const data = await fetch('/api');
    dispatch({ type: 'DATA_LOADED', payload: data });
  };
}
```

---

### 📈 When Should You Use Redux?

Use Redux if:
- You have **global state** that many components rely on (e.g., authentication, cart items, user settings).
- The **state logic is complex** and needs to be predictable and testable.
- You need **advanced debugging**, logging, undo/redo, etc.

Avoid Redux if:
- Your app is small and local state via `useState` or `useContext` is enough.
- You don’t need to share much state between components.
