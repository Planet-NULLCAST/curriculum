import { SET_TESTS, SET_RUN } from "./types";

export default function ur(state, action) {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        test: action.payload,
      };
    case SET_RUN:
      return {
        ...state,
        run: action.payload,
      };

    default:
      return state;
  }
}
