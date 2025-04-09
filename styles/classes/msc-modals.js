module.exports = function ({ addComponents, theme }) {
	const modals = {
		'.msc-modal-bg': {
			'@apply absolute px-4 flex h-screen w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center':
				{}
		},
		'.msc-modal': {
			'@apply h-fit w-full sm:w-fit md:min-w-fit md:max-w-[90%] md:max-h-[90%] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col place-content-stretch 2xl:h-fit 2xl:max-w-fit':
				{}
		},
		'.msc-modal-header': {
			'@apply flex p-4 w-full place-content-between border-b': {}
		},
		'.msc-modal-title': {
			'@apply text-lg font-bold': {}
		},
		'.msc-modal-close': {
			'@apply h-3 w-3': {}
		},
		'.msc-modal-body': {
			'@apply flex-row px-4 pt-4 text-sm h-[90%] lg:h-fit overflow-auto': {}
		},
		'.msc-modal-footer': {
			'@apply flex justify-end py-3 px-4 gap-4 items-center h-auto border-t max-h-fit': {}
		}
	};
	addComponents(modals);
};
