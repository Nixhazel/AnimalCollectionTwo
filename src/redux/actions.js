export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addToFavorites = (animal) => ({
	type: ADD_TO_FAVORITES,
	payload: animal,
});

export const removeFromFavorites = (animal) => ({
	type: REMOVE_FROM_FAVORITES,
	payload: animal,
});
