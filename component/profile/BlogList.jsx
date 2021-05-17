import React from "react";
import moment from "moment";
import Profilestyles from "../../styles/Profile.module.css";

export default function Activity() {
  const blogs = [
    {
      name: "Null Safety in Flutter",
      image: "",
      date: "2021-05-04T03:59:48.157Z"
    },
    {
      name: "Active Tab Animation using HTML, CSS and JS",
      image: "/images/dummy_Blog4.png",
      date: "2021-05-04T03:59:48.157Z"
    },
    {
      name: "All you need to know about Supabase",
      image: "/images/dummy_Blog3.png",
      date: "2021-05-04T03:59:48.157Z"
    },
    {
      name: "Creative Search Bar and Input Field Design Inspiration",
      image: "/images/dummy_Blog2.png",
      date: "2021-05-04T03:59:48.157Z"
    },
    {
      name: "Introduction to Rapid HTML Development using Tailwind CSS",
      image: "/images/dummy_Blog3.png",
      date: "2021-05-04T03:59:48.157Z"
    }
  ];
  return (
    <div className="bg-white shadow-sm rounded p-4 mt-4 h-72">
      <div className="flex justify-between items-center">
        <span className="font-bold">Blog</span>
        <a href="" className="underline text-sm font-semibold">
          View All
        </a>
      </div>
      <div className="flex items-start">
        {blogs?.map((data) => (
          <div className="flex items-start w-1/5 mt-3 justify-between pr-6">
            <div className="flex flex-col w-full">
              {data?.image ? (
                <div className="w-full h-32 overflow-hidden rounded-md flex items-center justify-center text-white">
                <img
                    src={data?.image}
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
                {moment(data?.date).format("LL")}
              </p>
              <p className={`multi-line-truncate font-bold underline text-sm cursor-pointer ${Profilestyles.a_green_210}`}>
                {data?.name}
              </p>
              {/* <p class="multi-line-truncate">With this paragraph, I will show you what a truncated text looks like. You might be surprised, but yh, it is what it is. How are you doing today, though?</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
