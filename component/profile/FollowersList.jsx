import React from "react";

let id = 1;
export default function FollowersList({followDetails}) {
  const followers = [
    {
      name: "Liam Olivia Anna",
      image: "/images/pic1.png"
    },
    {
      name: "Noah Emma",
      image: "/images/pic2.png"
    },
    {
      name: "Oliver Ava",
      image: "/images/pic1.png"
    },
    {
      name: "William Sophia",
      image: ""
    },
    {
      name: "James Charlotte",
      image: "/images/pic1.png"
    },
    {
      name: "Benjamin Amel",
      image: ""
    },
    {
      name: "William Sophi",
      image: "/images/pic2.png"
    },
    {
      name: "James Charlotte",
      image: ""
    },
    {
      name: "Benjamin Amelia",
      image: ""
    },
    {
      name: "Oliver Eva",
      image: "/images/pic1.png"
    }
  ];
  const shortName = (e) => {
    var matches = e.match(/\b(\w)/g);
    var acronym = matches.join("");
    return acronym.substring(0, 2);
  };
  console.log(followDetails)
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <span className="font-bold">Followers</span>
       {Number(followDetails?.followerscount) > followDetails?.followers.length && <a href="" className="underline text-sm font-semibold">
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
