/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f8ede3', 
        
        'text': '#403d39', 
        
        'primary': '#0B6530', 
        
        'accent': '#7DF3AD',
        
        'secondary': '#E6F4EA', 
      },
      fontFamily: {
        'text': ['Cousine', 'sans-serif'],
        'logo' : ['Barriecito', 'sans-serif' ],
      },

      boxShadow: {
        'text-shadow': '2px 2px 4px black',
      }
    },
  },
  plugins: [],
}