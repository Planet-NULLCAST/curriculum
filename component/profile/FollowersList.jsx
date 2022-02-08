import React, { useState } from "react";

let id = 1;
export default function FollowersList({followDetails , getFollowerList}) {

  const [pageNo , setPageNo] = useState(0)

  const shortName = (e) => {
    var matches = e.match(/\b(\w)/g);
    var acronym = matches.join("");
    return acronym.substring(0, 2);
  };

  const getNextFollowers = (e) => {
    let newPageNo = pageNo+1
    e.preventDefault()
      setPageNo(newPageNo)
      getFollowerList(newPageNo)
  }
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <span className="font-bold">Followers</span>
        {Number(followDetails?.followerscount) > followDetails?.followers.length && <a href="" className="underline text-sm font-semibold" onClick={(e) => getNextFollowers(e)}>
          View All
        </a>}
      </div>
      <div className="mt-4">
        {followDetails?.followers?.length ? followDetails?.followers.map((data) => (
          <div className="flex items-center py-2" key= {++id}>
            {data?.avatar ? (
              <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center text-white mr-3">
                <img
                  src={data?.avatar}
                  alt="img"
                  className="w-full h-full"
                ></img>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                {shortName(data?.user_name)}
              </div>
            )}
            <span className="text-sm font-semibold">{data?.user_name}</span>
          </div>
        )) : <div className="text-gray-400 text-sm text-center">
              No Followers
          </div>}
      </div>
    </div>
  );
}
