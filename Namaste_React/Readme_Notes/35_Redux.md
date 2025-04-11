# 🧾 REDUX

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

### 🔩 Key Concepts 


#### 1. **Store**
- A JavaScript object that holds the **entire state tree** of your application.
- Created using `createStore(reducer)` function.
- Only **one store** per Redux application (single source of truth).

```js
import { createStore } from 'redux';
const store = createStore(reducer);
```


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


#### 4. **Dispatch**
- The method used to **send an action to the store**.
- Triggers the reducer to calculate the new state.

```js
store.dispatch({ type: 'INCREMENT', payload: 1 });
```


#### 5. **Subscribe**
- Allows components to **listen to state changes**.
- Useful for manual usage; with React, usually handled by `react-redux`.

```js
store.subscribe(() => {
  console.log(store.getState());
});
```


### 🔁 Redux Data Flow (One-Way)

1. Component **dispatches** an action.
2. Action is **sent to reducer**.
3. Reducer **calculates new state** based on action.
4. Store **updates the state**.
5. Components that subscribed to the store get the new state and re-render.


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

# 🧠 Redux Toolkit (RTK)
RTK is the **standard way to write Redux logic today**. It makes Redux code simple, powerful, and clean by handling a lot of the boilerplate automatically.

## 🔑 Core Concepts in Redux Toolkit


### 📁 1. Slice – `createSlice()`

A **slice** is a piece of state logic.  
`createSlice()` does three things for you:
- Creates a state slice (`initialState`)
- Creates reducers (functions to change state)
- Auto-generates actions for those reducers

```js
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    }
  }
});

// auto-generated action creators
export const { increment, decrement } = counterSlice.actions;

// reducer to plug into store
export default counterSlice.reducer;
```

---

### 🏬 2. Store – `configureStore()`

Instead of `createStore()` (old Redux), RTK uses `configureStore()`, which:
- Combines all slices (reducers)
- Adds middleware automatically
- Enables Redux DevTools

```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### ⚛️ 3. React Integration with `<Provider />`

Wrap your app with Redux `<Provider>` and pass the store.  
This allows all components to access Redux state.

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### 🧠 4. Using Redux State & Actions in Components (🔔 *Subscribing to the Store*)

This is where your component gets connected to Redux — both for **reading** state and **updating** it.

#### 👁️ `useSelector()` → Subscribes to the store  
- Reads the latest value of a slice of state.
- Automatically re-renders the component when that slice updates.

#### 🧨 `useDispatch()` → Sends actions to the store  
- Triggers the reducers (inside slices) to update state.

```js
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count); // ✅ subscribing
  const dispatch = useDispatch(); // ✅ dispatching actions

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---

### 🌊 Redux Toolkit Data Flow (Unidirectional)

Let’s walk through **how data flows** in a Redux app using Redux Toolkit.

```
[ Component ]
    ↓ dispatch(increment(1))
[ Action Creator ]
    ↓
[ Reducer in Slice ]
    ↓
[ Store State Updated ]
    ↓
[ useSelector Rerenders Component ]
```

1. **Component** calls `dispatch()` with an action.
2. **Slice reducer** handles the action.
3. **Redux Store** updates the state.
4. **Subscribed components** re-render based on `useSelector()`.

✅ This pattern ensures **predictable state updates**, **clear debugging**, and **organized code**.

---

## 🧩 Where Everything Goes – Recommended Structure

```
src/
│
├── app/
│   └── store.js           // where you configureStore()
│
├── features/
│   └── counter/
│       ├── counterSlice.js  // slice logic
│       └── Counter.js       // component using that slice
│
├── index.js               // wraps App in <Provider>
└── App.js                 // main app component
```

---

## 💬 Why Immer (Mutating State Inside Reducers)?

RTK uses [Immer](https://immerjs.github.io/immer/) under the hood.  
That’s why you can write reducers like:

```js
increment: (state, action) => {
  state.count += action.payload;
}
```

Even though it looks like you're mutating `state`, Immer safely **creates a copy**, applies changes, and keeps the previous state **immutable**.

---

## ⏱ Bonus: Async with `createAsyncThunk()`

Use `createAsyncThunk()` to handle API calls.

```js
// features/products/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await fetch('/api/products');
    return await res.json();
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  }
});
```

No need to manually dispatch actions like `PRODUCTS_FETCH_SUCCESS` — `createAsyncThunk()` does that for you.

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

# Key notes for Best practice


- ## 🧩 `reducers` vs `reducer` — What's Happening?

Inside your `createSlice({...})`, you're writing:

```js
reducers: {
  addItem: (state, action) => { ... },
  removeItem: (state) => { ... },
  clearCart: (state) => { ... },
}
```

These are your **reducer functions**, i.e., logic for handling different actions — all grouped inside the `reducers` object.



Now, look at what `createSlice()` returns behind the scenes:

```js
const cartSlice = createSlice({...});
```

### `cartSlice` contains:

| Key              | Meaning |
|------------------|---------|
| `cartSlice.reducer` | ✅ The final reducer function (like a big `switch-case` behind the scenes) — this is what we plug into the Redux **store**. |
| `cartSlice.actions` | ✅ An object with automatically created **action creators** (e.g., `addItem()`, `removeItem()`, etc.) for each reducer you defined. |



### So When You Export:

```js
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// These are action creators. You dispatch them.

export default cartSlice.reducer;
// This is the root reducer function — passed into `configureStore({ reducer: ... })`
```
---
- ## 🔔 Subscribing to the Store with `useSelector()`

#### ✅ Selector Usage – Best Practices

```js
// subscribing to the store using a selector
// method 1:
const cartItems = useSelector((store) => store.cart.items)

// method 2:
const store = useSelector((store) => store)
const cartItems2 = store.cart.items
```

#### 📌 Explanation:

1. **Both Method 1 and Method 2 give the same final result** — `cartItems` will contain the same data.

2. **Method 1 is more efficient** because:
   - It selects only the specific part (`store.cart.items`) the component needs.
   - React-Redux can better detect if that specific piece of state has changed.
   - This helps **prevent unnecessary re-renders** of the component.

3. **Method 2** selects the **entire store**, which:
   - Forces the component to re-render whenever *any* part of the store changes.
   - Breaks performance optimizations.
   - Is only useful in rare cases (like debugging or logging full state).

4. 👉 **Best Practice: Always use the most specific selector possible** to keep your components performant and focused.



### Think of it like this:

```js
const cartSlice = {
  reducer: (state, action) => {
    // auto-generated reducer that handles all your defined actions
  },
  actions: {
    addItem: (payload) => ({ type: 'cart/addItem', payload }),
    removeItem: () => ({ type: 'cart/removeItem' }),
    ...
  }
}
```

So you're exporting:
- **`cartSlice.reducer`** → for the Redux store
- **`cartSlice.actions`** → for your components to `dispatch`


---

## ✅ Redux Toolkit Summary – Detailed by Purpose

| Purpose               | Tool / Function          | Description                                                                 |
|------------------------|---------------------------|-----------------------------------------------------------------------------|
| 🔧 Create Slice State  | `createSlice()`            | Defines a slice of global state, its initial value, and reducers to update it. Also auto-generates action creators. |
| 🧩 Create Store        | `configureStore()`         | Combines all reducers, sets up Redux DevTools, and applies middleware like thunk. |
| 🧬 Provide Store       | `<Provider store={}>`      | Wraps your React app, allowing components to access the Redux store. Must be at the root level. |
| 👁️ Subscribe / Read    | `useSelector()`            | Reads (subscribes to) specific parts of the state inside components. Triggers re-render on updates. |
| 🚀 Dispatch Actions    | `useDispatch()`            | Sends actions (from slice or thunk) to the Redux store to update state. |
| 🌐 Async Logic         | `createAsyncThunk()`       | Handles asynchronous operations like API calls. Auto-generates `pending`, `fulfilled`, and `rejected` action types. |

---


### 📈 When Should You Use Redux?

Use Redux if:
- You have **global state** that many components rely on (e.g., authentication, cart items, user settings).
- The **state logic is complex** and needs to be predictable and testable.
- You need **advanced debugging**, logging, undo/redo, etc.

Avoid Redux if:
- Your app is small and local state via `useState` or `useContext` is enough.
- You don’t need to share much state between components.
