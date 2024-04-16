/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/hundgrid.jpg')",
      },
      colors: {
        darktext: "#374151",
        lightcolor: "#e7e5e4",
        lightbrown: "#c9c3bb",
        lighterbrown: "#e1ded8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
