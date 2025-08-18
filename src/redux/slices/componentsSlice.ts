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
				const newComponent: IComponentApi = {
					id: String(response.data.componentId),
					name: data.name,
					notes: data.comment,
					description: data.description || '',
					categoryId: data.categoryId,
					image:
						typeof data.image === 'string'
							? data.image
							: data.image instanceof File
							? data.image.name
							: undefined,
					status: [
						{ platformName: 'guidelines', stage: data.guidelines },
						{ platformName: 'figma', stage: data.figma },
						{ platformName: 'storybook', stage: data.storybook },
						{ platformName: 'cdn', stage: data.cdn }
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
				// Compare by categoryId when available, fallback to category (name)
				return state.map((item) => {
					const sameCategory = item.categoryId
						? item.categoryId === action.payload.categoryId
						: item.category === action.payload.categoryId;
					if (sameCategory) {
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
				// Normalize to IComponentApi shape expected by the UI
				const updatedComponent: IComponentApi = {
					id: (action.payload.id as string) || '',
					name: action.payload.name,
					notes: action.payload.comment,
					description: action.payload.description || '',
					categoryId: action.payload.categoryId,
					image:
						typeof action.payload.image === 'string'
							? action.payload.image
							: action.payload.image instanceof File
							? action.payload.image.name
							: undefined,
					status: [
						{ platformName: 'guidelines', stage: action.payload.guidelines },
						{ platformName: 'figma', stage: action.payload.figma },
						{ platformName: 'storybook', stage: action.payload.storybook },
						{ platformName: 'cdn', stage: action.payload.cdn }
					]
				};

				let categoryExists = false;

				const newState = state.map((item) => {
					const sameCategory = item.categoryId
						? item.categoryId === updatedComponent.categoryId
						: item.category === updatedComponent.categoryId;
					if (sameCategory) {
						categoryExists = true;
						return {
							...item,
							components: item.components.some((comp) => comp.id === updatedComponent.id)
								? item.components.map((comp) => (comp.id === updatedComponent.id ? updatedComponent : comp))
								: [...item.components, updatedComponent]
						};
					} else {
						return {
							...item,
							components: item.components.filter((comp) => comp.id !== updatedComponent.id)
						};
					}
				});

				// If the new category didn't exist in the state, add it
				if (!categoryExists) {
					return [
						...newState,
						{
							categoryId: updatedComponent.categoryId,
							// Name unknown here; fallback to id to keep UI consistent
							category: updatedComponent.categoryId,
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
					const sameCategory = item.categoryId
						? item.categoryId === action.payload.categoryId
						: item.category === action.payload.categoryId;
					if (sameCategory) {
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
