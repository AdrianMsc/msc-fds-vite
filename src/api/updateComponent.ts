import axios, { AxiosResponse } from 'axios';
import { IComponentForm } from '../interfaces/component.interface';
import { baseUrl } from '.';

/**
 * Updates a component in the database
 * @param component - The component data to update
 * @returns Promise with the updated component data
 */
export const updateComponent = async (component: IComponentForm): Promise<AxiosResponse<IComponentForm>> => {
	try {
		const formData = createComponentFormData(component);

		return await sendUpdateRequest(component, formData);
	} catch (error) {
		// 🚨 Log and rethrow for proper upstream error handling
		console.error('❌ Error updating component:', error);
		throw error;
	}
};

/**
 * Creates FormData from component properties
 * @param component - The component to convert to FormData
 * @returns FormData object with component properties
 */
const createComponentFormData = (component: IComponentForm): FormData => {
	const formData = new FormData();

	// 📝 Required fields
	formData.append('name', component.name);
	formData.append('category', component.category);
	formData.append('cdn', component.cdn);
	formData.append('figma', component.figma);
	formData.append('guidelines', component.guidelines);
	formData.append('storybook', component.storybook);

	// 🔖 Optional fields with fallback to empty string
	formData.append('comment', component.comment || '');
	formData.append('figmaLink', component.figmaLink || '');
	formData.append('storybookLink', component.storybookLink || '');

	// 🖼️ Only append image if it's a new upload
	if (component.image instanceof File) {
		formData.append('image', component.image);
	}

	return formData;
};

/**
 * Sends the update request to the API
 * @param component - Component being updated (for ID and category)
 * @param formData - FormData to send with the request
 * @returns Promise with the API response
 */
const sendUpdateRequest = async (
	component: IComponentForm,
	formData: FormData
): Promise<AxiosResponse<IComponentForm>> => {
	const url = `${baseUrl}/categories/${component.category}/components/${component.id}`;
	const config = { headers: { 'Content-Type': 'multipart/form-data' } };

	const response = await axios.put<IComponentForm>(url, formData, config);
	return response;
};
