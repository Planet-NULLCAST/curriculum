import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import { SET_TESTS, SET_RUN, SET_PROGRESS, SET_TAGS } from "./types";
import TagService from "../../services/TagService";

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    run: false,
    test: "",
    progress: "",
    tags: []
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //set test
  const setTest = (testCase) => {
    dispatch({
      type: SET_TESTS,
      payload: testCase
    });
  };

  //set run
  const setRun = (value) => {
    dispatch({
      type: SET_RUN,
      payload: value
    });
  };

  //set progress
  const setProgress = (value) => {
    dispatch({
      type: SET_PROGRESS,
      payload: value
    });
  };

  async function setTags() {
    const res = await TagService.getTags();
    console.log(res);
    console.log("get tags response", res);
    // setCurrentPost.tags(res);
    dispatch({
      type: SET_TAGS,
      payload: res
    });
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        run: state.run,
        test: state.test,
        progress: state.progress,
        tags: state.tags,
        setTest,
        setRun,
        setProgress,
        setTags
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
