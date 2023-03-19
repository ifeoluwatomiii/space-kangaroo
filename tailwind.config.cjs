/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Merriweather', 'serif'],
       
      },
      backgroundImage: {
        'heroone': "url('/src/gaming1.jpg')",
      }
    },
  },
  plugins: []
}
