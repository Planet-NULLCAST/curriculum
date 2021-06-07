import React, { useRef, useEffect, useState } from "react";

export default function Navbar(props) {
  const { currentNav } = props;
  return (
    <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm max-w-panel">
      <ul className="flex flex-row justify-start items-center font-semibold h-full">
        <li
          className={`mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center ${
            currentNav === "profile" ? "border-gray-600" : "border-white"
          }`}
          onClick={() => props.changeNav("profile")}
        >
          <span
            className={`mt-1 ${
              currentNav === "profile" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Profile
          </span>
        </li>
        <li
          className={`mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center ${
            currentNav === "store" ? "border-gray-600" : "border-white"
          }`}
          onClick={() => props.changeNav("store")}
        >
          <span
            className={`mt-1 ${
              currentNav === "store" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            My Store
          </span>
        </li>
        <li
          className={`mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center ${
            currentNav === "achievement" ? "border-gray-600" : "border-white"
          }`}
          onClick={() => props.changeNav("achievement")}
        >
          <span
            className={`mt-1 ${
              currentNav === "achievement" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Achievements
          </span>
        </li>
      </ul>
    </div>
  );
}
