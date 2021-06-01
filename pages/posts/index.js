import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import { baseUrl, allPostsUrl } from "../../config/config";
import Cookies from "universal-cookie";
const axios = require("axios");

export default function Mypost() {
  const cookies = new Cookies();
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });

  useEffect(() => {
    // console.log(cookies.get("user"));
    const userCookie = cookies.get("user");
    async function getPost() {
      try {
        const { data } = await axios.get(`${baseUrl}/${allPostsUrl}`, {
          headers: {
            "x-access-token": `${userCookie.accessToken}`
          }
        });
        console.log(data);
        const posts = data.posts;
        const count = data.count;
        console.log(typeof posts);
        console.log(posts);
        setPostData({
          posts: posts,
          count: count
        });
      } catch (err) {
        console.log(err);
      }
    }
    getPost();
  }, []);

  const data = [
    {
      tags: ["css", "html"],
      _id: "60b0899c3397112295ded7fc",
      userId: "60a4d5ac2871874c835ca542",
      url: "ww/ww/",
      createdBy: "60a4d5ac2871874c835ca542",
      updatedBy: "person b",
      html: "</a>",
      title: "person a post 21",
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
    }
  ];
  return (
    <div>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          <Navbar />
          <MyBlogs
            // posts={postData.posts}
            posts={data}
          />
        </div>
      </div>
    </div>
  );
}
