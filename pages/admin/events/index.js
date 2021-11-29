import React, { useEffect, useState } from "react";
import Head from "next/head";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import Pagination from "../../../component/pagination/pagination";
import UserService from "../../../services/UserService";
import MyBlogsstyles from "../../../styles/MyBlogs.module.css";
import Cookies from "universal-cookie";
import EventService from "../../../services/EventService";
import AdminEventList from "../../../component/admin/AdminEventList";
import { getCookieValue } from "../../../lib/cookie";
import notify from "../../../lib/notify";
import AdminNavbar from "../../../component/admin/AdminNavbar";

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
  const [eventdata, setEventdata] = useState({
    events: [],
    count: "0"
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    // optionstag: "",
    status: "",
    tag: ""
    // order: -1,
    // fieldName: "updatedAt"
  });
  const [loaded, setLoaded] = useState(false);

  //   effects
  useEffect(() => {
    if (userCookie) {
      getevents(pagination);
      setLoaded(true);
    }
  }, []);

  // user functions

  /**
   * Function to get posts
   * @param {*} reqData data for pagination and filter
   * @author athulraj2002
   */
  async function getevents(reqData) {
    try {
      const data = await EventService.getallevents();
      const { events, count } = data.data;
      setEventdata({ events, count });
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
      skip: page == 1 ? 0 : (page - 1) * 10
    };
    setPagination(data);
    getevents(data);
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
      getPostByTag(data.tag, data.status);
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
      return { ...previousState, status: status, page: 1 };
    });
    setTimeout(() => {
      getPosts(data);
    }, 100);
  };
  return (
    <div>
      <Head>
        <title>Admin | Events | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-3 md:px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <AdminNavbar
            changeTag={(tag) => filterCategoryPosts(tag)}
            changeStatus={(status) => filterStatusPosts(status)}
          />

          {eventdata.events?.length ? (
            <div>
              <AdminEventList events={eventdata.events} />

              <div
                className={`fixed bottom-0 left-0 z-10 w-full flex justify-center items-center px-6 ${MyBlogsstyles.navigation}`}
              >
                <Pagination
                  TotalCount={eventdata.count}
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
