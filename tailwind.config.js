/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        basic: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: {
          100: "var(--white-100)",
          200: "var(--white-200)",
          300: "var(--white-300)",
        },
        purple: {
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
          400: "var(--purple-400)",
        },
        red: {
          100: "var(-red-100)",
          200: "var(-red-200)",
          300: "var(-red-300)",
        },
        green: {
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
        },
        orange: {
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
        },
        gray: {
          grey: "var(--grey)",
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          300: "var(--grey-300)",
          400: "var(--grey-400)",
          500: "var(--grey-500)",
        },

        blue: {
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
        },
        black: {
          black: "var(--black)",
          100: "var(--black-100)",
          200: "var(--black-200)",
          300: "var(--black-300)",
          400: "var(--black-400)",
          500: "var(--black-500)",
          600: "var(--black-600)",
          700: "var(--black-700)",
          800: "var(--black-800)",
          900: "var(--black-900)",
        },
      },
      backgroundImage: {
        "check-box": "url('/icons/trash-icon.svg')",
      },
    },
  },

  plugins: [],
};
