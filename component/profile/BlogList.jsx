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
      </div>
      <div className="flex flex-wrap pb-2">
        {blogs?.length > 0 ? (
          <div className="">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                style={{ width: "24rem" }}
                className={`flex mt-3 justify-between mr-2`}
              >
                {blog.bannerImage ? (
                  <div className="w-40 h-32 rounded-md flex items-center justify-center text-white">
                    <img
                      src={blog.bannerImage}
                      alt="banner"
                      className="rounded-md w-40 h-32 object-cover"
                    ></img>
                  </div>
                ) : (
                  <div className="w-full h-32 rounded-md flex items-center justify-center text-white">
                    <img
                      src="/images/dummy_Blog.png"
                      alt="default"
                      className="rounded-md w-40 h-32 object-cover"
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
                  <p className="text-gray-600 font-semibold mt-3 mb-1 text-xs">
                    {moment(blog.publishedAt).format("LL")}
                  </p>
                </div>

                {/* <p className="multi-line-truncate">With this paragraph, I will show you what a truncated text looks like. You might be surprised, but yh, it is what it is. How are you doing today, though?</p> */}
              </div>
            ))}
            {blogs.length !== blogCount && (
              <button
                onClick={handleViewMore}
                className="underline text-sm font-semibold w-20"
              >
                View More
              </button>
            )}
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
