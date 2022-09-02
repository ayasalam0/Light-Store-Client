/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontPrimary: "#072451",
        fontSecondary: "#8A5935",
        favourate:"#FF9191"
      },
      padding: {
        "533px": "533px",
      },
      height: {
        "583px": "583px",
        "550px": "550px",
        "855px": "855px",
      },
      width: {
        "619px": "619px",
        "600px": "600px",
      }
    },
  },
  plugins: [require("daisyui")],
};
