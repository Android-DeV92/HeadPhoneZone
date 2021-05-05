import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

const DEFAULT_REDUCER = (initstate, action) => {
	return {
		key: "Hello Welcome to:- Mrityunjay Admin Page...",
	};
};

const rootReducer = combineReducers({
	DEFAULT: DEFAULT_REDUCER,
	categories: categoryReducer,
	categoryPages: categoryReducer,
});
export default rootReducer;
