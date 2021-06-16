import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "./blogs.module.scss";
import tagOptions from "../../utils/tags";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";

export default function Navbar(props) {
  const { currentNav, getPosts } = props;
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");

  const statusOptions = [
    { label: "All Posts", value: "" },
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
    { label: "Rejected", value: "rejected" },
    { label: "Published", value: "published" },
    { label: "Drafted", value: "drafted" }
  ];

  function handleTagSelect(e) {
    // console.log(e);
    // const tag = e.value;
    // console.log(tag);
    setTag(e.value);
    const newReqData = {
      pageNo: 1,
      limit: 10,
      tag: e.value,
      status: status
    };
    // call getallposts
    getPosts(newReqData);
  }

  function handleStatusSelect(e) {
    // console.log(e);
    const status = e.value;
    // console.log(status);
    setStatus(status);
    const newReqData = {
      pageNo: 1,
      limit: 10,
      tag: tag,
      status: status
    };
    // call getallposts
    getPosts(newReqData);
  }

  async function createPost(createThisPost) {
    try {
      const { data } = await PostService.createPost(userCookie, createThisPost);
      const { post, msg } = data;
      // notify(msg);
      // console.log(post, msg);
      //TO DO: compare our user id and the posts's user id
      // setPostId(post._id);
      router.push({
        pathname: "/posts/write",
        query: { post_id: post._id }
      });
      // getPostById(post._id);
    } catch (err) {
      console.log(err);
    }
  }

  function handleAddNewPost() {
    const newPost = {
      title: "[Untitled]",
      mobiledoc: {
        version: "0.3.1",
        atoms: [],
        cards: [],
        markups: [],
        sections: [],
        ghostVersion: "4.0"
      }
    };
    createPost(newPost);
  }

  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full md:px-5 px-3">
        <div className="cursor-pointer h-16 flex justify-center items-center relative">
          <span className="mt-1 text-gray-900">My Post</span>
          <div className="border border-b-4 border-gray-900 absolute bottom-0 left-0 w-full"></div>
        </div>
        <div className="flex items-center py-3">
          <Select
            options={tagOptions}
            isMulti={false}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer md:mr-4 ${styles.min_w_10}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Category"
            onChange={handleTagSelect}
          />
          <Select
            options={statusOptions}
            isMulti={false}
            className={`basic-single postFilter md:block hidden m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${styles.min_w_10}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Blog Status"
            onChange={handleStatusSelect}
          />
          {/* Add a New Post goes to /posts/write  */}
          {/* <Link href="/posts/write">
            <div
              className={`bg-black h-8 hover:bg-white border border-black text-white hover:text-black hidden md:flex items-center text-sm font-semibold px-4 py-2 md:mr-3 rounded-sm cursor-pointer duration-700 ${styles.h_40px}`}
            >
              <p>Add a New Post</p>
            </div>
          </Link> */}

          <div
            onClick={handleAddNewPost}
            className={`bg-black h-8 hover:bg-white border border-black text-white hover:text-black hidden md:flex items-center text-sm font-semibold px-4 py-2 md:mr-3 rounded-sm cursor-pointer duration-700 ${styles.h_40px}`}
          >
            <p>Add a New Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}
