import React, { useContext, useEffect } from "react";
import UserContext from "../../../context/user/userContext";

function Output() {
  const userState = useContext(UserContext);
  // console.log(userState);
  let { test, run } = userState;
  // console.log(test);

  return (
    <div
      className="flex flex-col items-center p-2 bg-gray-50 text-gray-700"
      style={{ height: "calc(100vh - 104px)", overflowY: "scroll" }}
    >
      <h1 className="text-sm tracking-wider font-medium uppercase py-3">
        Results
      </h1>
      <div className="py-2 px-3 w-full">
        {run &&
          test.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-200 my-1 shadow-lg flex flex-row items-center w-full"
              style={{ minHeight: "4rem" }}
            >
              {t.isCorrect ? (
                <img
                  src="/images/checkmark.svg"
                  alt="check mark"
                  className="h-6 pl-4"
                />
              ) : (
                <img
                  src="/images/crossmark.svg"
                  alt="cross mark"
                  className="h-6 pl-4"
                />
              )}

              <div className="w-3/4 ml-5">{t.hint}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Output;
