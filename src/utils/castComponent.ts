import { IComponentApi, IComponentForm } from '../interfaces/component.interface';

export const castComponent = (component: IComponentApi | IComponentForm) => {
	// Type guard: API objects have an array "status"; forms do not
	const isApi = (c: IComponentApi | IComponentForm): c is IComponentApi => (c as any)?.status && true;

	const getStage = (statuses: any[] | undefined, platform: string, fallbackIndex: number) => {
		if (!Array.isArray(statuses) || statuses.length === 0) return '';
		// Try exact match
		let match = statuses.find((s: any) => String(s?.platformName).trim() === String(platform).trim())?.stage;
		if (match) return match;
		// Try case-insensitive match
		match = statuses.find(
			(s: any) => String(s?.platformName).trim().toLowerCase() === String(platform).trim().toLowerCase()
		)?.stage;
		if (match) return match;
		// Fallback to array position
		return statuses[fallbackIndex]?.stage ?? '';
	};

	const getLink = (links: any, platform: string) =>
		Array.isArray(links) ? links.find((l: any) => l?.platformName === platform)?.link ?? '' : '';

	if (isApi(component)) {
		const links = (component as IComponentApi).link as any;
		return {
			id: component.id,
			name: component.name,
			categoryId: component.categoryId,
			description: component.description ?? '',
			notes: component.notes,
			image: component.image ?? null,
			guidelines: getStage(component.status, 'guidelines', 0),
			figma: getStage(component.status, 'figma', 1),
			storybook: getStage(component.status, 'storybook', 2),
			cdn: getStage(component.status, 'cdn', 3),
			storybookLink: getLink(links, 'storybookLink'),
			figmaLink: getLink(links, 'figmaLink')
		};
	} else {
		const form = component as IComponentForm;
		return {
			id: form.id ?? '',
			name: form.name,
			categoryId: form.categoryId,
			description: form.description ?? '',
			notes: (form as any).notes ?? form.comment ?? '',
			// If image is a File, you may be handling upload separately; DTO expects URL string.
			image: typeof form.image === 'string' ? form.image : null,
			guidelines: form.guidelines,
			figma: form.figma,
			storybook: form.storybook,
			cdn: form.cdn,
			figmaLink: form.figmaLink,
			storybookLink: form.storybookLink
		};
	}
};
