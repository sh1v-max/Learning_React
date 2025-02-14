## package.json and package.lock.json file

### **1. `package.json`**  
- A **manifest file** that contains metadata about your project (name, version, dependencies, scripts, etc.).  
- It defines **which packages** your project depends on.  
- Example:  
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "dependencies": {
      "react": "^18.2.0"
    }
  }
  ```

### **2. `package-lock.json`**  
- A **lock file** that ensures consistent dependencies across different environments.  
- It records **the exact versions** of dependencies installed.  
- Helps prevent version mismatches when installing packages.  

Example snippet:  
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
      "integrity": "sha512-xyz..."
    }
  }
}
```

### **Key Differences:**  
| Feature | `package.json` | `package-lock.json` |
|---------|---------------|---------------------|
| Purpose | Defines dependencies | Locks exact versions |
| Editable | Yes (manually) | No (auto-generated) |
| Tracks Installations | No | Yes |
| Prevents Version Mismatch | No | Yes |

👉 **`package.json` is for defining dependencies, while `package-lock.json` ensures consistency across installations.**