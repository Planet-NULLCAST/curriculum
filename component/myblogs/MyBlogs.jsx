import moment from "moment";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MyBlogs({ posts }) {
  // console.log({posts});

  return (
    <div
      className={`w-full mt-4 bg-white py-5 rounded border shadow-sm overflow-y-auto height_list`}
    >
      {posts &&
        posts.map((item, index) => (
          <div
            className={`flex items-center justify-between p-4 ${MyBlogsstyles.oddBg}`}
            key={item._id}
          >
            <div className="">
              <Link
                href="/a-post"
                className={`text-15 font-semibold mb-1 ${MyBlogsstyles.color_blue_910}`}
              >
                <a className="text-gray-900 text-xl hover:text-purple-600 font-semibold">
                  {item.title}
                </a>
              </Link>
              <div className={`text-xs text-gray-400`}>
                {moment(item?.createdAt).format("LL")}
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={`flex items-center w-28 justify-center rounded-full h-8 mr-3 ${
                  item.status === "approved" && MyBlogsstyles.successBg
                } ${item.status === "pending" && MyBlogsstyles.warningBg} ${
                  item.status === "rejected" && MyBlogsstyles.dangerBg
                }`}
              >
                <div
                  className={`w-2 h-2 mr-2 rounded-full  ${
                    item.status === "approved" && MyBlogsstyles.successDot
                  } ${item.status === "pending" && MyBlogsstyles.warningDot} ${
                    item.status === "rejected" && MyBlogsstyles.dangerDot
                  }`}
                ></div>
                <span
                  className={`capitalize  ${
                    item.status === "approved" && MyBlogsstyles.successText
                  } ${item.status === "pending" && MyBlogsstyles.warningText} ${
                    item.status === "rejected" && MyBlogsstyles.dangerText
                  }`}
                >
                  {item.status}
                </span>
              </div>
              {/* EDIT button goes to posts/write route*/}
              <Link
                href={{
                  pathname: `/posts/write`,
                  query: { post_id: `${item._id}` }
                }}
              >
                <div
                  className={`flex items-center px-4 justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-700 ${MyBlogsstyles.linkBg}`}
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
            <div
              className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
            >
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing
                      <span className="font-medium">1</span>
                      to
                      <span className="font-medium">10</span>
                      of
                      <span className="font-medium">97</span>
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>

                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>

              {/* <div className="max-w-panel w-full flex justify-end items-center">
                <span className="text-purple-600 text-sm">
                  1 - 10&nbsp;&nbsp;of 1100
                </span>
                <div className="ml-4 hover:bg-white duration-700 w-6 h-6 rounded flex justify-center items-center cursor-pointer hover:opacity-50">
                  <Image
                    src="/images/svgs/left.svg"
                    alt="edit"
                    width={15}
                    height={15}
                    layout="fixed"
                    margin={0}
                  />
                </div>
                <div className="ml-3 hover:bg-white duration-700 w-6 h-6 rounded flex justify-center items-center cursor-pointer hover:opacity-50">
                  <Image
                    src="/images/svgs/right.svg"
                    alt="edit"
                    width={15}
                    height={15}
                    layout="fixed"
                    margin={0}
                  />
                </div>
              </div>
             */}
            </div>
          </div>
        ))}
    </div>
  );
}
