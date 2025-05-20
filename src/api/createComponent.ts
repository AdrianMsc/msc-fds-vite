import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '.';
import { IComponentForm } from '../interfaces/component.interface';

export const createComponent = async (data: IComponentForm): Promise<AxiosResponse<any>> => {
	console.log(data);
	try {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('category', data.category);
		formData.append('comment', data.comment || '');
		formData.append('guidelines', data.guidelines || '');
		formData.append('figma', data.figma || '');
		formData.append('storybook', data.storybook || '');
		formData.append('cdn', data.cdn || '');
		if (data.image) {
			formData.append('image', data.image);
			// formData.append('file', data.image); //* NEST
		}
		formData.append('figmaLink', data.figmaLink || '');
		formData.append('storybookLink', data.storybookLink || '');

		const response = await axios.post(`${baseUrl}/categories/${data.category}/components`, formData);

		console.log(response);
		return response;
	} catch (error) {
		console.error('Error creating component:', error);
		throw error;
	}
};
