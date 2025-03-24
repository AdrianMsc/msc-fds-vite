import axios, { AxiosResponse } from 'axios';
import { IComponentForm } from '../interfaces/component.interface';
import { baseUrl } from '.';

export const updateComponent = async (component: IComponentForm): Promise<AxiosResponse<IComponentForm>> => {
	try {
		const response = await axios.put<IComponentForm>(
			`${baseUrl}/categories/${component.category}/components/${component.id}`,
			component
		);
		return response;
	} catch (error) {
		console.error('Error updating component:', error);
		throw error;
	}
};
