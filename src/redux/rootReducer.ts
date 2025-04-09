import { combineReducers } from '@reduxjs/toolkit';
import componentsReducer from './slices/componentsSlice';
import formReducer from './slices/formSlice';
import toastReducer from './slices/toastSlice';
import dialogReducer from './slices/dialogSlice';
import feedbackFormSlice from './slices/feedbackFormSlice';
import feedbackSlice from './slices/feedbackSlice';

const rootReducer = combineReducers({
	components: componentsReducer,
	form: formReducer,
	toast: toastReducer,
	dialog: dialogReducer,
	feedback: feedbackSlice,
	feedbackForm: feedbackFormSlice
});

export default rootReducer;
