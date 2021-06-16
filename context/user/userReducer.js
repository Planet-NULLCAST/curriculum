import { SET_TESTS, SET_RUN, SET_PROGRESS, SET_TAGS } from "./types";

export default function ur(state, action) {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        test: action.payload
      };
    case SET_RUN:
      return {
        ...state,
        run: action.payload
      };

    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };

    case SET_TAGS:
      return {
        ...state,
        tags: action.payload
      };

    default:
      return state;
  }
}
