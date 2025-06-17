import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Status {
	guidelines: string;
	figma: string;
	storybook: string;
	cdn: string;
}

export interface Component {
	id: number;
	name: string;
	statuses: Status[];
	comment: string;
	description?: any;
	category: any;
	createdAt: string;
	updatedAt: string;
	figmaLink?: string;
	storybookLink?: string;
	image?: string | null;
}

interface CurrentComponentState {
	currentComponent: Component | null;
}

const initialState: CurrentComponentState = {
	currentComponent: {
		id: 0,
		name: 'Default Component',
		description: '',
		category: {},
		comment: '',
		image: null,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		statuses: [
			{
				guidelines: '⏳',
				figma: '⏳',
				storybook: '⏳',
				cdn: '⏳'
			}
		],
		storybookLink: '',
		figmaLink: ''
	}
};

const currentComponentSlice = createSlice({
	name: 'currentComponent',
	initialState,
	reducers: {
		setCurrentComponent: (state, action: PayloadAction<Component>) => {
			state.currentComponent = action.payload;
		},
		clearCurrentComponent: (state) => {
			state.currentComponent = null;
		}
	}
});

export const { setCurrentComponent, clearCurrentComponent } = currentComponentSlice.actions;
export default currentComponentSlice.reducer;
