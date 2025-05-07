const toKebabCase = (str: string): string =>
	str
		.replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
		.replace(/\s+/g, '-') // spaces to dashes
		.replace(/_/g, '-') // underscores to dashes
		.toLowerCase();

const baseUrl = 'https://msc-fds-storybook.vercel.app/?path=/story';

export const createSBLink = (componentName: string, category: string): string => {
	const kebabCategory = toKebabCase(category);
	const kebabComponent = toKebabCase(componentName);
	return `${baseUrl}/${kebabCategory}-${kebabComponent}--msc-${kebabComponent}`;
};
