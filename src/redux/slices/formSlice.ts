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
	comment: string;
}

const initialState: IFormState = {
	id: '',
	name: '',
	category: '',
	guidelines: '🧱',
	figma: '🧱',
	storybook: '🧱',
	cdn: '🧱',
	comment: ''
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateField: (state, action: PayloadAction<{ field: keyof IFormState; value: string }>) => {
			const { field, value } = action.payload;
			state[field] = value;
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
				comment: action.payload.comment
			};
		},
		resetForm: () => initialState
	}
});

export const { updateField, resetForm, setComponentData } = formSlice.actions;
export default formSlice.reducer;
