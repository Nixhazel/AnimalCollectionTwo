import { combineReducers } from "redux";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions";

const initialState = {
	favorites: [],
};

const favoritesReducer = (state = initialState.favorites, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITES:
			return [...state, action.payload];
		case REMOVE_FROM_FAVORITES:
			return state.filter((animal) => animal.name !== action.payload.name);
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	favorites: favoritesReducer,
});

export default rootReducer;
