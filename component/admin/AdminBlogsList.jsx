import moment from "moment";
import Cookies from "universal-cookie";
import MyBlogStyles from "../../styles/MyBlogs.module.css";
import Link from "next/link";
import Image from "next/image";
import PostService from "../../services/PostService";
import notify from "../../lib/notify";

export default function AdminBlogsList({ posts, updated }) {
  const cookies = new Cookies();
  // const userCookie = cookies.get("userNullcast");
  /**
   * Function to approve a blog
   * @param {*} blog
   * @author athulraj2002
   * @returns null
   *
   */
  async function updatePostById(updateData, newPostId) {
    try {
      const res = await PostService.adminReview(updateData, newPostId);
      if (res) {
        notify(res?.message);
      }
      updated();
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }

  const approveBlog = async (blog) => {
    try {
      const newUpdatedPost = {
        status: "published"
      };
      updatePostById(blog.id, newUpdatedPost);
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  };

  /**
   * Function to reject a blog
   * @param {*} blog
   * @author athulraj2002
   * @returns null
   */
  const rejectBlog = async (blog) => {
    try {
      const newUpdatedPost = {
        status: "rejected"
      };
      updatePostById(blog.id, newUpdatedPost);
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  };

  const unPublishBlog = async (blog) => {
    try {
      const newUpdatedPost = {
        status: "pending"
      };
      updatePostById(blog.id, newUpdatedPost);
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
    // console.log(response);
  };
  return (
    <div
      className={`w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list`}
    >
      <div className="w-full">
        {posts &&
          posts.map((item) => (
            <div className={`${MyBlogStyles.oddBg} w-full`} key={item.id}>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-between p-4`}
              >
                <div className="">
                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: `${item.id}` }
                    }}
                    className={`text-15 font-semibold mb-1 ${MyBlogStyles.color_blue_910}`}
                  >
                    <a
                      target="_blank"
                      className={`text-gray-900 text-xl hover:text-purple-600 font-semibold ${MyBlogStyles.min_w_25rem}`}
                    >
                      {item.title}
                    </a>
                  </Link>
                  <div className={`text-xs text-gray-400 pt-2`}>
                    {moment(item.updated_at).format("LL")}
                    {" - "}
                    <Link href={`/u/${item.user.user_name}`}>
                      <a className="text-blue-500">{item.user.user_name}</a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className={`flex items-center w-32 justify-center rounded-full h-8 mr-3 ${
                      item.status === "approved" && MyBlogsstyles.successBg
                    } ${item.status === "pending" && MyBlogStyles.warningBg} ${
                      item.status === "drafted" && MyBlogStyles.draftedBg
                    } ${
                      item.status === "published" && MyBlogStyles.publishedBg
                    } ${item.status === "rejected" && MyBlogStyles.dangerBg}`}
                  >
                    <span
                      className={`capitalize  ${
                        item.status === "approved" && MyBlogStyles.successText
                      } ${
                        item.status === "pending" && MyBlogStyles.warningText
                      } ${
                        item.status === "drafted" && MyBlogStyles.draftedText
                      } ${
                        item.status === "published" &&
                        MyBlogStyles.publishedText
                      } ${
                        item.status === "rejected" && MyBlogStyles.dangerText
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <Link
                    href={
                      item.status === "published"
                        ? `/${item.slug}`
                        : `/p/${item.id}`
                    }
                  >
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
                          {item.status === "published" ? "View" : "Preview"}
                        </span>
                      </>
                    </div>
                  </Link>

                  {item.status == "published" ? (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3  ${MyBlogStyles.publishedBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.publishedText} `}
                      >
                        Published
                      </span>
                    </div>
                  ) : item.status == "rejected" ? (
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
                        onClick={() => rejectBlog(item)}
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
                        onClick={() => approveBlog(item)}
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
                  {item.status == "published" && (
                    <div
                      onClick={() => unPublishBlog(item)}
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.warningBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogStyles.warningText} `}
                      >
                        Unpublish
                      </span>
                    </div>
                  )}
                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: `${item.id}` }
                    }}
                  >
                    <a target="_blank">
                      <div
                        className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-500 ${MyBlogStyles.linkBg}`}
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
                          className={`capitalize  ${MyBlogStyles.linkText}`}
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
