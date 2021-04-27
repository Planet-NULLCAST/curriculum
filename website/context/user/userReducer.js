import { SET_PROGRESS } from "./types";

export default function ur(state, action) {
	switch (action.type) {
		case SET_PROGRESS:
			return {
				...state,
				user: action.payload
			};
		default:
			return state;
	}
}
