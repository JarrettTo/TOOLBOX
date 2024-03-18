/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        TelegrafUltraBold: ["TelegrafUltraBold", "sans-serif"],
        SourceSansProSemibold: ["SourceSansProSemibold", "sans-serif"],
        SourceSansProRegular: ["SourceSansProRegular", "sans-serif"],
      },
    },
    extend: {
      fontFamily: {
        TelegrafUltraBold: ["Telegraf-UltraBold", "sans-serif"],
        SourceSansProSemibold: ["SourceSansProSemibold", "sans-serif"],
        SourceSansProRegular: ["SourceSansProRegular", "sans-serif"],
      },
      colors: {
        'white': '#ffffff',
        'black-pearl': '#202122',
        'navbar-white': '#f3f3f3',
        'white-smoke': '#f8f8f8',
        'green': '#194c35',
        'orange': '#f4a434',
        'main-gradient-1': '#f1ba51',
        'main-gradient-2': '#ff8200',
        'sub-gradient-1': '#ff3131',
        'sub-gradient-2': '#ff914d',
      },
      borderRadius: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("daisyui")],
}