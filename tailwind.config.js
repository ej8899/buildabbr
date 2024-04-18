

// /** @type {import(tailwindcss').Config */
// export const content = ["./src/**/*.{html,js,jsx,tsx}"];
// export const theme = {
// extend: {},
// };
// export const plugins = []; 


const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{html,js,jsx,tsx}",
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};