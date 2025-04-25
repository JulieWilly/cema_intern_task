/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#F0F4FF",
          200: "#E1E9FF",
          300: "#C3Dafe",
          400: "#A5b4fc",
          500: "#818cf8",
          600: "#6366f1",
          700: "#4f46e5",
          800: "#4338ca",
          900: "#3730a3",
        },
        primary: "#1F2937",
        secondary: "#4f46e5",
      },
    },
  },
  plugins: [],
};
