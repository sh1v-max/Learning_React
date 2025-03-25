### **🔹 What is the Single Responsibility Principle (SRP)?**  
The **Single Responsibility Principle (SRP)** states that a **class, function, or module should have only one reason to change**. This means **it should do only one thing** and be responsible for only **one aspect of functionality**.

It is one of the **SOLID principles** of software design, promoting maintainability and readability.

---

### ✅ **Why is SRP Important?**
✔ **Improves Code Readability** – Each function/class has a clear purpose.  
✔ **Easier to Maintain** – Changes in one responsibility don’t affect others.  
✔ **Enhances Reusability** – Small, focused functions can be reused elsewhere.  
✔ **Reduces Bugs** – Isolates changes, making debugging simpler.  

---

### 🔹 **Example 1: Violating SRP (Bad Code)**
📌 **A single function handling multiple tasks (fetching & rendering data)**  
```javascript
function fetchAndDisplayUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      console.log("Users List:");
      data.forEach(user => console.log(user.name));
    });
}
```
❌ **Problems:**  
- This function **fetches data** and **displays data** (two different responsibilities).  
- If we change how users are displayed, we also modify the fetching logic.  

---

### 🔹 **Example 2: Following SRP (Good Code)**
📌 **Separate functions for fetching and displaying data**  

```javascript
// Function for fetching users (Single Responsibility: Fetching)
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

// Function for displaying users (Single Responsibility: Displaying)
function displayUsers(users) {
  console.log("Users List:");
  users.forEach(user => console.log(user.name));
}

// Using both functions separately
fetchUsers().then(displayUsers);
```
✅ **Benefits of SRP here:**  
✔ `fetchUsers()` handles only **fetching**.  
✔ `displayUsers()` handles only **displaying**.  
✔ **Easier maintenance** – Changing how data is displayed won’t affect the fetching logic.  

---

### 🔹 **Example 3: SRP in React Components**
📌 **Bad Example: A component doing too much**  
```jsx
function UserList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
```
❌ **Problems:**  
- **Fetching logic** and **UI rendering** are mixed together.  
- Harder to **reuse fetching logic** in other components.  

📌 **Good Example: Following SRP (Separate Fetch Hook & UI Component)**  
```jsx
// Custom Hook for fetching users (Single Responsibility: Fetching)
function useFetchUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return users;
}

// Component for displaying users (Single Responsibility: Rendering)
function UserList() {
  const users = useFetchUsers();

  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}
```
✅ **Benefits of SRP here:**  
✔ `useFetchUsers()` handles **only fetching**.  
✔ `UserList` handles **only UI rendering**.  
✔ **Easier to reuse** `useFetchUsers()` elsewhere in the app.  

---

## 🎯 **Key Takeaways**
| ❌ **Bad Practice** | ✅ **Good Practice (SRP Applied)** |
|--------------------|-------------------------------|
| A function/component does **multiple things**. | A function/component does **one thing only**. |
| Harder to read, test, and maintain. | Code is **cleaner, reusable, and easy to update**. |
| A change in one part affects unrelated parts. | Changes are isolated and don’t break other features. |

🚀 **By following SRP, your code stays modular, maintainable, and scalable!** 🔥