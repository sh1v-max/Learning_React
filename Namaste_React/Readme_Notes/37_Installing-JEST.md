# Setting Up Jest for Testing

## 1. **Initialize Your Project (if not already initialized)**

If your project doesn't already have a `package.json` file, initialize your project with:

```bash
npm init -y
```

This will generate a `package.json` file.

## 2. **Install Jest**

Jest is a development dependency, so install it by running:

```bash
npm install --save-dev jest
```

This will install Jest into your `node_modules` and add it to your `devDependencies`.

## 3. **Add a Test Script to `package.json`**

To make it easy to run your tests with a simple command, add the following script to your `package.json` inside the `scripts` section:

```json
"scripts": {
  "test": "jest"
}
```

This will allow you to run Jest by simply using:

```bash
npm test
```

## 4. **Create a Test File**

Jest looks for files that either end with `.test.js` or `.spec.js`, or are located inside a `__tests__` folder. You can create a test file like this:

```bash
mkdir tests
touch tests/app.test.js
```

Inside `tests/app.test.js`, write a simple test:

```js
function add(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

This test checks if the `add` function correctly adds two numbers.

## 5. **Run Tests**

To run your tests, simply use the following command:

```bash
npm test
```

Jest will find all files with `.test.js` or `.spec.js` extensions and execute them.

You should see an output like this:

```
PASS  tests/app.test.js
  ✓ adds 1 + 2 to equal 3 (5 ms)
```

## 6. **Optional: Babel Integration (if using modern JavaScript or JSX)**

If you are using **ES6+ syntax** or **React**, you may need to install Babel to transpile your code for Jest.

### Install Babel dependencies:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react babel-jest
```

### Create a `babel.config.js` file:

```bash
touch babel.config.js
```

Then, add the following content to the `babel.config.js` file:

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

This allows Jest to understand modern JavaScript and JSX.

### NOTE: 
- when using parcel, it comes with better transpilation support.
- and when we add babel.config.js, it will conflict it
- so we need to create a file named `.parcelrc` and add following command to it:
```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
- read [parcel documentation when using jest with babel](https://parceljs.org/languages/javascript/#babel), to know more

## 7. **Run Tests with Babel Integration**

Now you can run your tests with Babel support:

```bash
npm test
```

## 8. **Custom Jest Configuration (Optional)**

If you need to customize Jest's behavior, you can create a `jest.config.js` file in the root of your project. For example:

```bash
touch jest.config.js
```

You can configure Jest to use a specific test environment, setup files, or even collect coverage information. Here's a simple example of a `jest.config.js` file:

```js
module.exports = {
  testEnvironment: 'jsdom', // This is useful if you're testing React or browser-related code
};
```

## 9. **Common Test Patterns**

- **Test for asynchronous code** (e.g., promises or async/await):

```js
test('fetches data from API', async () => {
  const data = await fetchDataFromAPI();
  expect(data).toEqual({ key: 'value' });
});
```

- **Mocking functions** using `jest.mock()`:

```js
jest.mock('some-module');
```

- **Mocking timers** using `jest.useFakeTimers()`:

```js
jest.useFakeTimers();
```

## Conclusion

With Jest set up, you can write unit tests for your application and run them using `npm test`. Jest will automatically find and run your test files, and you can customize your configuration based on your project needs.

---

## Troubleshooting

- If Jest fails to recognize your files, make sure the test filenames end with `.test.js` or `.spec.js`.
- If you're using Babel, ensure that the necessary Babel packages (`babel-jest`, `@babel/preset-env`, etc.) are installed and configured correctly.
