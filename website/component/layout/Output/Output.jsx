import React, { useContext } from "react";
import UserContext from "../../../context/user/userContext";

function Output() {
  const userState = useContext(UserContext);
  // console.log(userState);
  const { test } = userState;
  // console.log(test);

  return (
    <div className="flex flex-col items-center m-2">
      <h1>Results</h1>
      {test.map((t) => (
        <div
          key={t.id}
          className="text-black bg-gray-200 border-2 border-gray-800 rounded-md m-2 w-full flex flex-row items-center"
          style={{ minHeight: "3rem" }}
        >
          <div className="h-7 w-7 bg-white rounded-full ml-3"></div>

          {t.isCorrect ? (
            <svg
              aria-hidden="true"
              focusable="true"
              className="h-7 text-black ml-3 z-10 relative right-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
              ></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              focusable="true"
              className="h-7 text-black ml-3 z-10 relative right-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
              ></path>
            </svg>
          )}

          <div className="w-3/4 relative -left-6">{t.hint}</div>
        </div>
      ))}
    </div>
  );
}

export default Output;
