import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "./blogs.module.scss";

export default function Navbar(props) {
  const { currentNav } = props;

  const optionsCategory = [
    { label: "All Category", value: "all" },
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JavaScript", value: "js" },
    { label: "Angular", value: "angular" },
    { label: "React", value: "react" },
    { label: "NodeJS", value: "node" },
    { label: "Database", value: "database" },
    { label: "Python", value: "python" },
    { label: "Testing", value: "testing" }
  ];

  const optionsStatus = [
    { label: "All Posts", value: "all" },
    { label: "Approved", value: "js" },
    { label: "Pending", value: "html" },
    { label: "Rejected", value: "css" }
  ];

  return (
    <div className="bg-white my-3 flex flex-row items-center rounded shadow-sm">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full px-5">
        <div className="cursor-pointer h-16 flex justify-center items-center relative">
          <span className="mt-1 text-gray-900">My Post</span>
          <div className="border border-b-4 border-gray-900 absolute bottom-0 left-0 w-full"></div>
        </div>
        <div className="flex items-center py-3">
          <Select
            options={optionsCategory}
            isMulti={false}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${styles.min_w_10rem}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Category"
            // closeMenuOnSelect={false}
          />
          <Select
            options={optionsStatus}
            isMulti={false}
            className={`basic-multi-select postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${styles.min_w_5rem}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Blog Status"
            // closeMenuOnSelect={false}
          />
          <Link href="/posts/write">
            <div
              className={`bg-black h-8 hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700 ${styles.h_40px}`}
            >
              <p>Add a New Post</p>
            </div>
          </Link>
          {/* <div className="bg-gray-200 h-8 flex border border-gray-200 items-center text-sm font-semibold px-3 py-2 mr-4 rounded-sm">
            <p>Category</p>
            <img src="/images/arrowDown.svg" className="ml-2"></img>
          </div>
          <div className="bg-gray-200 h-8 flex border border-gray-200 items-center text-sm font-semibold px-3 py-2 mr-4 rounded-sm">
            <p>Blog Status</p>
            <img src="/images/arrowDown.svg" className="ml-2"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}
