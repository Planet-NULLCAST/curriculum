import React, { useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";
import Pagination from "../../component/pagination/pagination";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";
import { getCookieValue } from "../../lib/cookie";

export async function getServerSideProps(context) {
  // console.log(context.req.headers.cookie);
  try {
    if (context.req.headers.cookie) {
      // console.log(context.req.headers.cookie);
      const cookie = JSON.parse(
        getCookieValue(context.req.headers.cookie, "userNullcast")
      );
      // console.log({ cookie });
      return {
        props: {}
      };
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/login"
        }
      };
    }
  } catch (err) {
    console.log("User not logged in ");
    console.log(err);
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
      // props: {}
    };
  }
}

export default function Posts() {
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

  useEffect(() => {
    if (userCookie) {
      const reqData = {
        pageNo: pageNo,
        limit: limit,
        tag: tagFilter,
        status: statusFilter
      };
      getPosts(reqData);
      changePage(pageNo, limit);
    }
  }, []);

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
}

// export default withAuth(MyPost);
