import React from "react";

export default function InfoPopup({ togglePopup }) {
  return (
    <div className="flex justify-center items-center flex-col my-4 px-8 w-96">
      <div className="text-center">
        <h2 className="py-3 my-3 font-bold  text-24"> Awesome! 🎉</h2>
        You have submitted your post for review in Nullcast. Our review team
        will publish the content after reviewing it. Keep posting content like
        this!
      </div>

      <div
        onClick={togglePopup}
        onKeyDown={togglePopup}
        className="cursor-pointer text-center border border-black px-6 m-4 rounded-sm hover:bg-black hover:text-white text-sm py-1 transition duration-500"
      >
        Close
      </div>
    </div>
  );
}
