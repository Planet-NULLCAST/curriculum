import React from "react";
import Profilestyles from "../../styles/Profile.module.css";

export default function Count(props) {
  // console.log(props);
  const counts = {
    blogs: `${props.blogCount}`,
    followers: 0,
    following: 0
  };
  return (
    <div
      className={`flex flex-row justify-between w-full rounded-md h-20 p-3 ${Profilestyles.bg_red_110}`}
    >
      <div className="flex flex-col items-center justify-center px-0 w-1/3 border-r border-red-200">
        <p className="text-center font-bold text-base">{counts.blogs}</p>
        <div className="text-center w-full text-sm">Blogs</div>
      </div>
      {/* <div className="border-r h-full border-red-200"></div> */}
      <div className="flex flex-col items-center justify-center px-0 w-1/3 border-r border-red-200">
        <p className="text-center font-bold text-base">{counts.followers}</p>
        <div className="text-center w-full text-sm">Followers</div>
      </div>
      {/* <div className="border-r h-full border-red-200"></div> */}
      <div className="flex flex-col items-center justify-center px-0 w-1/3">
        <p className="text-center font-bold text-base">{counts.following}</p>
        <div className="text-center w-full text-sm">Following</div>
      </div>
    </div>
  );
}
