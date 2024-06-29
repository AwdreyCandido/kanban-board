/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#4339F2",
      success: "#34B53A",
      info: "#02A0FC",
      danger: "#FF3A29",
      warning: "#FFB200",
      transparent: "#00000000",
      "primary-light": "#DAD7FE",
      "success-light": "#E2FBD7",
      "info-light": "#CCF8FE",
      "danger-light": "#FFE5D3",
      "warning-light": "#FFF5CC",
      white: "#FFF",
      black: {
        20: "#00000033",
        40: "#00000066",
        60: "#00000099",
        80: "#000000cc",
        100: "#000000",
      },
    },
    fontFamily: {
      sora: "Sora, sans-serif",
      dm: "DM Sans, sans-serif"
    },
  },
  plugins: [],
};
