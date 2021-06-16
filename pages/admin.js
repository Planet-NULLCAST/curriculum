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
import AdminBlogsList from "../component/admin/AdminBlogsList";

const Admin = (props) => {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  // console.log(userCookie);

  //   state
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });
  const [pagination, setPagination] = useState({
    pageNo: 1,
    limit: 2,
    skip: 0,
    optionsCategory: "",
    optionsStatus: "",
    order: 1,
    fieldName: "updatedAt"
  });
  const [loaded, setLoaded] = useState(false);

  //   effects
  useEffect(() => {
    if (userCookie) {
      // const reqData = {
      //   pageNo: 1,
      //   limit: 10
      // };
      // getPosts(reqData);
      //   pageChange(1, 10);
      getPosts(pagination);
      setLoaded(true);
    }
  }, []);

  // user functions

  async function getPosts(reqData) {
    console.log("called");
    try {
      const data = await PostService.adminGetLatestPosts(reqData);
      //   console.log(data);
      const { posts, count } = data.data;
      console.log(count);
      setPostData({ posts, count });
    } catch (err) {
      console.log(err);
    }
  }

  const pageChange = (pageNo, limit) => {
    console.log(pageNo, limit);
    // console.log();
    const data = {
      ...pagination,
      pageNo,
      skip: pageNo == 1 ? 0 : pagination.pageNo * 2
    };
    setPagination(data);
    getPosts(data);
  };

  const filterCategoryPosts = (category) => {
    const data = {
      ...pagination,
      optionsCategory: category,
      pageNo: 1,
      skip: 0
    };
    setPagination((previousState) => {
      return {
        ...previousState,
        optionsCategory: category,
        pageNo: 1,
        skip: 0
      };
    });

    setTimeout(() => {
      getPosts(data);
    }, 100);
  };
  const filterStatusPosts = (status) => {
    const data = { ...pagination, optionsStatus: status, pageNo: 1, skip: 0 };
    setPagination((previousState) => {
      return { ...previousState, optionsStatus: status, pageNo: 1, skip: 0 };
    });
    setTimeout(() => {
      getPosts(data);
    }, 100);
  };
  return (
    <div>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <AdminNavbar
            changeCategory={(category) => filterCategoryPosts(category)}
            changeStatus={(status) => filterStatusPosts(status)}
          />

          {postData.posts?.length ? (
            <div>
              {/* <MyBlogs posts={postData.posts} /> */}
              <AdminBlogsList
                posts={postData.posts}
                updated={() => getPosts(pagination)}
              />
              <div
                className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
              >
                <Pagination
                  TotalCount={postData.count}
                  // CurrentPage={3}
                  changedPage={(pageNo, limit) => pageChange(pageNo, limit)}
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-700 text-center font-semibold mt-8">
              Oops ! No posts!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
