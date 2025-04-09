
# 🔺 What is "Lifting State Up"?

In React, **lifting state up** means **moving the state from a child component to their common parent**, so that **multiple children can share and sync data**.

Instead of duplicating state in multiple components, you "lift" it to the closest ancestor, and pass it down via props.

---

### 🧠 Why Do We Need It?

Because sometimes:

- **Sibling components** need to share the same data
- A **parent** needs to control or respond to something happening in a child
- You want **one source of truth** to manage related state

---

## ⚙️ A Simple Example

Let’s say you’re building a temperature converter:

- One input box accepts temperature in **Celsius**
- Another in **Fahrenheit**
- You want them to **sync automatically**

But if both components manage their own state — they won’t know about each other. Solution? **Lift the state up**.

---

### 🧪 Without Lifting State Up (bad approach):

```jsx
function CelsiusInput() {
  const [celsius, setCelsius] = useState("");
  return <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />;
}

function FahrenheitInput() {
  const [fahrenheit, setFahrenheit] = useState("");
  return <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />;
}
```

They’re living separate lives. Not cool.

---

### ✅ With Lifting State Up:

```jsx
function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");

  return (
    <>
      <CelsiusInput temperature={temperature} setTemperature={setTemperature} />
      <FahrenheitInput temperature={temperature} setTemperature={setTemperature} />
    </>
  );
}

function CelsiusInput({ temperature, setTemperature }) {
  return (
    <input
      value={temperature}
      onChange={(e) => setTemperature(e.target.value)}
      placeholder="Celsius"
    />
  );
}

function FahrenheitInput({ temperature, setTemperature }) {
  // Simple convert (fake logic for demo)
  const fahrenheit = temperature ? (temperature * 9) / 5 + 32 : "";
  return (
    <input
      value={fahrenheit}
      onChange={(e) => setTemperature(((e.target.value - 32) * 5) / 9)}
      placeholder="Fahrenheit"
    />
  );
}
```

> `TemperatureConverter` holds the state,  
> and shares it with both child components. That’s lifting the state up.

---

### 🔁 Real Use Cases

- In a Swiggy clone: Menu toggle state, accordion expand/collapse, selected items
- A form with multiple input fields that depend on each other
- A search box where results and filters live in different components

---

## 📌 In Summary

| Concept           | Description |
|-------------------|-------------|
| Lifting State Up  | Moving shared state to the closest common parent |
| Why?              | To keep one source of truth and allow components to sync |
| Benefit           | Better data flow, easier debugging, shared logic |

