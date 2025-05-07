import { FigmaLinks } from '../constants/FigmaLinks';

export function getFigmaLink(
	name: keyof (typeof FigmaLinks)[keyof typeof FigmaLinks],
	category: keyof typeof FigmaLinks
) {
	const formattedName = typeof name === 'string' ? (name as string).replace(/\s/g, '') : '';
	const value =
		category in FigmaLinks && formattedName in (FigmaLinks[category] as Record<string, string>)
			? (FigmaLinks[category] as Record<string, string>)[formattedName]
			: undefined;
	return value || null; // Returns the link or null if not found
}
