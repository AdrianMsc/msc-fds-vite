import type { Config } from "tailwindcss";
const colors = require("./styles/utilities/colors");

const config: Config = {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unplugLeft: {
          "0%": { right: "-2.2rem" },
          "50%": { right: "0" },
          "100%": { right: "-2.2rem" },
        },
        unplugRight: {
          "0%": { left: "0" },
          "50%": { left: "2rem" },
          "100%": { left: "0" },
        },
      },
      animation: {
        unplugLeft: "unplugLeft 4s infinite",
        unplugRight: "unplugRight 4s infinite",
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./styles/classes/msc-buttons"),
    require("./styles/classes/msc-checkbox"),
    require("./styles/classes/msc-dropdown"),
    require("./styles/classes/msc-inputs"),
    require("./styles/classes/msc-modals"),
    require("./styles/classes/msc-radio"),
    require("./styles/classes/msc-toggle"),
    require("./styles/classes/msc-icons"),
    require("./styles/classes/msc-dividers"),
    require("./styles/classes/msc-spinner"),
    require("./styles/classes/msc-link"),
    require("./styles/classes/msc-typography"),
    require("./styles/classes/msc-pager"),
    require("./styles/classes/msc-filter"),
    require("./styles/classes/msc-dialog"),
    require("./styles/classes/msc-grey-button"),
    require("./styles/classes/msc-tabs"),
    require("./styles/classes/msc-cart-action-bar"),
    require("./styles/classes/msc-index"),
    require("./styles/classes/msc-breadcrumb"),
    require("./styles/classes/msc-alert"),
    require("./styles/classes/msc-pagination"),
  ],
};
export default config;
