/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
        bangers: ['"Bangers"', 'cursive'],
        luckiest: ['"Luckiest Guy"', 'cursive'],
      },
    },
  },
  plugins: [],
}

