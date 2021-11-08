import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "../myblogs/blogs.module.scss";
import TagService from "../../services/TagService";
import notify from "../../lib/notify";

export default function AdminNavbar({ changeCategory, changeStatus }) {
  const statusOptions = [
    { label: "ALL POSTS", value: "" },
    // { label: "APPROVED", value: "approved" },
    { label: "PENDING", value: "pending" },
    { label: "REJECTED", value: "rejected" },
    { label: "PUBLISHED", value: "published" }
  ];
  const [tagOptions, setTagOptions] = useState([]);

  useEffect(() => {
    getSettingsTags();
  }, []);

  /**
   * gets tags from db and sets the tags
   * options in label and value format
   * @author athulraj2002
   */
  async function getSettingsTags() {
    let resTagOptions = [];
    try {
      const res = await TagService.getTags();
      // console.log("get tags response", res);
      if (res && res.length) {
         resTagOptions = res.data.map((tag) => {
          return {
            label: `${tag.name.toUpperCase()}`,
            value: `${tag.name}`,
            id: `${tag.id}`,
          };
        });
      }
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }

    // setTagOptions;
    const allOption = {
      label: "ALL TAGS",
      value: ""
    };
    resTagOptions = [allOption, ...resTagOptions];
    // console.log({ resTagOptions });
    setTagOptions(resTagOptions);
  }

  /**
   * Prop Function called when new category is choosen
   * @param {*} e new category
   * @returns new category
   * @author athulraj2002
   */
  const selectCategory = (e) => changeCategory(e.value);

  /**
   * Prop Function called when new status is choosen
   * @param {*} e new status
   * @returns new category
   * @author athulraj2002
   */
  const selectStatus = (e) => changeStatus(e.value);

  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-end items-center font-semibold h-full w-full md:px-5 px-3">
        <div className="flex items-center py-3">
          <Select
            options={tagOptions}
            isMulti={false}
            onChange={(e) => selectCategory(e)}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer md:mr-4 ${styles.min_w_10}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Select Tag"
            // closeMenuOnSelect={false}
          />
          <Select
            options={statusOptions}
            isMulti={false}
            onChange={(e) => selectStatus(e)}
            className={`basic-single postFilter md:block hidden m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer  ${styles.min_w_10}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Select Status"
            // closeMenuOnSelect={false}
          />
        </div>
      </div>
    </div>
  );
}
