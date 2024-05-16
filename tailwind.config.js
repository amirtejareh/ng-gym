/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fitness-background": "url('/src/assets/images/top.png')",
      },
    },
  },
  plugins: [],
};
