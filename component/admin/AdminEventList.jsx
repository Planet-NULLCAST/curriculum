import React, { useEffect } from "react";
import moment from "moment";
import notify from "../../lib/notify";
import Image from "next/image";
import EventService from "../../services/EventService";
import MyBlogStyles from "../../styles/MyBlogs.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
function AdminEventList({ eventData, refresh }) {
  const router = useRouter();

  const adminEventStatus = async (eventId, type) => {
    try {
      const newUpdatedEvent = {
        status: type
      };
      const response = await EventService.adminReviewEvent(
        eventId,
        newUpdatedEvent
      );
      if (response) {
        refresh();
      }
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  };

  async function deletevents(eventid) {
    try {
      const data = await EventService.deleteEvent(eventid);
      notify(data.message);
      refresh();
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }
  const editevent = (id) => {
    router.push({
      pathname: "events/create-event",
      query: {
        "id": id
      }
    });
  };
  return (
    <div>
      <div className="w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list">
        {eventData?.events &&
          eventData.events.map((obj, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between items-center py-4 px-4 ${MyBlogStyles.oddBg}`}
              >
                <div>
                  <div className="text-gray-900 text-xl hover:text-purple-600 font-semibold ">
                    <Link href={`/admin/events/${obj.id}`}>{obj.title}</Link>
                  </div>
                  <div className="flex items-center pt-1 text-xs ">
                    <div className={`text-gray-400 `}>
                      {moment(obj.event_time).format("LL")} -{" "}
                    </div>
                    <div className={`text-blue-500`}>{obj.guest_name}</div>
                  </div>
                </div>
                <div className="flex ">
                  <Link href={`/e/${obj.slug}`}>
                    <a target="_blank">
                      <div
                        className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer  ${MyBlogStyles.draftedBg}`}
                      >
                        <>
                          <div
                            className={`w-2 h-2 mr-2 rounded-full  ${MyBlogStyles.draftedDot}`}
                          ></div>

                          <span
                            className={`capitalize  ${MyBlogStyles.draftedText} `}
                          >
                            {obj.status === "published" ? "View" : "Preview"}
                          </span>
                        </>
                      </div>
                    </a>
                  </Link>

                  {obj.status == "published" ? (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3  ${MyBlogStyles.publishedBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.publishedText} `}
                      >
                        Published
                      </span>
                    </div>
                  ) : obj.status == "rejected" ? (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 
                 ${MyBlogStyles.dangerBg}`}
                    >
                      <span
                        className={`capitalize  ${MyBlogStyles.dangerText}`}
                      >
                        Rejected
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div
                        onClick={() => adminEventStatus(obj.id, "rejected")}
                        className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500
                     ${MyBlogStyles.dangerBg}`}
                      >
                        <span
                          className={`capitalize  ${MyBlogStyles.dangerText}`}
                        >
                          Reject
                        </span>
                      </div>
                      <div
                        onClick={() => adminEventStatus(obj.id, "published")}
                        className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.successBg} `}
                      >
                        <span
                          className={`capitalize ${MyBlogStyles.successText} `}
                        >
                          Publish
                        </span>
                      </div>
                    </div>
                  )}
                  {obj.status == "published" && (
                    <div
                      onClick={() => adminEventStatus(obj.id, "pending")}
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.warningBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.warningText} `}
                      >
                        Unpublish
                      </span>
                    </div>
                  )}
                  {/* {obj.status === "published" && (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3  ${MyBlogStyles.publishedBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.publishedText} `}
                      >
                        Published
                      </span>
                    </div>
                  )} */}
                  <div
                    onClick={() => deletevents(obj.id)}
                    className={`flex items-center w-28 justify-center hover:opacity-50 duration-500 cursor-pointer rounded-full h-8 mr-3 
                 ${MyBlogStyles.dangerBg}`}
                  >
                    <span className={`capitalize  ${MyBlogStyles.dangerText}`}>
                      Delete
                    </span>
                  </div>
                  <div
                    onClick={() => editevent(obj.id)}
                    className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.linkBg}`}
                  >
                    <div className="mr-1 mt-1 rounded-full"></div>
                    <div className="mr-1 mt-1 rounded-full">
                      <Image
                        src="/images/edit.svg"
                        alt="edit"
                        width={15}
                        height={15}
                        layout="fixed"
                        margin={0}
                      />
                    </div>
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
