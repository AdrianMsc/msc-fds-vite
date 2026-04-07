import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComponentForm } from '../../interfaces/component.interface';

export interface IFormState {
	id: string;
	name: string;
	category: string;
	guidelines: string;
	figma: string;
	storybook: string;
	cdn: string;
	figmaLink: string;
	storybookLink: string;
	comment: string;
	description?: string;
	image?: File | string | null;
	atomicType: string | null;
	isNewVersion: boolean;
	parentComponentId: number | null;
	version: string;
}

const initialState: IFormState = {
	id: '',
	name: '',
	category: '',
	guidelines: '🧱',
	figma: '🧱',
	storybook: '🧱',
	cdn: '🧱',
	figmaLink: '',
	storybookLink: '',
	comment: '',
	description: '',
	image: null,
	atomicType: '',
	isNewVersion: false,
	parentComponentId: null,
	version: '1.0.0'
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateField: (state, action: PayloadAction<{ field: keyof IFormState; value: string | File | null | boolean | number }>) => {
			const { field, value } = action.payload;
			if (field === 'image') {
				state.image = value as File | null;
			} else if (field === 'atomicType') {
				// Handle both null and string for atomicType
				state.atomicType = (value as string | null) || null;
			} else if (field === 'isNewVersion') {
				state.isNewVersion = value as boolean;
			} else if (field === 'parentComponentId') {
				state.parentComponentId = value as number | null;
			} else if (field === 'version') {
				state.version = value as string;
			} else {
				state[field] = value as string;
			}
		},
		setComponentData: (state: IFormState, action: PayloadAction<IComponentForm>) => {
			return {
				...state,
				id: action.payload.id?.toString() || '',
				name: action.payload.name,
				category: action.payload.category,
				guidelines: action.payload.guidelines,
				figma: action.payload.figma,
				storybook: action.payload.storybook,
				cdn: action.payload.cdn,
				figmaLink: action.payload.figmaLink || '',
				storybookLink: action.payload.storybookLink || '',
				comment: action.payload.comment,
				description: action.payload.description || '',
				image: action.payload.image || null,
				atomicType: action.payload.atomicType || null,
				isNewVersion: action.payload.isNewVersion || false,
				parentComponentId: action.payload.parentComponentId ?? null,
				version: action.payload.version || '1.0.0'
			};
		},
		resetForm: () => initialState
	}
});

export const { updateField, resetForm, setComponentData } = formSlice.actions;
export default formSlice.reducer;
