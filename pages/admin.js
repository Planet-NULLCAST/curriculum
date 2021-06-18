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
import { getCookieValue } from "../lib/cookie";
import { serverUrl } from "../config/config";

export async function getServerSideProps(context) {
  try {
    console.log('cookie' , context.req.headers.cookie);
    if (context.req.headers.cookie) {
      const cookie = JSON.parse(
        getCookieValue(context.req.headers.cookie, "userNullcast")
      );
      const res = await PostService.isAdmin(
        cookie.id,
        cookie.accessToken
      );
      console.log(res);
      if (res.data) {
        return {
          props: { admin: cookie }
        };
      } else {
        return {
          redirect: {
            permanent: false,
            destination: "/login"
          }
        };
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/login"
        }
      };
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}

const Admin = (props) => {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  //   state
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });
  const [pagination, setPagination] = useState({
    pageNo: 1,
    limit: 10,
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
      getPosts(pagination);
      setLoaded(true);
    }
  }, []);

  // user functions

  /**
   * Function to get posts
   * @param {*} reqData data for pagination and filter
   * @author athulraj2002
   */
  async function getPosts(reqData) {
    try {
      const data = await PostService.adminGetLatestPosts(reqData);

      const { posts, count } = data.data;

      setPostData({ posts, count });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * page change event
   * @param {*} pageNo new page change
   * @param {*} limit limit of posts
   * @author athulraj2002
   */
  const pageChange = (pageNo, limit) => {
    const data = {
      ...pagination,
      pageNo,
      skip: pageNo == 1 ? 0 : (pageNo - 1) * 10
    };
    setPagination(data);
    getPosts(data);
  };

  /**
   * Function to get posts when category changes
   * @param {*} category new category
   * @author athulraj2002
   */
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

  /**
   * Function to get posts when status changes
   * @param {*} status new status
   * @author athulraj2002
   */
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
