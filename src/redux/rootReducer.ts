import { combineReducers } from '@reduxjs/toolkit';
import componentsReducer from './slices/componentsSlice';
import formReducer from './slices/formSlice';
import toastReducer from './slices/toastSlice';

const rootReducer = combineReducers({
	components: componentsReducer,
	form: formReducer,
	toast: toastReducer
});

export default rootReducer;
