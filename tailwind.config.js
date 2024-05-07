/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors:{
       'color1': "#e25858", // red
       'color2': "#e9d6af",  // orange
       'color3': "#ffffdd", // yellow
       'color4': "#c0efd2", // green light
       'color5': "#384252", // green dark

      }
    },
  },
  plugins: [],
};
