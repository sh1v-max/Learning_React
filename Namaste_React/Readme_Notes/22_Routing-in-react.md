# **React Routing - A Complete Guide**  

## **📌 What is Routing in React?**  
Routing in React is the process of navigating between different pages or views **without refreshing the page**. It allows developers to create a **single-page application (SPA)** with multiple views and URLs.  

React **does not have built-in routing**; instead, we use external libraries like **React Router**.

---

## **1️⃣ Why Use Routing in React?**  
✅ **Enables navigation** between different components/views  
✅ **Prevents full page reloads** → Improves performance  
✅ **Maintains URL state** → Good for bookmarking and sharing links  
✅ **Supports dynamic routing** → Fetch and display data dynamically  

---

## **2️⃣ Installing React Router**  
To use routing in React, install **react-router-dom**:  
```sh
npm install react-router-dom
```
or  
```sh
yarn add react-router-dom
```

---

## **3️⃣ Setting Up Routing in React**  
### **🔹 Step 1: Import Required Components**  
```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
```

---

### **🔹 Step 2: Define Routes in `App.js`**  
```jsx
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```
📝 **Explanation:**  
- `<BrowserRouter>` (or `<Router>`) **wraps the entire application** to enable routing.  
- `<Routes>` is a wrapper for multiple `<Route>` components.  
- `<Route>` defines **a path and its corresponding component**.  
- `path="/"` → means this is the **homepage**.  

---

### **🔹 Step 3: Creating Components (`Home.js`, `About.js`, `Contact.js`)**  
```jsx
const Home = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default Home;
```
```jsx
const About = () => {
  return <h2>About Us</h2>;
};

export default About;
```
```jsx
const Contact = () => {
  return <h2>Contact Us</h2>;
};

export default Contact;
```

---

## **4️⃣ Navigating Between Pages (Using Links)**
Using **`<a>` tags** refreshes the page. Instead, use **`<Link>`** from `react-router-dom`:
```jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |  
      <Link to="/about">About</Link> |  
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
```
📌 **Why use `<Link>` instead of `<a>`?**  
- `<Link>` **does not reload the page** (improves performance).  
- It **works with React Router** to change URLs dynamically.  

---

## **5️⃣ Dynamic Routing (Passing Parameters)**
### **🔹 Step 1: Define a Dynamic Route**
Modify `App.js` to add a **dynamic route** (`/user/:id`):
```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

---

### **🔹 Step 2: Create `UserProfile.js` and Fetch Parameters**
```jsx
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // Get URL parameter
  return <h2>Profile of User ID: {id}</h2>;
};

export default UserProfile;
```
📝 **Explanation:**  
- `useParams()` extracts **parameters** from the URL.  
- Visiting `/user/5` will display **"Profile of User ID: 5"**.  

---

## **6️⃣ Redirects and Navigation**
### **🔹 Using `Navigate` for Redirection**
If you need to **redirect** a user (e.g., after login), use `<Navigate>`:
```jsx
import { Navigate } from "react-router-dom";

const Login = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;  // Redirect to Dashboard
  }
  return <h2>Please log in</h2>;
};
```

---

## **7️⃣ Protected Routes (Authentication-Based)**
Sometimes, you want to **restrict access** to certain routes (e.g., a dashboard).  

### **🔹 Step 1: Create a `ProtectedRoute` Component**
```jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};
```

---

### **🔹 Step 2: Use It in `App.js`**
```jsx
<Route path="/dashboard" element={<ProtectedRoute isAuth={userLoggedIn}><Dashboard /></ProtectedRoute>} />
```
📝 **Now, only authenticated users can access `/dashboard`!**

---

## **8️⃣ Nested Routes (Child Components in Routes)**
Some pages have **sub-routes**, like `/dashboard/profile`.  

### **🔹 Step 1: Define Nested Routes in `App.js`**
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### **🔹 Step 2: Use `<Outlet>` to Render Nested Components**
Inside `Dashboard.js`:
```jsx
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* This is where nested components will render */}
    </div>
  );
};

export default Dashboard;
```

🔹 Now visiting `/dashboard/profile` will load `<Profile />` inside `<Dashboard />`.

---

## **9️⃣ 404 Page (Handling Invalid Routes)**
To handle unknown routes, add a **fallback `Route`**:
```jsx
<Route path="*" element={<NotFound />} />
```
Create a `NotFound.js` component:
```jsx
const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

export default NotFound;
```

---

## **🔟 Browser vs Hash Router**
React Router provides two types of routing:
| Type | Usage |
|------|-------|
| **BrowserRouter** | Uses the **history API** (Clean URLs like `/about`) |
| **HashRouter** | Uses `#` in URLs (`/about` becomes `/#/about`) |

🔹 Use **`BrowserRouter`** for modern apps.  
🔹 Use **`HashRouter`** if hosting on static sites like GitHub Pages.

---

## **🎯 Summary**
✅ **React Router** is used for navigation in SPAs.  
✅ Use **`<Routes>` and `<Route>`** to define paths.  
✅ Use **`<Link>`** instead of `<a>` to prevent page reloads.  
✅ Use **`useParams()`** for dynamic routes.  
✅ Use **`Navigate`** for redirection.  
✅ Implement **protected routes** using authentication.  
✅ Use **nested routes** with `<Outlet>`.  
✅ Handle **404 errors** with a `*` route.  
