## **🔹 What are Higher-Order Components (HOC) in React?**  
A **Higher-Order Component (HOC)** is a **function** that takes a component as input and **returns a new enhanced component**. It is used to **reuse component logic** across multiple components.  

👉 **HOCs are not part of React itself**, but a **pattern** used for reusability in functional components.  

📌 **Syntax:**  
```javascript
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

---

## **✅ Why Use Higher-Order Components?**  
✔ **Code Reusability** – Share common logic between multiple components.  
✔ **Separation of Concerns** – Keeps components clean by abstracting logic.  
✔ **Conditional Rendering** – Modify behavior based on conditions.  
✔ **Enhance Functionality** – Add features like authentication, logging, or permissions.  

---

## **🔹 Example: HOC for Authentication (Protected Route)**
### **📌 Without HOC (Repeating Code in Every Component)**
```javascript
function Dashboard({ isAuthenticated }) {
  if (!isAuthenticated) return <h2>Access Denied</h2>;
  return <h2>Welcome to Dashboard</h2>;
}

function Profile({ isAuthenticated }) {
  if (!isAuthenticated) return <h2>Access Denied</h2>;
  return <h2>User Profile</h2>;
}
```
❌ **Problem:**  
- We are **repeating authentication logic** in every component.  
- Not scalable if more components need authentication.  

---

### **📌 With HOC (Reusing Authentication Logic)**
```javascript
import React from "react";

// Higher-Order Component
const withAuth = (WrappedComponent) => {
  return (props) => {
    if (!props.isAuthenticated) return <h2>Access Denied</h2>;
    return <WrappedComponent {...props} />;
  };
};

// Original Components
const Dashboard = () => <h2>Welcome to Dashboard</h2>;
const Profile = () => <h2>User Profile</h2>;

// Wrapping Components with HOC
const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);

// Usage
function App() {
  const isAuthenticated = true; // Change to false to see "Access Denied"

  return (
    <div>
      <ProtectedDashboard isAuthenticated={isAuthenticated} />
      <ProtectedProfile isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
```
✅ **Benefits of HOC in This Example:**  
✔ The **authentication logic is now reusable**.  
✔ We can **wrap any component** and make it protected **without modifying the original component**.  
✔ Makes code **cleaner and more maintainable**.  

---

## **🔹 Other Use Cases of HOCs**
✔ **Fetching Data** – A HOC can fetch data and pass it to wrapped components.  
✔ **Theming** – Apply themes dynamically across components.  
✔ **Logging** – Log component renders for debugging.  
✔ **Performance Optimization** – Memoizing expensive computations.  

---

## **🚀 Key Takeaways**
| ❌ **Without HOC** | ✅ **With HOC** |
|----------------|----------------|
| Duplicate logic in multiple components | Reuses logic by wrapping components |
| Hard to maintain when adding new features | Easy to extend without modifying components |
| Tight coupling of logic and UI | Separation of concerns |

💡 **HOCs help in reusing logic efficiently, making React components more modular and maintainable!** 🚀🔥