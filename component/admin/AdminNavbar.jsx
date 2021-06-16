import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "../myblogs/blogs.module.scss";

export default function AdminNavbar({changeCategory , changeStatus}) {


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
const selectCategory = (e)=>{

  changeCategory(e.value)
  
}
const selectStatus = (e)=>{

  changeStatus(e.value)
}


  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-end items-center font-semibold h-full w-full md:px-5 px-3">
        <div className="flex items-center py-3">
          <Select
            options={optionsCategory}
            isMulti={false}
            onChange={(e)=>selectCategory(e)}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer md:mr-4 ${styles.min_w_10}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Category"
            // closeMenuOnSelect={false}
          />
          <Select
            options={optionsStatus}
            isMulti={false}
            onChange={(e)=>selectStatus(e)}
            className={`basic-single postFilter md:block hidden m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer  ${styles.min_w_10}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Blog Status"
            // closeMenuOnSelect={false}
          />
        </div>
      </div>
    </div>
  );
}
