# 🧪 **What is Testing?**

Testing ensures your app works correctly and reliably. There are different levels of tests:

- **Unit tests**: Test individual functions or components in isolation.
- **Integration tests**: Test how different parts of the app work together.
- **End-to-end tests**: Test the entire app flow (e.g., clicking buttons, filling forms).

---

## ⚙️ **Setting Up Jest and React Testing Library**

First, install the necessary packages:

```bash
# Install Jest (usually included if you create a React app with Create React App)
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Then, add this to your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Now, you can run `npm test` to run Jest tests.

---

## 🧑‍🔬 **Writing Your First Test**

Let’s start with **unit testing** a simple component.

### Example Component: `Button.js`

```jsx
import React from "react";

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

### Simple Test for `Button` Component

Create a file `Button.test.js` in the same directory:

```jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders Button component and checks if it works", () => {
  // Render Button with props
  render(<Button label="Click Me" onClick={() => {}} />);

  // Check if the button is in the document
  const button = screen.getByText(/Click Me/i);
  expect(button).toBeInTheDocument();

  // Check if it fires the click event
  fireEvent.click(button);
});
```

### What’s Happening Here?

1. `render(<Button />)` renders the component into a mock DOM.
2. `screen.getByText()` queries the DOM to find an element by its text content.
3. `expect(button).toBeInTheDocument()` asserts that the button actually rendered.
4. `fireEvent.click(button)` simulates a click event (but we didn’t do anything with it here).

---

## 🔍 **Testing React Components**

### Queries in React Testing Library

You’ll use these queries to get elements:

- `getByText`: Get element by text content.
- `getByRole`: Get element by role (button, link, etc.).
- `getByLabelText`: Get form elements by label text.
- `getByPlaceholderText`: Get input elements by placeholder text.

### Example: Input Component

```jsx
const Input = ({ label, value, onChange }) => (
  <label>
    {label}
    <input value={value} onChange={onChange} />
  </label>
);
```

### Test for `Input`

```jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("test input change", () => {
  const handleChange = jest.fn();
  render(<Input label="Username" value="" onChange={handleChange} />);

  const input = screen.getByLabelText(/Username/i);
  fireEvent.change(input, { target: { value: "John" } });

  expect(handleChange).toHaveBeenCalledTimes(1);
});
```

In this example, we use `jest.fn()` to create a mock function to track how many times `handleChange` is called.

---

## 🎯 **Jest Matchers and Assertions**

Jest comes with many **matchers** to make assertions. Here are some common ones:

- **toBeInTheDocument()**: Checks if an element exists in the DOM.
- **toHaveTextContent()**: Checks if an element has specific text content.
- **toBeTruthy()** / **toBeFalsy()**: Checks if a value is truthy or falsy.
- **toHaveClass()**: Checks if an element has a certain class.
- **toHaveBeenCalledTimes()**: Checks how many times a mock function was called.

---

## 🔨 **Mocking in Jest**

Jest allows you to **mock functions** and **modules**, which is very useful for testing asynchronous code or components that rely on external APIs.

### Mocking Functions

```jsx
const fetchData = jest.fn();
fetchData.mockResolvedValue("Data Loaded");

test("mock fetch function", async () => {
  const data = await fetchData();
  expect(data).toBe("Data Loaded");
});
```

### Mocking Modules

If your component uses an API or module (like `axios`), you can mock that too.

```js
jest.mock("axios");

test("fetches data from API", async () => {
  axios.get.mockResolvedValue({ data: { name: "John" } });
  const result = await axios.get("/user");
  expect(result.data.name).toBe("John");
});
```

---

## 🧩 **Code Coverage**

Jest can measure **code coverage**, which shows which parts of your code are being tested. To enable code coverage, run:

```bash
npm test -- --coverage
```

This will give you a detailed report of how much of your code is covered by tests.

---

## 🌍 **Integration Testing**

You can also test how components work together.

For example, let’s test a form with an input and a submit button:

```jsx
const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(inputValue);
    }}>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### Test for `Form`

```jsx
test("submits form data", () => {
  const mockSubmit = jest.fn();
  render(<Form onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: "Hello" } });
  fireEvent.click(screen.getByText(/Submit/i));

  expect(mockSubmit).toHaveBeenCalledWith("Hello");
});
```

Here, we tested both the input change and the submit action in one flow.

---

## 🛠 **Test Setup with Jest**

To set up common things, like global mocks or configurations, you can use **jest.setup.js**:

```js
import '@testing-library/jest-dom/extend-expect';
```

This gives you additional matchers like `toBeInTheDocument()`.

---

## 🏗 **End-to-End Testing with Cypress**

For E2E testing (testing your app like a real user does), **Cypress** is an excellent choice.

---

## 🧪 **Fake API Call Integration**

Now let’s integrate a **fake API call** into the testing process. This is useful when your component relies on data from an external API.

For example, you have a component that fetches user data from an API:

### Component: `UserList.js`

```jsx
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

### Writing a Test for `UserList` with a Fake API Call

Here, we’ll mock the `fetch` API to simulate the behavior of the actual API call.

### Test: `UserList.test.js`

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mocking the global fetch API
global.fetch = jest.fn();

test('fetches and displays users', async () => {
  // Fake API Response
  const mockData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  // Mocking fetch to resolve with the mock data
  fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(mockData),
  });

  render(<UserList />);

  // Assert that the loading state is shown initially
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for the component to re-render after data is fetched
  await waitFor(() => screen.getByText(/User List/i));

  // Assert that the data is displayed after the API call resolves
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
});

test('displays error if fetch fails', async () => {
  // Mock fetch to reject (simulate an error)
  fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

  render(<UserList />);

  // Assert that

 the loading state is shown initially
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for the error message to appear after the failed fetch
  await waitFor(() => screen.getByText(/Error fetching users/i));

  // Assert the error message is shown
  expect(screen.getByText(/Error fetching users/i)).toBeInTheDocument();
});
```

### Explanation:

1. **Mock the `fetch` API**: Use `jest.fn()` to mock `fetch` so we can control the response.
2. **Mock resolved value**: We simulate a successful response with mock data.
3. **Assert behavior**: We use `waitFor` to wait for the component to re-render after data is fetched.

---


## 📝 **Summary**

- **Jest** is your testing framework; it runs the tests and provides assertions.
- **React Testing Library** helps you render components and interact with them.
- Focus on testing **user interactions** — how components behave in the browser.
- **Mocking** helps you isolate pieces of code during testing.
- **Code coverage** ensures that all your code is tested.
