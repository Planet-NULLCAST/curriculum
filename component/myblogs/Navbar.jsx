import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import styles from "./blogs.module.scss";
// import tagOptions from "../../utils/tags";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import PostService from "../../services/PostService";
import TagService from "../../services/TagService";
import notify from "../../lib/notify";

export default function Navbar() {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  const [tag, setTag] = useState(null);
  const [status, setStatus] = useState(null);
  const [tagOptions, setTagOptions] = useState([]);
  const [addactive, setAddactive] = useState(true)
  const statusOptions = [
    { label: "ALL STATUS", value: "" },
    { label: "PENDING", value: "pending" },
    { label: "REJECTED", value: "rejected" },
    { label: "PUBLISHED", value: "published" },
    { label: "DRAFTED", value: "drafted" }
  ];

  useEffect(() => {
    getSettingsTags();
  }, []);

  useEffect(() => {
    setTag(router.query.tag);
    setStatus(router.query.status);
  }, [router.query.tag, router.query.status]);

  /**
   * gets tags from db and sets the tags
   * options in label and value format
   * @author akhilalekha
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

  const handleTagSelect = (e) => {
    const newTag = e.value;
    setTag(newTag);
    router.push({
      pathname: "/posts",
      query: { page: 1, tag: newTag, status: status }
    });
  };

  const handleStatusSelect = (e) => {
    const newStatus = e.value;
    setStatus(newStatus);
    router.push({
      pathname: "/posts",
      query: { page: 1, tag: tag, status: newStatus }
    });
  };

  const createPost = async (createThisPost) => {
    try {
      const {
        data: { data: post, message }
      } = await PostService.createPost(createThisPost);
      // notify(message);

      if (post.created_by === Number(userCookie.id)) {
        setAddactive(true)
        router.push({
          pathname: "/posts/write",
          query: { post_id: post.id }
        });

      }
      notify(message, 'success')
    } catch (err) {
      setAddactive(true)
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  };

  const handleAddNewPost = () => {
    setAddactive(false)
    const newPost = {
      html: '',
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
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    router.push({
      pathname: "/posts",
      query: { search: e.target.search.value }
    });
  };

  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full md:px-5 px-3">
        <div className="cursor-pointer h-16 flex justify-center items-center relative">
          <span className="mt-1 text-gray-900">My Posts</span>
          <div className="border border-b-4 border-gray-900 absolute bottom-0 left-0 w-full"></div>

        </div>

        <div className="flex items-center py-3">
          <Select
            options={tagOptions}
            value={
              tag && {
                label: tag.toUpperCase(),
                value: tag
              }
            }
            isMulti={false}
            className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer md:mr-4 ${styles.min_w_10}`}
            classNamePrefix="Category"
            clearValue={() => undefined}
            placeholder="Select Tag"
            onChange={handleTagSelect}
            instanceId="select-tag"
          />
          <Select
            options={statusOptions}
            value={
              status && {
                label: status.toUpperCase(),
                value: status
              }
            }
            isMulti={false}
            className={`basic-single postFilter md:block hidden m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${styles.min_w_10}`}
            classNamePrefix="Blog Status"
            clearValue={() => undefined}
            placeholder="Select Status"
            onChange={handleStatusSelect}
            instanceId="select-status"
          />
          <div className="flex m-0 mr-4 border border-gray-400 rounded-lg p-2 items-center">
            <form onSubmit={handleSearch} className="bg-white">
              <input
                type="text"
                placeholder="Search for blogs"
                name="search"
              />
              <button >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 13"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.706 5.758L14.456.305a.975.975 0 00-1.42.004c-.392.41-.39 1.074.003 1.482l3.524 3.66H1.004C.45 5.452 0 5.922 0 6.5s.45 1.048 1.004 1.048h15.559l-3.524 3.66a1.081 1.081 0 00-.003 1.483.975.975 0 001.42.004l5.249-5.452a1.083 1.083 0 000-1.485z"
                    fill="#000"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Add a New Post creates a new post and goes to /posts/write/:postId  */}
          <div
            onClick={() => addactive && handleAddNewPost()}
            className={`bg-black h-8 hover:bg-white border border-black text-white hover:text-black hidden md:flex items-center text-sm font-semibold px-4 py-2 md:mr-3 rounded-sm cursor-pointer duration-700 ${styles.h_40px}`}
          >
            <p>Add a New Post</p>
          </div>

        </div>
      </div>
    </div>
  );
}
