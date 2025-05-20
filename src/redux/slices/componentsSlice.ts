import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryApi, IComponentApi, IComponentForm } from '../../interfaces/component.interface';
import { createComponent } from '../../api/createComponent';
import { deleteComponent } from '../../api/deleteComponent';
import { updateComponent } from '../../api/updateComponent';

const initialState: ICategoryApi[] = [];

// ADD ASYNC
export const addComponent = createAsyncThunk(
	'components/addComponent',
	async (data: IComponentForm, { rejectWithValue }) => {
		try {
			const response = await createComponent(data);
			if (response.status === 201) {
				const newComponent = {
					id: response.data.componentId,
					name: data.name,
					comment: data.comment,
					description: '',
					category: data.category,
					image: data.image,
					statuses: [
						{
							guidelines: data.guidelines,
							figma: data.figma,
							storybook: data.storybook,
							cdn: data.cdn
						}
					]
				};
				return newComponent;
			} else {
				return rejectWithValue('Failed to create component');
			}
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

// UPDATE ASYNC
export const updateComponentThunk = createAsyncThunk(
	'components/updateComponent',
	async (data: IComponentForm, { rejectWithValue }) => {
		try {
			const response = await updateComponent(data);
			if (response.status === 200) {
				return data;
			}
			return rejectWithValue('Failed to update component');
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

// REMOVE ASYNC
export const removeComponent = createAsyncThunk(
	'components/removeComponent',
	async (component: IComponentApi, { rejectWithValue }) => {
		try {
			const response = await deleteComponent(component);
			if (response.status === 200) {
				return component;
			} else {
				return rejectWithValue('Failed to delete component');
			}
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const componentSlice = createSlice({
	name: 'componentsReducer',
	initialState,
	reducers: {
		setComponentsState: (_, action: PayloadAction<ICategoryApi[]>) => {
			return action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			// ADD CASE
			.addCase(addComponent.fulfilled, (state, action: PayloadAction<IComponentApi>) => {
				return state.map((item) => {
					if (item.category === action.payload.category) {
						return {
							...item,
							components: [...item.components, action.payload]
						};
					}
					return item;
				});
			})
			.addCase(addComponent.rejected, (_, action) => {
				console.error('Error adding component:', action.payload);
			})
			// UPDATE CASE
			.addCase(updateComponentThunk.fulfilled, (state, action: PayloadAction<IComponentForm>) => {
				const updatedComponent = {
					id: Number(action.payload.id),
					name: action.payload.name,
					comment: action.payload.comment,
					category: action.payload.category,
					statuses: [
						{
							guidelines: action.payload.guidelines,
							figma: action.payload.figma,
							storybook: action.payload.storybook,
							cdn: action.payload.cdn
						}
					]
				};

				let categoryExists = false;

				const newState = state.map((item) => {
					if (item.category === updatedComponent.category) {
						categoryExists = true;
						return {
							...item,
							components: item.components.some((comp) => comp.id === updatedComponent.id)
								? item.components.map((comp) => (comp.id === updatedComponent.id ? updatedComponent : comp))
								: [...item.components, updatedComponent] // Add if it doesn't exist
						};
					} else {
						return {
							...item,
							components: item.components.filter((comp) => comp.id !== updatedComponent.id) // Remove from old category
						};
					}
				});

				// If the new category didn't exist in the state, add it
				if (!categoryExists) {
					return [
						...newState,
						{
							category: updatedComponent.category,
							components: [updatedComponent]
						}
					];
				}

				return newState;
			})
			.addCase(updateComponentThunk.rejected, (_, action) => {
				console.error('Error updating component:', action.payload);
			})
			// REMOVE CASE
			.addCase(removeComponent.fulfilled, (state, action: PayloadAction<IComponentApi>) => {
				return state.map((item) => {
					if (item.category === action.payload.category) {
						return {
							...item,
							components: item.components.filter((comp) => comp.id !== action.payload.id)
						};
					}
					return item;
				});
			})
			.addCase(removeComponent.rejected, (_, action) => {
				console.error('Error deleting component:', action.payload);
			});
	}
});

export const { setComponentsState } = componentSlice.actions;
export default componentSlice.reducer;
