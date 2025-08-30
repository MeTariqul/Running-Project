/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
      }
    }
  },
  plugins: [],
};
