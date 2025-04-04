module.exports = function ({ addComponents }) {
  const index = {
    ".msc-layout-container": {
      "@apply col-span-12 md:col-span-12 2xl:col-span-12 2xl:col-start-1 pt-10 px-6":
        {},
    },
    ".msc-component-container-col": {
      "@apply flex flex-col gap-2 place-content-evenly w-full h-fit bg-white rounded py-4 px-4":
        {},
    },
    ".msc-component-container-row": {
      "@apply flex flex-row flex-wrap items-center gap-2 place-content-evenly w-full h-fit bg-white rounded py-4 px-4":
        {},
    },
    ".msc-grid-layout": {
      "@apply p-4 sm:ml-64 grid grid-cols-12": {},
    },
    ".category-tag": {
      "@apply mt-5 text-blue-600 font-bold text-sm": {},
    },
  };
  addComponents(index);
};
