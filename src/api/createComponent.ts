import { AxiosResponse } from 'axios';
import { api } from '.';
import { IComponentForm } from '../interfaces/component.interface';

export const createComponent = async (data: IComponentForm): Promise<AxiosResponse<unknown>> => {
  console.log(data);
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('comment', data.comment || '');
    formData.append('description', data.description || '');
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
    formData.append('atomicType', data.atomicType || '');

    const response = await api.post(`/categories/${data.category}/components`, formData);

    console.log(response);
    return response;
  } catch (error) {
    console.error('Error creating component:', error);
    throw error;
  }
};
