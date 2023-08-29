/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  
    ],
    theme: {
      extend: {
        fontFamily : {
          Merienda: ['Space Mono', 'monospace']
        },
        colors: {
          "main-color": "#0079FF",
          "main-color-hover":"#60ABFF",
          "custom-gray-50": "#F6F8FF",
          "custom-gray-100":"#697C9A",
          "custom-gray-200": "#4B6A9B",
          "custom-gray-300": "#2B3442",
          "custom-gray-400": "#1E2A47",
          "custom-gray-500": "#141D2F",
          "error-color": "#F74646",
        }
      },
    },
    plugins: [],
  }