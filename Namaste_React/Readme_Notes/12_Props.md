# **What are Props?**
**Props (short for "properties")** are a way to pass **data** from a **parent component** to a **child component** in React. They make components **dynamic** and **reusable**.

🔹 **Key Points About Props:**  
- Props are **read-only** (immutable).  
- Props flow **from parent to child** (unidirectional data flow).  
- Props help in **component reusability**.  
- Props can be **strings, numbers, arrays, objects, functions, JSX, or even other components**.  



## **Basic Example of Props**  
Here’s how you can pass props from a **parent** to a **child component**:

### **Parent Component (`App`)**
```jsx
const App = () => {
  return <Greeting name="Crescha" age={24} />;
};
```

### **Child Component (`Greeting`)**
```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
};
```

### **Rendered Output:**
👉 `Hello, Crescha! You are 24 years old.`  



## **Using Props with Destructuring (Cleaner Syntax)**  
Instead of using `props.name`, we can **destructure** props:

```jsx
const Greeting = ({ name, age }) => {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
};
```

This makes the code **cleaner and more readable**.



## **Default Props (Setting Default Values)**
If a prop is not provided, we can set a **default value** using `defaultProps`:

```jsx
const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello, {name}!</h1>;
};

// Parent Component
const App = () => {
  return <Greeting />; // No name provided
};
```
### **Output:**  
👉 `Hello, Guest!`

Another way:
```jsx
Greeting.defaultProps = {
  name: "Guest"
};
```



## **Passing Multiple Props (Objects, Arrays, Functions)**
Props can also be **objects, arrays, or functions**.

### **Example: Passing an Object as a Prop**
```jsx
const user = { name: "Crescha", age: 24 };

const App = () => {
  return <Greeting userInfo={user} />;
};

const Greeting = ({ userInfo }) => {
  return <h1>Hello, {userInfo.name}! You are {userInfo.age} years old.</h1>;
};
```
 **Output:** `Hello, Crescha! You are 24 years old.`



### **Example: Passing an Array as a Prop**
```jsx
const App = () => {
  return <Numbers numbers={[1, 2, 3, 4, 5]} />;
};

const Numbers = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
};
```
 **Output:** A list of numbers (1, 2, 3, 4, 5).



### **Example: Passing a Function as a Prop**
```jsx
const App = () => {
  const sayHello = (name) => alert(`Hello, ${name}!`);
  return <Greeting name="Crescha" greet={sayHello} />;
};

const Greeting = ({ name, greet }) => {
  return <button onClick={() => greet(name)}>Greet</button>;
};
```
 **Clicking the button alerts:** `"Hello, Crescha!"`



## **Props vs. State**
| Feature | Props | State |
|---------|------|------|
| **Definition** | Passed from parent to child | Internal component data |
| **Mutability** | **Immutable** (cannot be changed) | **Mutable** (can be changed with `useState`) |
| **Who Controls It?** | **Parent component** | **Component itself** |
| **Usage** | Used to pass data | Used to manage data |

 **Example:**
```jsx
const App = () => {
  return <Greeting name="Crescha" />;
};

//  Props are passed (Parent → Child)
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```
```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

//  State is internal (Component manages it)
```



## **Props with Functional Components & Hooks**
React **functional components** use props the same way as class components, but we use **hooks** (like `useState` & `useEffect`) for stateful logic.

### **Example: Using Props in a Component with `useState`**
```jsx
const App = () => {
  return <User name="Crescha" />;
};

const User = ({ name }) => {
  const [status, setStatus] = React.useState("Online");

  return (
    <div>
      <h1>{name} is {status}</h1>
      <button onClick={() => setStatus(status === "Online" ? "Offline" : "Online")}>
        Toggle Status
      </button>
    </div>
  );
};
```
 **Output:** `Crescha is Online`  
 **Clicking the button toggles Online ↔ Offline.**



## **Props in Class Components (Older React)**
Before React Hooks, props were used in **class components** like this:

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

const App = () => {
  return <Greeting name="Crescha" />;
};
```
 **`this.props.name` is used in class components instead of `{ name }`.**


## **Spread Operator for Props (`...props`)**
Instead of passing multiple props manually, we can use the **spread operator (`...`)**.

### **Without Spread Operator**
```jsx
const App = () => {
  return <Greeting name="Crescha" age={24} />;
};
```

### **With Spread Operator**
```jsx
const user = { name: "Crescha", age: 24 };

const App = () => {
  return <Greeting {...user} />; // Spreads all properties
};

const Greeting = ({ name, age }) => {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
};
```
 **Output:** `Hello, Crescha! You are 24 years old.`



## **Children Props (`props.children`)**
- `props.children` is a special prop that allows a component to **wrap** content inside it.

### **Example:**
```jsx
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => {
  return (
    <Card>
      <h1>Hello, React!</h1>
      <p>This is a child component.</p>
    </Card>
  );
};
```
 **Output:** The `<h1>` and `<p>` appear inside the `.card` div.



##  Summary
- **Props** are used to pass data from **parent to child**.  
- Props are **read-only** (immutable).  
- Props can be **strings, numbers, objects, arrays, functions, or JSX**.  
- **Destructuring** props makes the code cleaner.  
- The **spread operator (`...props`)** simplifies prop passing.  
- **`props.children`** allows wrapping content inside a component.  

 **Props make React components reusable, dynamic, and flexible!**