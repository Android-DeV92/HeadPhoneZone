const initState = null;

const categoryReducer = (state = initState, action) => {
	switch (action.type) {
		case "LOAD_CATEGORIES":
			//state = { ...state, [action.category]: action.payload };
			state = action.payload;
			break;

		default:
			break;
	}
	return state;
};
export default categoryReducer;
