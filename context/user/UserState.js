import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_TESTS, SET_RUN } from "./types";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    run: false,
    test: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //set test
  const setTest = (testCase) => {
    dispatch({
      type: SET_TESTS,
      payload: testCase,
    });
  };

  //set run
  const setRun = (value) => {
    dispatch({
      type: SET_RUN,
      payload: value,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        run: state.run,
        test: state.test,
        setTest,
        setRun,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
