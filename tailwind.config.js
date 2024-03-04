/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/admin/targetclientlist/**/*.{html,js}",
    "./src/admin/targetclientlist/**/*.{html,js}",
    "./src/admin/targetclientlist/**/*.{html,js}",
    "./src/admin/scan/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        nature: {
          100: "#F6F3EB",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
        poppins: ["Poppins"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
