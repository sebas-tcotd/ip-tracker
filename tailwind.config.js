/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Rubik", ...defaultTheme.fontFamily.sans] },
      backgroundImage: {
        "mobile-header-texture": "url('/img/pattern-bg-mobile.png')",
        "desktop-header-texture": "url('/img/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
