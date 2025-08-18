export interface IComponentApi {
	id: string;
	name: string;
	categoryId: string;
	description?: string;
	notes: string;
	status: IStatusApi[];
	link?: any;
	image?: string;
}

export interface IComponentForm {
	id?: string;
	name: string;
	categoryId: string;
	comment: string;
	description?: string;
	guidelines: string;
	figma: string;
	storybook: string;
	cdn: string;
	figmaLink?: string;
	storybookLink?: string;
	image?: File | string | null;
	// Allow string indexing for dynamic field access
	[key: string]: any;
}

export interface ICategoryApi {
    // Backend returns both categoryId (id) and category (name) in /components/byCategory
    // Keep category (name) for UI display; add categoryId for identity/comparisons
    categoryId?: string;
    category: string;
    components: IComponentApi[];
}

export interface IStatusApi {
	platformName: string;
	stage: string;
}
