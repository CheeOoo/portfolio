/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#111111",
        "secondary-color": "#292929",
        "text-color": "#ffffff"
      },
      fontFamily: {
        NeueHaas: ['"NeueHaasUnica"', "sans-serif"],
        InputMono: ['"InputMono"', "UI-Mono"],
      },
      fontSize: {
        "15": "15px",
      },
      maxWidth: {
        "8xl": "111rem",
      }
    },
  },
  plugins: [],
}

