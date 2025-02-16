# **What is XML?**  
**XML (eXtensible Markup Language)** is a structured language used to store and transport data. It is similar to HTML but is designed for **data representation** rather than web page layout.  

---

## **Key Features of XML**
1. **Self-Descriptive** – Uses custom tags to define data structure.  
2. **Hierarchical Format** – Stores data in a tree-like structure.  
3. **Human & Machine Readable** – Easily understandable by both humans and computers.  
4. **Used in Data Exchange** – Common in APIs, configurations, and web services (e.g., RSS, SOAP).  

---

## **Example of an XML Document**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book>
    <title>JavaScript Basics</title>
    <author>John Doe</author>
    <price currency="USD">29.99</price>
  </book>
</bookstore>
```
### **Explanation:**
- `<bookstore>` is the **root element** (contains all data).
- `<book>` is a **child element** (represents a book).
- `<title>`, `<author>`, and `<price>` hold **data values**.
- **Attributes** (like `currency="USD"`) add extra information.

---

## **XML vs. HTML**
| Feature | XML | HTML |
|---------|-----|------|
| Purpose | Stores & transfers data | Displays web content |
| Custom Tags | Yes | No (predefined tags only) |
| Strict Structure | Yes (well-formed required) | No |
| Self-Closing Tags | Allowed | Not always |

---

## **Common Uses of XML**
1. **Configuration Files** – Used in `.xml` files for settings (e.g., `AndroidManifest.xml`).  
2. **APIs & Data Exchange** – Used in SOAP, RSS feeds, and REST APIs.  
3. **Document Storage** – Microsoft Office files (`.docx`, `.xlsx`) internally use XML.  

---

## **Parsing XML in JavaScript**
### **Using DOMParser (Browser)**
```js
const xmlString = `<book><title>JavaScript</title></book>`;
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

console.log(xmlDoc.getElementsByTagName("title")[0].textContent); // JavaScript
```

### **Using XML in Fetch Requests**
```js
fetch("data.xml")
  .then((response) => response.text())
  .then((xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    console.log(xmlDoc.getElementsByTagName("title")[0].textContent);
  });
```

---

## **Conclusion**
- XML is mainly used for **storing, structuring, and transporting data**.  
- It is still used in **APIs, configuration files, and databases**, though JSON has become more popular for web applications.  

