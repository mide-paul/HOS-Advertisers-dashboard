const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#282828",
        secondary: "#002D62",
        accent: "#FFD700",
        gray: {
          light: "#F5F5F5",
          DEFAULT: "#A9A9A9",
          dark: "#696969"
        }
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px"
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        serif: ["Poppins", ...fontFamily.serif],
        mono: [...fontFamily.mono],
        display: ["Oswald"],
        body: ["Open Sans"]
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  },
  plugins: []
};