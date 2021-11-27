import React from "react";
import moment from "moment";
import image from "next/image";
import MyBlogStyles from "../../styles/MyBlogs.module.css";
function AdminEventList(props) {
  const events = props.events;
  return (
    <div>
      <div className="w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list">
        {events &&
          events.map((obj) => {
            return (
              <div className="flex justify-between items-center bg-white py-2 px-4">
                <div>
                  <div className="text-gray-900 text-xl hover:text-purple-600 font-semibold ">
                    {obj.guest_name}
                  </div>
                  <div>{moment(obj.event_time).format("LL")}</div>
                </div>
                <div className="flex ">
                  {obj.status === "published" && (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3  ${MyBlogStyles.publishedBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.publishedText} `}
                      >
                        Published
                      </span>
                    </div>
                  )}
                  <div
                    className={`flex items-center w-28 justify-center hover:opacity-50 duration-500 cursor-pointer rounded-full h-8 mr-3 
                 ${MyBlogStyles.dangerBg}`}
                  >
                    <span className={`capitalize  ${MyBlogStyles.dangerText}`}>
                      Delete
                    </span>
                  </div>
                  <div
                    className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.linkBg}`}
                  >
                    <div className="mr-1 mt-1 rounded-full"></div>
                    <span className={`capitalize  ${MyBlogStyles.linkText}`}>
                      Edit
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AdminEventList;
