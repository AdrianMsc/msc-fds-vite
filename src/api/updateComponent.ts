import axios, { AxiosResponse } from 'axios';
import { IComponentForm } from '../interfaces/component.interface';
import { baseUrl } from '.';

export const updateComponent = async (component: IComponentForm): Promise<AxiosResponse<IComponentForm>> => {
	try {
		const formData = new FormData();

		// Append scalar fields
		formData.append('name', component.name);
		formData.append('category', component.category);
		formData.append('comment', component.comment || '');
		formData.append('cdn', component.cdn);
		formData.append('figma', component.figma);
		formData.append('guidelines', component.guidelines);
		formData.append('storybook', component.storybook);
		formData.append('figmaLink', component.figmaLink || '');
		formData.append('storybookLink', component.storybookLink || '');

		// Append the image only if it's a File (new upload)
		if (component.image instanceof File) {
			formData.append('image', component.image);
		}

		const response = await axios.put<IComponentForm>(
			`${baseUrl}/categories/${component.category}/components/${component.id}`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		console.log(response.data);
		return response;
	} catch (error) {
		console.error('Error updating component:', error);
		throw error;
	}
};
