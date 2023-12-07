/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.twig", "./src/**/*.{js,jsx,ts,tsx,vue,css,pcss}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      sans: ["panel-sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        body: "url('/assets/img/bg.jpg')",
        "button-1": "url('/assets/img/button-1.svg')",
        "button-2": "url('/assets/img/button-2.svg')",
        "button-3": "url('/assets/img/button-3.svg')",
      },
      fontSize: {
        lg: ["20px", "30px"],
        xl: ["25px", "1.6"],
        "2xl": ["30px", "1.5"],
        "3xl": ["40px", "1.4"],
        "4xl": ["70px", "90px"],
        "5xl": ["90px", "110px"],
      },
      colors: {
        black: "#282828",
        yellow: "#f2e61a",
        pink: "#ca508e",
      },
    },
  },
  plugins: [],
}
