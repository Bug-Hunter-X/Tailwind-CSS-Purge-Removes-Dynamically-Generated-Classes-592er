This solution modifies the Tailwind configuration to prevent purging of dynamically generated classes. Instead of relying on the `purge` option which only works with static analysis, we use `content` to specify the files or directories from which Tailwind should extract class names to keep.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add more content paths as needed to include dynamically generated content
    './src/**/*.js', // Example path to dynamically generated components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```