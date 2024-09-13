/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'], // Corrected single declaration for Commissioner
        birthstone: ['Birthstone', 'cursive'],       // Added Birthstone
        didot: ['Didot', 'serif'],                   // Added Didot
      },
      colors: {
        Marmol: '#FBF8F4',   // You can give any custom color a default name like 'primary'
        Dorado: '#BCAD7E',   // You can give any custom color a default name like 'primary'
        
      },
    },
  },
  plugins: [],
}
