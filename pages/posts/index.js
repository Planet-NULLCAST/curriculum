import React, { useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import Cookies from "universal-cookie";
import withAuth from "../../component/withAuth/withAuth";
import PostService from "../../services/PostService";

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
            posts={postData.posts}
            // posts={data}
          />
        </div>
      </div>
    </div>
  );
};

export default withAuth(MyPost);

// export default MyPost;
