 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm' : '320px',
        'base' : '375px',
        'mb' : '425px',
        'md' : '768px',
        'bm' : '1024px',
        'xl' : '1440px',
        '2xl' : '1600px'
      }
    },
  },
  plugins: [],
}