import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const { currentNav } = props;
  return (
    <div className="bg-white my-3 flex flex-row items-center rounded shadow-sm">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full px-5">
        <div className="cursor-pointer h-16 flex justify-center items-center relative">
          <span className="mt-1 text-gray-900">My Post</span>
          <div className="border border-b-4 border-gray-900 absolute bottom-0 left-0 w-full"></div>
        </div>
        <div className="flex items-center py-3">
          <div className="bg-gray-200 flex border border-gray-200 items-center text-sm font-semibold px-3 py-2 mr-4 rounded-sm">
            <p>Category</p>
            <img src="/images/arrowDown.svg" className="ml-2"></img>
          </div>
          <div className="bg-gray-200 flex border border-gray-200 items-center text-sm font-semibold px-3 py-2 mr-4 rounded-sm">
            <p>Blog Status</p>
            <img src="/images/arrowDown.svg" className="ml-2"></img>
          </div>
          <Link href="/myblogs/write">
            <div className="bg-black hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700">
              <p>Add a New Post</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
