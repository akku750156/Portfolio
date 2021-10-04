module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Stick No Bills",
      serif: "Londrina Outline",
      mono: "Roboto",
    },
    extend: {
      backgroundColor: {
        primary: "#071c21",
        secondary: "#FCD34D",
        tertiary: "#10B981",
      },
      textColor: {
        heading: "#ffd000",
        bgheading: "#ffd000",
        lgtext: "#10B981",
        smtext: "#FCD34D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
