import React from "react";

export default function FollowersList() {
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
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <span className="font-bold">Followers</span>
        <a href="" className="underline text-sm font-semibold">
          View All
        </a>
      </div>
      <div className="mt-4">
        {followers?.map((data) => (
          <div className="flex items-center py-2" key={data.name + data.image}>
            {data?.image ? (
              <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center text-white mr-3">
                <img
                  src={data?.image}
                  alt="img"
                  className="w-full h-full"
                ></img>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                {shortName(data?.name)}
              </div>
            )}
            <span className="text-sm font-semibold">{data?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
