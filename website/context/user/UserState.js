import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_PROGRESS } from "./types";

const UserState = ({ children }) => {
	const initialState = {
		user: {},
		test: [
			{
				case: ["b=5", "b=5;"],
				hint: "b should have value of 5",
				isCorrect: false
			},
			{}
		]
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	//set user progress - complete function

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				test: state.test
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserState;
