/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html","./app.js","./newdeals.html","./aboutus.html","./shopbybrand.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../standard_furniture_logo.jpg')",
      },
      colors:{
        linkcolor: '#3366CE'
      }
    },
  },
  plugins: [],
}