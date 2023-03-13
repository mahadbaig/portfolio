/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background-color': '#191A19',
      'primary-color': '#1E5128',
      'secondary-color': '#4E9F3D',
      'extra-color': '#D8E9A8',
      'white': '#F8F8F8',
      'black': '#070707',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
