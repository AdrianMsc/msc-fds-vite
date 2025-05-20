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
	image?: File | null;
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
	image: null
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateField: (state, action: PayloadAction<{ field: keyof IFormState; value: string | File | null }>) => {
			const { field, value } = action.payload;
			if (field === 'image') {
				state.image = value as File | null;
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
				comment: action.payload.comment
			};
		},
		resetForm: () => initialState
	}
});

export const { updateField, resetForm, setComponentData } = formSlice.actions;
export default formSlice.reducer;
