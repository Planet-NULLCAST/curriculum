import React, { useEffect, useState } from "react";
import Head from "next/head";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import Pagination from "../component/pagination/pagination";
import MyBlogsstyles from "../styles/MyBlogs.module.css";
import Cookies from "universal-cookie";
import PostService from "../services/PostService";
import AdminNavbar from "../component/admin/AdminNavbar";
import AdminBlogsList from "../component/admin/AdminBlogsList";
import { getCookieValue } from "../lib/cookie";
import notify from "../lib/notify";

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const cookie = JSON.parse(
        getCookieValue(context.req.headers.cookie, "userNullcast")
      );
        return {
          props: {}
        };
    } else {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: "/login"
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, 'error');
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/login"
      }
    };
  }
}

const Admin = () => {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  //   state
  const [postData, setPostData] = useState({
    posts: [],
    count: 0
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    // optionstag: "",
    status: "",
    tag: "",
    // order: -1,
    // fieldName: "updatedAt"
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
      const data = await PostService.getPostsByUsers(reqData);
      const { posts, count } = data.data;
      setPostData({ posts, count });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  }

  async function getPostByTag(tagName, status) {
    try {
      const statusUpdate = { status: status };
      const data  = await PostService.getPostByTags(tagName, statusUpdate);
      const { posts, count } = data.data;
      setPostData({ posts, count });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  }

  /**
   * page change event
   * @param {*} page new page change
   * @param {*} limit limit of posts
   * @author athulraj2002
   */
  const pageChange = (page, limit) => {
    const data = {
      ...pagination,
      page,
      limit,
      skip: page == 1 ? 0 : (page - 1) * 10
    };
    setPagination(data);
    getPosts(data);
  };

  /**
   * Function to get posts when tag changes
   * @param {*} tag new tag
   * @author athulraj2002
   */
  const filterCategoryPosts = (tag) => {
    const data = {
      ...pagination,
      tag: tag,
      page: 1,
      // skip: 0
    };
    setPagination((previousState) => {
      return {
        ...previousState,
        tag: tag,
        page: 1,
        // skip: 0
      };
    });

    setTimeout((status) => {
      getPostByTag(data.tag, status);
    }, 100);
  };

  /**
   * Function to get posts when status changes
   * @param {*} status new status
   * @author athulraj2002
   */
  const filterStatusPosts = (status) => {
    const data = { ...pagination, status: status, page: 1 };
    setPagination((previousState) => {
      return { ...previousState, status: status, page: 1};
    });
    setTimeout(() => {
      getPosts(data);
    }, 100);
  };
  return (
    <div>
      <Head>
        <title>Admin | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <AdminNavbar
            changeTag={(tag) => filterCategoryPosts(tag)}
            changeStatus={(status) => filterStatusPosts(status)}
          />

          {postData.posts?.length ? (
            <div>
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
                  changePage={(page, limit) => pageChange(page, limit)}
                  pageNum={1}
                  limit={10}
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
