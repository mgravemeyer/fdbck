/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './index.html',
      './src/*.{jsx,tsx}',
      './src/pages/*.{jsx,tsx}',
      './src/components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
