import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "../myblogs/blogs.module.scss";

export default function AdminNavbar(props) {
  const { currentNav } = props;

  //get tag data from db with same structure - and value should be the id
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
    { label: "All Posts", value: "" },
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
    { label: "Rejected", value: "rejected" },
    { label: "Published", value: "published" },
    //published, drafted
  ];

  // useEffect(() => {
  //   console.log(window.innerWidth, "innerwidth");
  // }, []);

  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full md:px-5 px-3">
        <div className="cursor-pointer h-16 flex justify-center items-center relative">
          {/* <span className="mt-1 text-gray-900">My Post</span> */}
          <div className="border border-b-4 border-gray-900 absolute bottom-0 left-0 w-full"></div>
        </div>
        <div className="flex items-center py-3">
          <Select
            options={optionsCategory}
            isMulti={false}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer md:mr-4 ${styles.min_w_10}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Category"
            // closeMenuOnSelect={false}
          />
          <Select
            options={optionsStatus}
            isMulti={false}
            className={`basic-single postFilter md:block hidden m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${styles.min_w_10}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Blog Status"
            // closeMenuOnSelect={false}
          />
          {/* Add a New Post goes to /posts/write  */}
          {/* <Link href="/posts/write">
            <div
              className={`bg-black h-8 hover:bg-white border border-black text-white hover:text-black hidden md:flex items-center text-sm font-semibold px-4 py-2 md:mr-3 rounded-sm cursor-pointer duration-700 ${styles.h_40px}`}
            >
              <p>Add a New Post</p>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
