import React, { useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import Cookies from "universal-cookie";
import withAuth from "../../component/withAuth/withAuth";
import PostService from "../../services/PostService";
import Pagination from "../../component/pagination/pagination";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";

const MyPost = () => {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  // console.log(userCookie);
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });

  const [tagFilter, setTagFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const pageNo = 1;
  const limit = 10;

  // useEffect(() => {
  //   if (userCookie) {
  //     const reqData = {
  //       pageNo: pageNo,
  //       limit: limit,
  //       tag: tagFilter,
  //       status: statusFilter
  //     };
  //     getPosts(reqData);
  //     changePage(pageNo, limit);
  //   }
  // }, []);

  async function getPosts(reqData, tag, status) {
    // console.log(reqData);
    if (tag) setTagFilter(tag);
    if (status) setStatusFilter(status);
    try {
      const data = await PostService.getPostsByUserId(userCookie, reqData);
      console.log(data);
      const { posts, count } = data;
      // console.log({ posts });
      setPostData({
        posts: posts,
        count: count
      });
    } catch (err) {
      console.log(err);
    }
  }

  const changePage = (newPageNo) => {
    // console.log(pageNo, limit);
    const newReqData = {
      pageNo: newPageNo,
      limit: limit,
      tag: tagFilter,
      status: statusFilter
    };
    console.log(newReqData);
    getPosts(newReqData);
  };

  return (
    <div>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <Navbar getPosts={getPosts} limit={limit} />
          {postData.posts.length ? (
            <div>
              <MyBlogs posts={postData.posts} />
              {/* <div
                className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
              >
                <Pagination
                  TotalCount={postData.count}
                  // CurrentPage={3}
                  changePage={changePage}
                  pageNum={pageNo}
                  limit={limit}
                />
              </div> */}
            </div>
          ) : (
            <div className="text-gray-700 text-center font-semibold mt-8">
              Oops ! You have not created any posts!
            </div>
          )}
          <div
            className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
          >
            <Pagination
              TotalCount={postData.count}
              // CurrentPage={3}
              changePage={changePage}
              pageNum={pageNo}
              limit={limit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(MyPost);

// export default MyPost;

const data = [
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Creative Search Bar and Input Field Design Inspiration",
    mobiledoc: "mobiledoc",
    status: "approved",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Active Tab Animation using HTML, CSS and JS",
    mobiledoc: "mobiledoc",
    status: "drafted",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Null Safety in Flutter",
    mobiledoc: "mobiledoc",
    status: "published",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Creative Search Bar and Input Field Design Inspiration",
    mobiledoc: "mobiledoc",
    status: "approved",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Active Tab Animation using HTML, CSS and JS",
    mobiledoc: "mobiledoc",
    status: "pending",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Null Safety in Flutter",
    mobiledoc: "mobiledoc",
    status: "rejected",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Creative Search Bar and Input Field Design Inspiration",
    mobiledoc: "mobiledoc",
    status: "approved",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Active Tab Animation using HTML, CSS and JS",
    mobiledoc: "mobiledoc",
    status: "pending",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  },
  {
    tags: ["css", "html"],
    _id: "60b0899c3397112295ded7fc",
    userId: "60a4d5ac2871874c835ca542",
    url: "ww/ww/",
    createdBy: "60a4d5ac2871874c835ca542",
    updatedBy: "person b",
    html: "</a>",
    title: "Null Safety in Flutter",
    mobiledoc: "mobiledoc",
    status: "rejected",
    featured: true,
    canonicalUrl: "ww/www",
    primaryTag: "css",
    primaryAuthor: {
      _id: "60b0899c3397112295ded7fd",
      firstName: "person b"
    },
    contributors: [
      {
        _id: "60b0899c3397112295ded7fe",
        firstName: "person c"
      },
      {
        _id: "60b0899c3397112295ded7ff",
        firstName: "person d"
      }
    ],
    bannerImage: "img",
    metaTitle: "some article",
    metaDescription: "some description",
    type: "type",
    createdAt: "2021-05-28T06:11:40.644Z",
    updatedAt: "2021-05-28T06:11:40.644Z",
    __v: 0
  }
];
// console.log(data.length);
