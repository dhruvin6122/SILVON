/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Slate 900
        secondary: "#334155", // Slate 700
        accent: "#0EA5E9", // Sky 500 - Bright Blue for primary actions
        "accent-dark": "#0284C7", // Sky 600 - Darker shade for hover
        "accent-light": "#E0F2FE", // Sky 100 - Very light shade for backgrounds
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px", // Limit max width for better readability
        },
      },
    },
  },
  plugins: [],
};
