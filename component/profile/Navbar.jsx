import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm">
      <ul className="flex flex-row justify-start items-center font-semibold h-full">
        <li className="mx-4 cursor-pointer border-b-4 border-gray-600 h-full flex justify-center items-center">
          <span className="mt-1 text-gray-600">Profile</span>
        </li>
        <li className="mx-4 cursor-pointer border-b-4 border-white h-full flex justify-center items-center">
          <span className="mt-1 text-gray-400">My Store</span>
        </li>
        <li className="mx-4 cursor-pointer border-b-4 border-white h-full flex justify-center items-center">
          <span className="mt-1 text-gray-400">Achievements</span>
        </li>
      </ul>
    </div>
  );
}
