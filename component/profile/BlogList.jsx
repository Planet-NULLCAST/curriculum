import React from "react";
import moment from "moment";
import Profilestyles from "../../styles/Profile.module.css";
import Link from "next/link";

export default function BlogList({ blogs }) {
  return (
    <div className={`bg-white shadow-sm rounded p-4 mt-4 ${blogs?.length > 0 ? 'h-72' : 'h-28'}`}>
      <div className="flex justify-between items-center">
        <span className="font-bold">Blog</span>
        {blogs?.length > 0 && (
          <Link href="/blog">
            <a className="underline text-sm font-semibold">View All</a>
          </Link>
        )}
      </div>
      <div className="flex items-start w-full overflow-x-auto pb-2">
        {blogs?.length > 0 ? (
          <>
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className={`flex items-start w-1/5 mt-3 justify-between pr-6 ${Profilestyles.min_w_9}`}
              >
                <div className="flex flex-col w-full">
                  {blog?.bannerImage ? (
                    <div className="w-full h-32 overflow-hidden rounded-md flex items-center justify-center text-white">
                      <img
                        src={blog.bannerImage}
                        alt="img"
                        className="rounded-md w-full"
                      ></img>
                    </div>
                  ) : (
                    <div className="w-full h-32 overflow-hidden rounded-md flex items-center justify-center text-white">
                      <img
                        src="/images/dummy_Blog.png"
                        alt="default"
                        className="rounded-md w-full"
                      ></img>
                    </div>
                  )}
                  <p className="text-gray-600 font-semibold mt-3 mb-1 text-xs">
                    {moment(blog.publishedAt).format("LL")}
                  </p>
                  <Link href={`/${blog.slug}`}>
                    <a
                      className={`multi-line-truncate font-bold underline text-sm cursor-pointer ${Profilestyles.a_green_210}`}
                    >
                      {blog.title}
                    </a>
                  </Link>
                  {/* <p className="multi-line-truncate">With this paragraph, I will show you what a truncated text looks like. You might be surprised, but yh, it is what it is. How are you doing today, though?</p> */}
                </div>
              </div>
            ))}
          </>
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
