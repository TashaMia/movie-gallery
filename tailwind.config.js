/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      
      animation: {
        'spinerToEnd': 'spinerToEnd .8s linear ',
        'spinerToStart': 'spinerToStart .8s linear',
      },
      keyframes: {
        
        spinerToEnd: {
          '0%': { justifyContent: 'start' },
          '100%': { justifyContent: 'end' },
        },
        spinerToStart: {
          '0%': { justifyContent: 'end' },
          '100%': { justifyContent: 'start' },
        }
    },
  },
  plugins: [],
}}

