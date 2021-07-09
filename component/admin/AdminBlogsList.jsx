import moment from "moment";
import Cookies from "universal-cookie";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";
import Link from "next/link";
import Image from "next/image";
import PostService from "../../services/PostService";

export default function AdminBlogsList({ posts, updated }) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  /**
   * Function to approve a blog
   * @param {*} blog
   * @author athulraj2002
   * @returns null
   */
  const approveBlog = async (blog) => {
    const response = await PostService.adminChangePostStatus(
      userCookie,
      blog._id,
      "published"
    );
    updated();
  };

  /**
   * Function to reject a blog
   * @param {*} blog
   * @author athulraj2002
   * @returns null
   */
  const rejectBlog = async (blog) => {
    const response = await PostService.adminChangePostStatus(
      userCookie,
      blog._id,
      "rejected"
    );
    updated();
  };
  return (
    <div
      className={`w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list`}
    >
      <div className="w-full">
        {posts &&
          posts.map((item, index) => (
            <div className={`${MyBlogsstyles.oddBg} w-full`} key={item._id}>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-between p-4`}
              >
                <div className="">
                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: `${item._id}` }
                    }}
                    className={`text-15 font-semibold mb-1 ${MyBlogsstyles.color_blue_910}`}
                  >
                    <a
                      className={`text-gray-900 text-xl hover:text-purple-600 font-semibold ${MyBlogsstyles.min_w_25rem}`}
                    >
                      {item.title}
                    </a>
                  </Link>
                  <div className={`text-xs text-gray-400 pt-2`}>
                    {moment(item?.createdAt).format("LL")}
                    {" - "}
                    <Link href={`/u/${item.primaryAuthor.username}`}>
                      <a className="text-blue-500">
                        {/* <p className="text- text-gray-600"></p> */}
                        {item.primaryAuthor.username}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href={`/p/${item._id}`}>
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer  ${MyBlogsstyles.draftedBg}`}
                    >
                      <>
                        <div
                          className={`w-2 h-2 mr-2 rounded-full  ${MyBlogsstyles.draftedDot}`}
                        ></div>

                        <span
                          className={`capitalize  ${MyBlogsstyles.draftedText} `}
                        >
                          Preview
                        </span>
                      </>
                    </div>
                  </Link>
                  {item.status == "published" ? (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3  ${MyBlogsstyles.publishedBg} `}
                    >
                      <span
                        className={`capitalize ${MyBlogsstyles.publishedText} `}
                      >
                        Published
                      </span>
                    </div>
                  ) : item.status == "rejected" ? (
                    <div
                      className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 
                 ${MyBlogsstyles.dangerBg}`}
                    >
                      <span
                        className={`capitalize  ${MyBlogsstyles.dangerText}`}
                      >
                        Declined
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <div
                        onClick={() => rejectBlog(item)}
                        className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500
                     ${MyBlogsstyles.dangerBg}`}
                      >
                        <span
                          className={`capitalize  ${MyBlogsstyles.dangerText}`}
                        >
                          Decline
                        </span>
                      </div>
                      <div
                        onClick={() => approveBlog(item)}
                        className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 cursor-pointer hover:opacity-50 duration-500 ${MyBlogsstyles.successBg} `}
                      >
                        <span
                          className={`capitalize ${MyBlogsstyles.successText} `}
                        >
                          Publish
                        </span>
                      </div>
                    </div>
                  )}

                  <Link
                    href={{
                      pathname: `/posts/write`,
                      query: { post_id: `${item._id}` }
                    }}
                  >
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
                      <span className={`capitalize  ${MyBlogsstyles.linkText}`}>
                        Edit
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
