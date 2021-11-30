import React, { useState, useEffect } from "react";
import moment from "moment";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";
import Link from "next/link";
import Cookies from "universal-cookie";
import ModalConfirm from "../../component/popup/ModalConfirm";
import notify from "../../lib/notify";
import PostService from "../../services/PostService";
import Image from "next/image";

export default function MyBlogs({ posts, fetchPosts }) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  async function deletePost(postId) {
    try {
      const { message } = await PostService.deletePostById(
        userCookie,
        postId
      );
      notify(message);
      fetchPosts();
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  }
  // console.log('deletePost' ,postId);

  return (
    <div
      className={`w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list`}
    >
      <div className="w-full">
        {posts &&
          posts.map((item) => (
            <div className={`${MyBlogsstyles.oddBg} w-full`} key={item.post_id}>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-between p-4`}
              >
                <div className="">
                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: item.post_id }
                    }}
                    className={`text-15 font-semibold mb-1 ${MyBlogsstyles.color_blue_910}`}
                  >
                    <a
                      target="_blank"
                      className={`text-gray-900 text-xl hover:text-purple-600 font-semibold ${MyBlogsstyles.min_w_25rem}`}
                    >
                      {item.title}
                    </a>
                  </Link>
                  <div className={`text-xs text-gray-400`}>
                    {moment(item.created_at).format("LL")}
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`flex items-center w-32 justify-center rounded-full h-8 mr-3 ${item.status === "approved" && MyBlogsstyles.successBg
                      } ${item.status === "pending" && MyBlogsstyles.warningBg} ${item.status === "drafted" && MyBlogsstyles.draftedBg
                      } ${item.status === "published" && MyBlogsstyles.publishedBg
                      } ${item.status === "rejected" && MyBlogsstyles.dangerBg}`}
                  >
                    <div
                      className={`w-2 h-2 mr-2 rounded-full  ${item.status === "approved" && MyBlogsstyles.successDot
                        } ${item.status === "pending" && MyBlogsstyles.warningDot
                        } ${item.status === "drafted" && MyBlogsstyles.draftedDot
                        } ${item.status === "published" &&
                        MyBlogsstyles.publishedDot
                        } ${item.status === "rejected" && MyBlogsstyles.dangerDot
                        }`}
                    ></div>
                    <span
                      className={`capitalize  ${item.status === "approved" && MyBlogsstyles.successText
                        } ${item.status === "pending" && MyBlogsstyles.warningText
                        } ${item.status === "drafted" && MyBlogsstyles.draftedText
                        } ${item.status === "published" &&
                        MyBlogsstyles.publishedText
                        } ${item.status === "rejected" && MyBlogsstyles.dangerText
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div
                    className="w-28 flex justify-center">
                    <ModalConfirm
                      trigger={
                        <div
                          className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-500 ${MyBlogsstyles.dangerText} ${MyBlogsstyles.dangerBg}`}
                        >
                          Delete
                        </div>
                      }
                      handleSubmit={() => deletePost(item.post_id)}
                      purpose={"delete"}
                      buttonColor={"red"}
                      heading={"Are you sure"}
                      text="Are you sure you want to delete this post?"
                      secondaryText="This cannot be undone"
                    />
                  </div>
                  {/* EDIT button goes to posts/write route*/}
                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: item.post_id }
                    }}
                  >
                    <a target="_blank">
                      <div
                        className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-500 ${MyBlogsstyles.linkBg}`}
                      >
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
                        <span
                          className={`capitalize  ${MyBlogsstyles.linkText}`}
                        >
                          Edit
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
