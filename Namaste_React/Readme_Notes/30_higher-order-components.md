Your image is not showing because Parcel doesn't automatically handle static assets like images the way Webpack does. Here’s how you can fix it:

### Solution:
1. **Use `process.env.PUBLIC_URL`**  
   Modify your code like this:
   ```jsx
   const App = () => {
       return (
           <div>
               <img src={process.env.PUBLIC_URL + "/assets/images/left.png"} alt="left-arrow" />
           </div>
       );
   }

   export default App;
   ```
   - Move your `assets` folder inside the `public` folder (create it if it doesn’t exist).  
   - The new path should be: `public/assets/images/left.png`.

2. **Use `require` (For Parcel Users)**  
   If you're using Parcel, try using `require()`:
   ```jsx
   import LeftArrow from './assets/images/left.png';

   const App = () => {
       return (
           <div>
               <img src={require('./assets/images/left.png')} alt="left-arrow" />
           </div>
       );
   }

   export default App;
   ```
   This ensures Parcel correctly processes the image.

3. **Check the Parcel Version**  
   If you're using an older version of Parcel, update it:
   ```sh
   npm install parcel@latest
   ```

### Why the Issue Happens:
- Parcel processes image imports differently compared to Webpack.
- If `left.png` is inside `src/`, you need `require()` or `import`.
- If `left.png` is inside `public/`, you need `process.env.PUBLIC_URL`.

Try these fixes and let me know if it's still not working! 🚀