import React, { useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import Cookies from "universal-cookie";
import withAuth from "../../component/withAuth/withAuth";
import PostService from "../../services/PostService";
import Pagination from "../../component/pagination/pagination";

const MyPost = () => {
  const cookies = new Cookies();
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });

  useEffect(() => {
    const userCookie = cookies.get("userNullcast");
    if (userCookie) {
      async function getPosts() {
        try {
          const data = await PostService.getPostsByUserId(userCookie);
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
      getPosts();
    }
  }, []);
  
  const pageChange = (pageNo, limit) => {
    console.log(pageNo, limit, "page index");
    // call api here for Paginations
  };

  return (
    <div>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <Navbar />
          {postData.posts.length ? (
            <MyBlogs
              posts={postData.posts}
              // posts={data}
            />
          ) : (
            <div className="pt-8 text-black text-center">
              You have not created any posts!
            </div>
          )}
//           <MyBlogs
//             posts={postData.posts}
//             // posts={data}
//             paginationData={pageChange}
//           />
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
