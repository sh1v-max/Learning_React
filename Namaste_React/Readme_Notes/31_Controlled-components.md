# 🔹 What is a Controlled Component?

A **Controlled Component** is an input element (like `<input>`, `<textarea>`, `<select>`, etc.) whose **value is controlled by React state**.

> In simple terms:  
> The input field **shows what’s in the state**, and whenever it changes, it **updates the state**.

---

### 🔧 Example of a Controlled Input:

```jsx
import { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value); // updates state
  };

  return (
    <input type="text" value={name} onChange={handleChange} />
  );
}
```

- `value={name}` makes it **controlled** — React owns the value.
- On every keystroke, `onChange` updates the state.
- The input always reflects the state.

---

### 🔄 How It Works:
| What Happens         | What React Does                     |
|----------------------|--------------------------------------|
| User types in input  | `onChange` gets triggered            |
| `setName()` is called| State is updated                     |
| React re-renders     | Input gets updated from state again  |

---

### ❌ Uncontrolled Component (for comparison):

```jsx
<input type="text" />
```

Here, React doesn’t control the value — it’s up to the browser.

---

### 🔹 Pros and cons

**Pros:**

- `Less Code`: Requires less boilerplate code because you don't need to manage state.
- `Performance`: Can be more performant in certain situations as there are fewer state updates.

**Cons:**

- `No Single Source of Truth`: Form data is not managed by React, making it harder to control and debug.
- `Validation`: Harder to implement validation logic since you don’t have control over the form data.
- `Inconsistency`: Potential for the UI to be out of sync with the data.

### Key Differences:

1. **State Management:**

   - `Controlled`: Form data is stored in the component’s state.
   - `Uncontrolled`: Form data is stored in the DOM.

2. **Handling Input:**

   - `Controlled`: Input changes are handled by React via event handlers and state updates.
   - `Uncontrolled`: Input changes are handled by the DOM, and values are accessed via refs.

3. **Validation:**

   - `Controlled`: Easier to implement validation logic within the component.
   - `Uncontrolled`: Harder to implement validation logic because the form data is not managed by React.

4. **Code Complexity:**

   - `Controlled`: Requires more boilerplate code to manage state and events.
   - `Uncontrolled`: Requires less boilerplate code but can become complex when adding validation and other logic.

### ✅ Use Controlled Components When:

- You want **validation**
- You need to **submit form data**
- You want to **clear/reset fields**
- You want to show/hide based on input

