import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_TESTS, SET_PROGRESS } from "./types";

const UserState = ({ children }) => {
	const initialState = {
		user: {},
		test: [
			{
				id: 1,
				case: ["a=5;", "a=5"],
				hint: "a should have value of 5",
				isCorrect: false
			},
			{
				id: 2,
				case: ["b=6;", "b=6"],
				hint: "b should have value of 6",
				isCorrect: false
			},
			{
				id: 3,
				case: ["if(a===b){", "if(a===b)"],
				hint: "use operator ===",
				isCorrect: false
			},
			{
				id: 4,
				case: ["console.log('log');", "console.log('log')"],
				hint: "use log",
				isCorrect: false
			},
			{
				id: 5,
				case: ["}"],
				hint: "use } ",
				isCorrect: false
			}
		]
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	//set user progress - complete function

	//set test
	const setTest = testCase => {
		dispatch({
			type: SET_TESTS,
			payload: testCase
		});
	};

	return (
		<UserContext.Provider
			value={{
				user: state.user,
				test: state.test,
				setTest
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserState;
