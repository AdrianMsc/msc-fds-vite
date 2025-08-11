import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '.';
import { IComponentForm } from '../interfaces/component.interface';

export const createComponent = async (data: IComponentForm): Promise<AxiosResponse<any>> => {
	console.log(data);
	try {
		const baseData: Partial<IComponentForm> = {
			name: data.name,
			categoryId: data.category,
			description: data.description,
			notes: data.comment,
			cdn: data.cdn,
			figma: data.figma,
			guidelines: data.guidelines,
			storybook: data.storybook
		};

		if (data.figmaLink !== '' && data.storybookLink !== '') {
			baseData.figmaLink = data.figmaLink;
			baseData.storybookLink = data.storybookLink;
		}

		console.log(baseData);
		const response = await axios.post(`${baseUrl}/components`, baseData);
		return response;
	} catch (error) {
		console.error('Error creating component:', error);
		throw error;
	}
};
