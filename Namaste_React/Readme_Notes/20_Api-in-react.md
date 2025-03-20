# API Integration in React

## 📌 Introduction
APIs (Application Programming Interfaces) allow React applications to **fetch, send, and manage data** from external sources. React commonly interacts with APIs using **REST APIs** with `fetch` or `axios`.

---

## 1️⃣ Fetching Data from an API

### 🔹 Using `fetch` API
```jsx
import React, { useState, useEffect } from "react";

const FetchExample = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>API Data</h2>
            {data.slice(0, 5).map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
};

export default FetchExample;
```

### 🔹 Using `axios` (Recommended)
**Install axios:**  
```sh
npm install axios
```

**Usage:**
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosExample = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>API Data</h2>
            {data.slice(0, 5).map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
};

export default AxiosExample;
```

### ✅ Why Use `axios`?
✔️ Shorter code (No need to convert `.json()`)  
✔️ Handles errors better  
✔️ Can set default headers, interceptors, and timeouts  

---

## 2️⃣ Sending Data (POST Request)

### 🔹 Using `fetch`
```jsx
const postData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "New Post", body: "This is a new post" })
    });
    
    const data = await response.json();
    console.log("Response Data:", data);
};
```

### 🔹 Using `axios`
```jsx
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "This is a new post"
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

---

## 3️⃣ Handling API Requests in a Real App

### 🔹 Fetching Restaurant Data (Example for Swiggy Clone)
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://api.example.com/restaurants")  // Replace with actual API
            .then((response) => {
                setRestaurants(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>Restaurants</h2>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.location}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;
```

---

## 4️⃣ Handling API Errors and Loading States

### 🔹 Best Practices
✔️ Show a **loading** message before data loads  
✔️ Handle **network errors** gracefully  
✔️ Use **try-catch** for better error handling  

### 🔹 Example with Improved Error Handling
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const APIComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h2>Data</h2>
            {data.slice(0, 5).map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    );
};

export default APIComponent;
```

---

## 5️⃣ Advanced API Concepts

### 🔹 Using Async/Await with `fetch`
```jsx
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
```

### 🔹 Adding Request Headers (Authentication)
```jsx
axios.get("https://api.example.com/data", {
    headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE"
    }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

### 🔹 Cancel API Request (Prevent Memory Leaks)
```jsx
useEffect(() => {
    const controller = new AbortController();
    axios.get("https://api.example.com/data", { signal: controller.signal })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));

    return () => controller.abort();  // Cleanup request when component unmounts
}, []);
```

---

## 🎯 Summary
✅ Fetch API data using **`fetch` or `axios`**  
✅ Handle **loading and errors** properly  
✅ Use **async/await** for better readability  
✅ Use **headers** for authentication  
✅ **Cancel API requests** when needed  

