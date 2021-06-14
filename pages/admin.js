import React, { useEffect, useState } from "react";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import Pagination from "../component/pagination/pagination";
import Navbar from "../component/myblogs/Navbar";
import MyBlogs from "../component/myblogs/MyBlogs";
import MyBlogsstyles from "../styles/MyBlogs.module.css";
import Cookies from "universal-cookie";
import withAuth from "../component/withAuth/withAuth";
import PostService from "../services/PostService";
import AdminNavbar from "../component/admin/AdminNavbar";

const Admin = (props) => {
    const cookies = new Cookies();
    const userCookie = cookies.get("userNullcast");
    // console.log(userCookie);
    const [postData, setPostData] = useState({
      posts: [],
      count: 0
    });
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      if (userCookie) {
        // const reqData = {
        //   pageNo: 1,
        //   limit: 10
        // };
        // getPosts(reqData);
        pageChange(1, 10);
        setLoaded(true);
      }
    }, []);
  
    async function getPosts(reqData) {
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
  
    const pageChange = (pageNo, limit) => {
      // console.log(pageNo, limit);
      const newReqData = {
        pageNo: pageNo,
        limit: limit
      };
      getPosts(newReqData);
    };
  return (
    <div>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
           <AdminNavbar>
           </AdminNavbar>
          {postData.posts.length ? (
            <div>
              <MyBlogs posts={postData.posts} />
              <div
                className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
              >
                <Pagination
                  TotalCount={postData.count}
                  // CurrentPage={3}
                  changedPage={pageChange}
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-700 text-center font-semibold mt-8">
              Oops ! No posts! 
            </div>
            // <MyBlogs
            //   paginationData={pageChange}
            //   posts={data}
            // />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
