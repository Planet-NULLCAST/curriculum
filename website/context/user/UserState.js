import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_PROGRESS } from "./types";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    test: [
      {
        case: ["a=5;", "a=5"],
        hint: "b should have value of 5",
        isCorrect: false,
      },
      {
        case: ["b=6;", "b=6"],
        hint: "a should have value of 3",
        isCorrect: false,
      },
      {
        case: ["if(a===b){", "if(a===b)"],
        hint: "use operator +",
        isCorrect: false,
      },
      {
        case: ["'console.log('log');'", "console.log('log')"],
        hint: "use operator +",
        isCorrect: false,
      },
      {
        case: ["}"],
        hint: "use operator +",
        isCorrect: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //set user progress - complete function

  return (
    <UserContext.Provider
      value={[
        {
          user: state.user,
          test: state.test,
        },
        dispatch,
      ]}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
