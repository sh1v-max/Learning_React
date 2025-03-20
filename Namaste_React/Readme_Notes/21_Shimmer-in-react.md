# **Shimmer Effect in React (Loading Placeholder)**  

A **Shimmer effect** is a UI placeholder used while data is loading, providing a smooth **animated skeleton screen** instead of an empty blank screen.

---

## **1️⃣ Why Use Shimmer?**
✅ Improves **user experience** by reducing perceived load time  
✅ Provides a **smooth transition** instead of showing a blank screen  
✅ Used in apps like **Facebook, Swiggy, YouTube, etc.**  

---

## **2️⃣ Basic Shimmer Effect using CSS**
### 🔹 **Step 1: Create a `Shimmer` Component**
```jsx
import React from "react";
import "./Shimmer.css";  // Import the shimmer effect CSS

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

export default Shimmer;
```

---

### 🔹 **Step 2: Add CSS for the Shimmer Effect**
```css
.shimmer-container {
  display: flex;
  gap: 20px;
}

.shimmer-card {
  width: 200px;
  height: 150px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmerAnimation 1.5s infinite;
  border-radius: 10px;
}

@keyframes shimmerAnimation {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

---

## **3️⃣ Implementing Shimmer Effect in a Real API Fetch**
### 🔹 **Step 1: Modify the Component to Show Shimmer While Loading**
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";  // Import the shimmer component

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {  // Simulate network delay
      axios.get("https://jsonplaceholder.typicode.com/posts") 
        .then((response) => {
          setRestaurants(response.data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      {loading ? <Shimmer /> : restaurants.slice(0, 5).map((res) => (
        <div key={res.id}>
          <h3>{res.title}</h3>
          <p>{res.body}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
```
---

## **4️⃣ Using a Shimmer UI Library**
Instead of creating shimmer from scratch, you can use a package like **react-content-loader**.

### **🔹 Install react-content-loader**
```sh
npm install react-content-loader
```

### **🔹 Example Usage**
```jsx
import React from "react";
import ContentLoader from "react-content-loader";

const ShimmerLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#e0e0e0"
    foregroundColor="#f0f0f0"
  >
    <rect x="10" y="20" rx="5" ry="5" width="380" height="20" />
    <rect x="10" y="50" rx="5" ry="5" width="300" height="20" />
    <rect x="10" y="80" rx="5" ry="5" width="250" height="20" />
  </ContentLoader>
);

export default ShimmerLoader;
```

---

## **5️⃣ Summary**
✅ **Shimmer Effect** enhances UI experience while data loads  
✅ **Basic CSS animation** can create shimmer placeholders  
✅ **Use React libraries** like `react-content-loader` for easy implementation  
✅ **Can be used in APIs, skeleton screens, and lazy-loaded content**  

