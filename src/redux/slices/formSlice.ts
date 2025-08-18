import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComponentForm } from '../../interfaces/component.interface';

const initialState: IComponentForm = {
	id: '',
	name: '',
	categoryId: '',
	guidelines: '🧱',
	figma: '🧱',
	storybook: '🧱',
	cdn: '🧱',
	figmaLink: '',
	storybookLink: '',
	comment: '',
	description: '',
	image: null
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateField: (state, action: PayloadAction<{ field: keyof IComponentForm; value: string | File | null }>) => {
			const { field, value } = action.payload;
			if (field === 'image') {
				state.image = value as File | null;
			} else {
				state[field] = value as string;
			}
		},
		setComponentData: (state: IComponentForm, action: PayloadAction<IComponentForm>) => {
			const nonEmpty = (v?: string) => (typeof v === 'string' && v.trim().length > 0 ? v : undefined);
			return {
				...state,
				id: action.payload.id?.toString() || '',
				name: action.payload.name,
				// Ensure categoryId is stored correctly in form state
				categoryId: (action.payload as any).categoryId ?? (action.payload as any).category ?? '',
				guidelines: nonEmpty(action.payload.guidelines) ?? state.guidelines,
				figma: nonEmpty(action.payload.figma) ?? state.figma,
				storybook: nonEmpty(action.payload.storybook) ?? state.storybook,
				cdn: nonEmpty(action.payload.cdn) ?? state.cdn,
				figmaLink: nonEmpty(action.payload.figmaLink) ?? state.figmaLink,
				storybookLink: nonEmpty(action.payload.storybookLink) ?? state.storybookLink,
				// Map form's notes into local form state's comment field
				comment: nonEmpty((action.payload as any).comment) ?? nonEmpty((action.payload as any).notes) ?? state.comment,
				description: nonEmpty(action.payload.description) ?? state.description,
				image: (action.payload.image as File | null) || null
			};
		},
		resetForm: () => initialState
	}
});

export const { updateField, resetForm, setComponentData } = formSlice.actions;
export default formSlice.reducer;
