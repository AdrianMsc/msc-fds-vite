import { combineReducers } from '@reduxjs/toolkit';
import componentsReducer from './slices/componentsSlice';
import formReducer from './slices/formSlice';
import toastReducer from './slices/toastSlice';
import dialogReducer from './slices/dialogSlice';

const rootReducer = combineReducers({
	components: componentsReducer,
	form: formReducer,
	toast: toastReducer,
	dialog: dialogReducer
});

export default rootReducer;
