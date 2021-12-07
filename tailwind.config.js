// some of the classes used is being purged after build is done.
// solution: https://github.com/tailwindlabs/tailwindcss/issues/4009
// const fg = require('fast-glob');
// const purgeFiles = fg.sync(['./src/pages/**/*.jsx', './src/components/**/*.jsx'], { dot: false });

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        90: "5.625rem",
        75: "4.688rem",
        64: "4rem",
        60: "3.75rem",
        50: "3.125rem",
        46: "2.875rem",
        44: "2.75rem",
        40: "2.5rem",
        34: "2.125rem",
        32: "2rem",
        25: "1.563rem",
        24: "1.5rem",
        18: "1.125rem",
        15: "0.938rem"
      },
      colors: {
        yellow: {
          "01": "#FDB500"
        },
        gray: {
          "01": "#0B2A2B"
        },
        blue: {
          "01": "#102364"
        },
        pink: "#F13E5D",
        yellowBg: "#F7DA5B",
        orange: "#FF590F",
        dark: "#0E181E",
        grayBorder: "#DEDEDE"
      },
      fontFamily: {
        darker: ["Darker Grotesque", "Open Sans", "sans-serif"]
      },
      borderRadius: {
        10: "10px"
      },
      screens: {
        992: "992px"
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%"
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      brightness: ['hover'],
      backdropOpacity: ["hover"],
    }
  },
  plugins: []
};
