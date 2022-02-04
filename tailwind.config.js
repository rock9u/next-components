module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.jsx",
    "./components/**/*.jsx"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
