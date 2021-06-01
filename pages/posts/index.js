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

  return (
    <div>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          <Navbar />
          <MyBlogs posts={postData.posts} />
        </div>
      </div>
    </div>
  );
}
