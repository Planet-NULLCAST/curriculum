import React, { useEffect, useState } from "react";
import Head from "next/head";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import Pagination from "../../../component/pagination/pagination";
import UserService from "../../../services/UserService";
import MyBlogsstyles from "../../../styles/MyBlogs.module.css";
import Cookies from "universal-cookie";
import PostService from "../../../services/PostService";
import AdminNavbar from "../../../component/admin/AdminNavbar";
import AdminBlogsList from "../../../component/admin/AdminBlogsList";
import { getCookieValue } from "../../../lib/cookie";
import notify from "../../../lib/notify";

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        const username = cookie.user_name;
        const { data } = await UserService.getUserByUsername(username);
        // removed roles from user data
        // const skillsRes = await SkillService.getSkills();
        if (data.roles[0] === "admin") {
          return {
            props: {
              profileData: {}
            }
          };
        } else {
          return {
            props: {
              profileData: {}
            },
            redirect: {
              permanent: false,
              destination: "/"
            }
          };
        }
      } else {
        return {
          props: {
            profileData: {}
          },
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return {
      props: {
        profileData: {}
      },
      redirect: {
        permanent: false,
        destination: "/"
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
    order: "DESC"
    // fieldName: "updatedAt"
  });
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState("");

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
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }

  async function getPostByTag(tagName, status, newData) {
    try {
      const data = await PostService.getPostByTags(tagName, status, newData);
      const { posts, count } = data.data;
      setPostData({ posts, count });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
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
      sort_field: "updated_at",
      order: "DESC",
      skip: page == 1 ? 0 : (page - 1) * 10
    };
    setPagination(data);
    if (data?.tag) {
      getPostByTag(null, null, data);
    } else {
      getPosts(data, "from page");
    }
  };

  /**
   * Function to get posts when tag changes
   * @param {*} tag new tag
   * @author athulraj2002
   */
  const filterCategoryPosts = (tag, status) => {
    const data = {
      ...pagination,
      tag: tag,
      sort_field: "updated_at",
      order: "DESC",
      page: 1,
      status: status
      // skip: 0
    };
    setPagination((previousState) => {
      return {
        ...previousState,
        tag: tag,
        page: 1,
        status: status
        // skip: 0
      };
    });

    setTimeout(() => {
      if (data?.tag) getPostByTag(data.tag, data.status);
      else getPosts(data);
    }, 100);
  };

  /**
   * Function to get posts when status changes
   * @param {*} status new status
   * @author athulraj2002
   */
  const filterStatusPosts = (status) => {
    setStatus(status);
    const data = {
      ...pagination,
      status: status,
      page: 1,
      sort_field: "updated_at",
      order: "DESC"
    };
    setPagination((previousState) => {
      return { ...previousState, status: status, page: 1 };
    });
    setTimeout(() => {
      if (data?.tag) {
        getPostByTag(data.tag, data.status);
      } else {
        getPosts(data);
      }
    }, 100);
  };
  return (
    <div>
      <Head>
        <title>Admin | Blogs | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <AdminNavbar
            changeTag={(tag) => filterCategoryPosts(tag, status)}
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
