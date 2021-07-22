import React, { useEffect, useState } from "react";
import moment from "moment";
import Profilestyles from "../../styles/Profile.module.css";
import Link from "next/link";

export default function BlogList({ blogs, getNewPostsWithCount, blogCount }) {
  const [count, setCount] = useState(0);

  const handleViewMore = () => {
    let newCount = count + 1;
    setCount(newCount);
    getNewPostsWithCount(newCount);
  };

  return (
    <div className={`bg-white shadow-sm rounded p-4 mt-4 `}>
      <div className="flex justify-between items-center">
        <span className="font-bold">Blog</span>
        {/* {blogs?.length > 0 && (
          <Link href="/blog">
            <a className="underline text-sm font-semibold">View All</a>
          </Link>
        )} */}
        {blogs.length !== blogCount && (
          <button
            onClick={handleViewMore}
            className="underline text-sm font-semibold w-20 hover:text-green-800"
          >
            View All
          </button>
        )}
      </div>
      <div className="flex flex-wrap pb-2">
        {blogs?.length > 0 ? (
          <div className="flex flex-wrap">
            {blogs.map((blog, index) => (
              <div
                className={`flex flex-wrap w-1/2 mt-4 ${
                  index % 2 === 0 ? "pr-2" : "pl-2"
                }`}
              >
                <div
                  key={blog._id}
                  // style={{ width: "24rem" }}
                  className={`flex justify-between rounded border p-3 w-full`}
                >
                  {blog.bannerImage ? (
                    <div className="w-32 h-32 rounded-md flex items-center justify-center text-white">
                      <img
                        src={blog.bannerImage}
                        alt="banner"
                        className="rounded-md w-32 h-32 object-cover"
                      ></img>
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-md flex items-center justify-center text-white">
                      <img
                        src="/images/dummy_Blog.png"
                        alt="default"
                        className="rounded-md w-32 h-32 object-cover"
                      ></img>
                    </div>
                  )}
                  <div className="flex flex-col mx-4 w-60">
                    <Link href={`/${blog.slug}`}>
                      <a
                        className={`multi-line-truncate font-bold underline text-lg cursor-pointer ${Profilestyles.a_green_210}`}
                      >
                        {blog.title}
                      </a>
                    </Link>
                    <div className="flex justify-between w-full items-center">
                      <div className="flex items-center">
                        {/* <img src="/images/like.svg" alt="" />
                        <p className="text-xs">123</p> */}
                      </div>
                      <p className="text-gray-600 font-semibold mt-3 mb-1 text-xs">
                        {moment(blog.publishedAt).format("LL")}
                      </p>
                    </div>
                  </div>

                  {/* <p className="multi-line-truncate">With this paragraph, I will show you what a truncated text looks like. You might be surprised, but yh, it is what it is. How are you doing today, though?</p> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="w-full h-12 flex justify-start items-center">
              <span className="text-gray-400 text-sm">
                Currently, you don't have any published blogs
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
