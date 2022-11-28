/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      height: {
        100: "50rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
