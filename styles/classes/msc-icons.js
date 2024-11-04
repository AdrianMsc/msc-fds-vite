module.exports = function ({ addComponents }) {
  const icons = {
    ".icon-btn": {
      "@apply w-4 mr-2": {},
    },
    ".msc-toggle-icon": {
      "@apply w-4 h-4 mr-3": {},
    },
  };
  addComponents(icons);
};
