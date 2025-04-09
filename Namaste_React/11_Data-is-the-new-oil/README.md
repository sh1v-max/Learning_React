#  What is Higher-Order Components (HOCs)?

 Higher-Order Components (HOCs) is a function which takes a component and return a component.

- Higher-Order Components (HOCs) are a pattern in React that allows you to reuse component logic.
- An HOC is a function that takes a component and returns a new component with additional props or behavior.
- This allows you to encapsulate common functionality and apply it to multiple components without duplicating code.

### Key Points about HOCs:

1. **Function Signature:**

   - An HOC is a function that takes a component as an argument and returns a new component.

   ```js
   const EnhancedComponent = higherOrderComponent(WrappedComponent);
   ```

2. **Purpose:**

   - They allow you to abstract and reuse component logic.
   - Common use cases include authentication checks, data fetching, and performance optimizations.

3. **Props Manipulation:**

   - HOCs can add, remove, or modify the props passed to the wrapped component.
   - They often inject additional props or behavior.

4. **Composition:**
   - Multiple HOCs can be composed together to add multiple layers of functionality.

```js
const EnhancedComponent = withAuth(withLogging(WrappedComponent));
```

5. **Stateless:**

   - HOCs are typically stateless, meaning they don't hold their own state but rather manage the state of the wrapped component.

6. **Best Practices:**
   - Name HOCs with a clear and descriptive name, often prefixed with "with" (e.g., `withAuth`, `withLogging`).
   - Avoid mutating the original component; instead, wrap and extend it.
   - Ensure that HOCs are reusable and composable.

### Example:

Here's an example of an HOC that adds logging functionality to a component:

```js
import React from "react";

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Usage
class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

const MyComponentWithLogging = withLogging(MyComponent);
```

In this example, `withLogging` is a Higher-Order Component that logs messages when the wrapped component mounts and unmounts. `MyComponent` is wrapped with `withLogging` to create a new component `MyComponentWithLogging` that includes this logging behavior.

<br/>

##  When do we use Higher-Order Components (HOCs)?

 Higher-Order Components (HOCs) are used in several scenarios in React development.

Here are some common use cases:

1. **Code Reusability:**

   - When you have common logic that needs to be shared across multiple components, HOCs allow you to encapsulate this logic in a single place and reuse it.

2. **Cross-Cutting Concerns:**

   - Cross-cutting concerns like logging, error handling, and analytics can be managed using HOCs, ensuring that this logic is consistently applied across components.

3. **Conditional Rendering:**

   - HOCs can be used to conditionally render components based on certain conditions, such as user authentication or feature flags.

   ```js
   const withAuth = (WrappedComponent) => {
     return class extends React.Component {
       render() {
         if (!this.props.isAuthenticated) {
           return <Redirect to="/login" />;
         }
         return <WrappedComponent {...this.props} />;
       }
     };
   };
   ```

4. **Data Fetching:**

   - For components that need to fetch data from an API, HOCs can handle the data fetching logic and pass the data down as props.

   ```js
   const withData = (url) => (WrappedComponent) => {
     return class extends React.Component {
       state = { data: null, loading: true };

       componentDidMount() {
         fetch(url)
           .then((response) => response.json())
           .then((data) => this.setState({ data, loading: false }));
       }

       render() {
         return <WrappedComponent {...this.props} {...this.state} />;
       }
     };
   };
   ```

5. **State Management:**

   - HOCs can manage state for wrapped components, abstracting complex state logic and providing a cleaner API for the wrapped component.

   ```js
   const withToggle = (WrappedComponent) => {
     return class extends React.Component {
       state = { toggled: false };

       toggle = () => {
         this.setState((prevState) => ({ toggled: !prevState.toggled }));
       };

       render() {
         return (
           <WrappedComponent
             {...this.props}
             toggled={this.state.toggled}
             toggle={this.toggle}
           />
         );
       }
     };
   };
   ```

6. **Behavior Injection:**

   - HOCs can inject behaviors, such as tracking user interactions or managing form submissions, without modifying the wrapped component's implementation.

7. **UI Enhancements:**

   - HOCs can be used to enhance UI components with additional styles, animations, or other visual modifications.

8. **Authorization:**

   - Ensuring that only authorized users can access certain components can be handled by HOCs, which check user permissions and render the appropriate UI.

9. **Performance Optimizations:**
   - HOCs can be used to optimize performance by implementing techniques like lazy loading or memoization.

<br/>

#  Controlled vs Uncontrolled Components

 In React, components can be categorized as either controlled or uncontrolled based on how they handle form data. Here’s an explanation of both, including their differences, pros, and cons.

### Controlled Components:

A controlled component is a component where the form data is handled by the component’s state. The value of the form elements is controlled by React and can only be updated via setState.

**Example:**

```jsx
import { useState } from "react";

function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Pros:**

- `Single Source of Truth`: The state of the form is managed by React, making it easier to control and debug.
- `Validation`: Easier to implement validation logic because you have control over the form data.
- `Consistency`: Ensures that the UI is always in sync with the data.

**Cons:**

- `Boilerplate Code`: Requires more code to manage state and event handlers.
- `Performance`: Frequent state updates can cause performance issues in large forms with many elements.

### Uncontrolled Components:

An uncontrolled component is a component where the form data is handled by the DOM itself. Instead of using state to manage the form data, you use refs to access the form values directly from the DOM.

**Example:**

```jsx
import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

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

### When to Use Each:

- **`Controlled Components`**: When you need more control over the form data, such as when implementing complex validation, dynamic forms, or handling data changes.
- **`Uncontrolled Components`**: When you need simpler forms with minimal validation and do not require frequent state updates. This is suitable for scenarios where performance is critical and state management overhead is unnecessary.


#  What is prop drilling?
**Ans:** Prop drilling is a way sending props to a child component which is many components below the parent component.

### **Example:**
```js
<ParentComponent/>
    <ChildComponent/>
        <SubChildComponent/>
```
If we need to pass props from `ParentComponent` to `SubChildComponent` , we would require to send the props though `ChildComponent` also.<br/>

Prop drilling in React refers to the process of passing data (props) from a parent component to a deeply nested child component through intermediate components that do not necessarily need the data themselves. This can result in a situation where many components in the component tree are only serving as intermediaries to pass down props.<br/>

### **How Prop Drilling Works:**
1. **Parent Component:** The parent component holds the state or data that needs to be passed down.<br/>
2. **Intermediate Components:** These components are between the parent and the final child component that needs the data. They receive the props and pass them down to their children.<br/>
3. **Child Component:** The deeply nested component that actually uses the props.

### **Example:**
```js
import React, { useState } from "react";

// Parent Component
const App = () => {
  const [data, setData] = useState("Hello from App");

  return (
    <div>
      <IntermediateComponent data={data} />
    </div>
  );
};

// Intermediate Component
const IntermediateComponent = ({ data }) => {
  return (
    <div>
      <AnotherIntermediateComponent data={data} />
    </div>
  );
};

// Another Intermediate Component
const AnotherIntermediateComponent = ({ data }) => {
  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ data }) => {
  return <div>{data}</div>;
};

export default App;
```
In this example, the `data` state from the `App` component is passed down through `IntermediateComponent` and `AnotherIntermediateComponent` before reaching the `ChildComponent`, which is where it is actually used.

### **Problems with Prop Drilling:**
- **Increased Complexity:** As the component tree grows, prop drilling can make the code harder to maintain and understand.
- **Unnecessary Re-renders:** Intermediate components that don't need the props will still receive them, potentially causing unnecessary re-renders.
- **Tight Coupling:** Components become tightly coupled, as changes in the structure of components can require changes in multiple places.

### **Solutions to Avoid Prop Drilling:**
1. **Context API:** React's Context API allows you to create a context object, which can be accessed by any component in the component tree without the need to pass props down manually.
```js
import React, { useState, createContext, useContext } from "react";

const DataContext = createContext();

const App = () => {
  const [data, setData] = useState("Hello from App");

  return (
    <DataContext.Provider value={data}>
      <IntermediateComponent />
    </DataContext.Provider>
  );
};

const IntermediateComponent = () => {
  return <AnotherIntermediateComponent />;
};

const AnotherIntermediateComponent = () => {
  return <ChildComponent />;
};

const ChildComponent = () => {
  const data = useContext(DataContext);
  return <div>{data}</div>;
};

export default App;
```
2. **State Management Libraries:** Libraries like Redux or MobX manage state globally, allowing components to access the state directly without passing props through intermediate components.
3. **Component Composition:** Design components in a way that they don’t rely on deeply nested structures, reducing the need for prop drilling.


#  What is lifting the state up?
**Ans:** Lifting state up in React refers to the practice of moving state to a common ancestor component so that the state can be shared among multiple child components. This technique is useful when multiple components need to share or synchronize some state.

### **Why Lift State Up?**
- **State Sharing:** When two or more sibling components need to share state, lifting the state up to their common parent allows them to access and modify the state.
- **Single Source of Truth:** Having a single source of truth for the state helps maintain data consistency and makes it easier to manage the state.
- **Component Reusability:** Components that don’t manage their own state are more reusable and easier to test.

### **How to Lift State Up?**
1. **Identify the Common Ancestor:** Determine the closest common ancestor component that can hold the shared state.<br/>
2. **Move State to Common Ancestor:** Move the state and any related functions to this common ancestor.<br/>
3. **Pass State and Handlers Down:** Pass the state and state updater functions as props to the child components that need them.

### **Example:**
Suppose we have two sibling components, `TemperatureInput` and `BoilingVerdict`, that need to share the temperature state.

```jsx
import React, { useState } from "react";

const TemperatureInput = ({ temperature, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

const Calculator = () => {
  const [temperature, setTemperature] = useState("");

  const handleTemperatureChange = (newTemperature) => {
    setTemperature(newTemperature);
  };

  return (
    <div>
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <BoilingVerdict celsius={parseFloat(temperature)} />
    </div>
  );
};

export default Calculator;
```

### **Explanation:**
1. **Common Ancestor:** The Calculator component is the common ancestor of TemperatureInput and BoilingVerdict.
2. **State in Common Ancestor:** The temperature state is moved to the Calculator component.
3. **Passing Props:** The temperature state and the handleTemperatureChange function are passed down to TemperatureInput as props.
4. **Shared State:** Both TemperatureInput and BoilingVerdict now share the temperature state via the Calculator component.

### **Benefits:**
- **Consistency:** Both components are synchronized and display consistent information.
- **Separation of Concerns:** Each component focuses on its specific functionality without managing the shared state.
- **Easier Maintenance:** Having a single source of truth for the state makes it easier to manage and debug the application.

Lifting state up is a fundamental pattern in React that helps in creating a predictable and maintainable data flow in your application.

Of course! Here's a straightforward, no-fluff explanation of how to use `useContext` in React:



# 🔹 What is `useContext`?

`useContext` is a React Hook that lets you access values from a React Context. It's used when you want to share data (like user info, themes, etc.) across many components without passing props manually at every level.



### ✅ Steps to Use `useContext`

#### **1. Create a Context**

```js
// UserContext.js
import { createContext } from "react";

export const UserContext = createContext();
```


#### **2. Provide the Context Value**

Wrap your component tree with the `UserContext.Provider` and pass the value you want to share.

```js
// App.js
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const user = { name: "Zeno", city: "Varanasi" };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```


#### **3. Use the Context in Any Child Component**

Use the `useContext` hook to access the shared data.

```js
// Dashboard.js
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return <p>Welcome, {user.name} from {user.city}</p>;
}
```


### 🔹 Summary

- `createContext()` → Creates the context.
- `Context.Provider` → Wraps your component tree and shares the value.
- `useContext(Context)` → Accesses the value inside any child component.


##  What is Context Provider and Context Consumer?
**Ans:** In React, the Context API is a powerful feature that allows you to share values (such as state, functions, or any data) across the component tree without having to pass props down manually at every level. The `Context.Provider` and `Context.Consumer` are key parts of this API.<br/>

**1. `Context Provider`:** Context Provider is used to provide access to a context between multiple components of the application. We can provide the access to the context or the data layer to the whole application to the and its subcomponents.<br/>

**Example:**

```js
return (
  <UserContext.Provider value={{ user: user, setUser: setUser }}>
    <Head />
    <Outlet />
    <Footer />
  </UserContext.Provider>
);
```
- In the code above , we are providing the access of UserContext to \<Head /> \<Outlet /> and \<Footer /> component

**2. `Context Consumer:`** is used to consume the context data , provided by react context. We can do this using `useContext` hook for functional components and `Context.Consumer` in clasees based components.

**Example:**
- In Class based components, we can use the Context and use the consumer.
  ```js
  <UserContext.Consumer>
    {({ user }) => <h1>{user.name}</h1>}
  </UserContext.Consumer>
  ```
- In Functional components we can use `useContext` hook to consume the context.

  ```js
  import UserContext from "../utils/UserContext";
  import { useContext } from "react";

  const { user } = useContext(UserContext);
  ```


## **1. Context Provider:**
The `Context.Provider` component is used to wrap a part of the component tree and make a value available to all descendant components. It acts as the source of the context values.

### How to Create and Use a Context Provider:
1. **`Create a Context`:** Use React.createContext() to create a context object.
2. **`Provide a Value`:** Use the Provider component to wrap the part of the component tree where you want the context to be available and pass the value you want to share.
3. **`Access the Value`:** Descendant components can access the context value using the Context.Consumer component or the useContext hook.

### Example:
```jsx
import React, { createContext, useState, useContext } from "react";

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const context = useContext(MyContext); // Using useContext hook

  return (
    <div>
      <p>{context.value}</p>
      <button onClick={() => context.setValue("New Value!")}>
        Change Value
      </button>
    </div>
  );
};

const App = () => {
  return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
};

export default App;
```


## **2. Context Consumer:**
The `Context.Consumer` component is used to access the context value in class components or if you prefer not to use hooks. It requires a function as its child, which receives the context value.

### Using Context.Consumer:
```jsx
const AnotherChildComponent = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div>
          <p>{context.value}</p>
          <button onClick={() => context.setValue("Another New Value!")}>
            Change Value
          </button>
        </div>
      )}
    </MyContext.Consumer>
  );
};
```

### **Summary:**
- **Context Provider (`Context.Provider`):** Wraps a component tree and provides a context value to all descendant components.
- **Context Consumer (`Context.Consumer`):** A component or hook (`useContext`) that allows components to access the context value provided by the nearest Provider.

Using the Context API helps avoid prop drilling by allowing you to share values between components that are not directly connected in the component hierarchy.


##  If you don’t pass a value to the provider does it take the default value?
**Ans:** If we do not override the values of context it takes the default values form the context , when we initialise the context.<br/>
Yes, if you do not pass a value to the `Context.Provider`, it will take the default value defined when you created the context using `React.createContext()`.

### **Default Value in Context:**
When you create a context using `React.createContext(defaultValue)`, the `defaultValue` is used if a component does not have a matching `Provider` above it in the tree. This can be useful for providing a fallback value or ensuring that your components have a default state to work with.

### **Example:**
Let's create a context with a default value and see what happens if we do not provide a value to the `Provider`.

```jsx
import React, { createContext, useContext } from "react";

// Create a Context with a default value
const MyContext = createContext("Default Value");

const DisplayValue = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

const App = () => {
  return (
    <div>
      <h1>Without Provider</h1>
      <DisplayValue />

      <h1>With Provider</h1>
      <MyContext.Provider value="Provided Value">
        <DisplayValue />
      </MyContext.Provider>
    </div>
  );
};

export default App;
```

### **Explanation:**
1. **Creating the Context:** `const MyContext = createContext("Default Value");` creates a context with a default value of `"Default Value"`.

2. **Using the Context Without Provider:** When `DisplayValue` is rendered outside of any `MyContext.Provider`, it uses the default value (`"Default Value"`).

3. **Using the Context With Provider:** When DisplayValue is rendered inside a `MyContext.Provider` with a value (`"Provided Value"`), it uses the provided value instead of the default value.