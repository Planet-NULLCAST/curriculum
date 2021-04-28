import { SET_PROGRESS, SET_TESTS } from "./types";

export default function ur(state, action) {
	switch (action.type) {
		case SET_PROGRESS:
			return {
				...state,
				user: action.payload
			};
		case SET_TESTS:
			return {
				...state,
				test: action.payload
			};
		default:
			return state;
	}
}
