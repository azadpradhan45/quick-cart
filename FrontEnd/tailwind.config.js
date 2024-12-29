// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      scrollbar: {
        thin: {
          track: 'transparent', 
          thumb: 'gray-400', 
          hover: 'gray-600', 
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
