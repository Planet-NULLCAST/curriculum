import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "../myblogs/blogs.module.scss";
import TagService from "../../services/TagService";
import notify from "../../lib/notify";
import { useRouter } from "next/router";

export default function AdminNavbar({ changeTag, changeStatus, event }) {
  const statusOptions = [
    { label: event ? "ALL EVENTS" : "ALL POSTS", value: "" },
    // { label: "APPROVED", value: "approved" },
    { label: "PENDING", value: "pending" },
    { label: "REJECTED", value: "rejected" },
    { label: "PUBLISHED", value: "published" },
    { label: "DRAFTED", value: "drafted" }
  ];
  const [tagOptions, setTagOptions] = useState([]);

  const router = useRouter();

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
      resTagOptions = res.map((tag) => {
        return {
          label: `${tag.name.toUpperCase()}`,
          value: `${tag.name}`
        };
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
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
  const selectCategory = (e) => changeTag(e.value);

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
          {event ? (
            " "
          ) : (
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
          )}
          {event ? (
            ""
          ) : (
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
          )}
          {router.pathname.split("/")[2] === "events" && (
            <div className="bg-black h-8 ml-4 hover:bg-white border border-black text-white hover:text-black hidden md:flex items-center text-sm font-semibold px-4 py-2 md:mr-3 rounded-sm cursor-pointer duration-700 blogs_h_40px__3sE3c">
              <a href="/admin/events/create-event">Create Event</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
