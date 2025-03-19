import { combineReducers } from "@reduxjs/toolkit";
import componentsReducer from "./slices/componentsSlice";
import formReducer from "./slices/formSlice";

const rootReducer = combineReducers({
  components: componentsReducer,
  form: formReducer,
});

export default rootReducer;
