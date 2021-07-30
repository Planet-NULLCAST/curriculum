import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import WriteNav from "../../component/myblogs/WriteNav";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import PostService from "../../services/PostService";
import { editorUrl } from "../../config/config";
import { getCookieValue } from "../../lib/cookie";

const TARGET = editorUrl;

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        const post_Id = context.query.post_id;
        // const res = await PostService.getPostById(cookie, post_Id);
        // // console.log("get post response", res);
        // const resPost = {
        //   mobiledoc: res.mobiledoc,
        //   title: res.title
        // };
        return {
          props: {
            post_Id: post_Id ? post_Id : "",
            referer: context.req.headers.referer
              ? context.req.headers.referer
              : ""
            // resPost: resPost,
            // res: res
          }
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
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    };
  }
}

export default function Write({
  post_Id,
  referer
  // resPost,
  // res
}) {
  const [postId, setPostId] = useState(post_Id);
  const [post, setPost] = useState();

  const iframeRef = useRef();
  const postElement = useRef();

  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  // console.log(userCookie);

  useEffect(() => {
    // const currentPostId = router.query.post_id;
    // console.log({ currentPostId });
    if (userCookie) {
      setPostId(post_Id);
      try {
        // errors on refresh
        // !START
        // *IMPORTANT: Don't remove the below block of code
        const iframeElement = iframeRef.current;
        iframeElement.contentWindow.innerWidth;
        // *IMPORTANT: It's the reason the control goes to the catch block on refresh
        // !END

        iframeElement.onload = function () {
          if (post_Id) {
            getPostById(post_Id);
          }
        };
      } catch (error) {
        console.log("error blaaaah==>", error);
        getPostById(post_Id);
      }
    }

    window.addEventListener(
      "message",
      (event) => {
        // IMPORTANT: check the origin of the data!
        if (event.isTrusted && event.origin.startsWith(TARGET)) {
          if (event.data.post) {
            // console.log("message recieved", event);
            postElement.current = event.data.post;
          }
        } else {
          // The data was NOT sent from your site!
          // Be careful! Do not use it. This else branch is
          // here just for clarity, you usually shouldn't need it.
          return;
        }
      },
      false
    );
    return () => {
      document.removeEventListener("message", () => {
        // console.log("listener removed");
      });
    };
  }, [post_Id]);

  async function getPostById(id) {
    const res = await PostService.getPostById(userCookie, id);
    console.log("get post response", res);
    const resPost = {
      mobiledoc: res.mobiledoc,
      title: res.title
    };
    setPost(res);
    // ---- to show the post in iframe
    iframeRef.current.contentWindow.postMessage(
      {
        msg: "providePost",
        post: resPost
      },
      TARGET
    );
  }

  async function updatePostById(updateData, newPostId) {
    try {
      const { msg, data } = await PostService.updatePostById(
        userCookie,
        updateData,
        newPostId
      );
      // console.log("updated post response", data);
      if (msg) {
        notify(msg);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const saveToDraft = () => {
    // Send a post message to the iframe
    iframeRef.current.contentWindow.postMessage({ msg: "savePost" }, TARGET);
    setTimeout(() => {
      // wait for the response post message to get the post from the state
      // console.log({ postElement });
      // console.log(postElement.current.scratch);
      const newMobiledoc = postElement.current.scratch;
      const title = postElement.current.titleScratch || "[Untitled]";

      if (postId) {
        //updatePost
        const newUpdatedPost = {
          title: title,
          mobiledoc: newMobiledoc
        };
        updatePostById(newUpdatedPost, postId);
      }
    }, 500);
  };

  async function submitForReview() {
    //change status to "pending" if submitted for review
    // console.log(postId);
    try {
      const statusUpdate = {
        status: "pending"
      };
      const msg = await PostService.changePostStatus(
        userCookie,
        postId,
        statusUpdate
      );
      // console.log(msg);
      if (msg) {
        notify(msg);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getSettings = async (settingsData) => {
    if (postId) {
      updatePostById(settingsData, postId);
    }
  };

  const notify = (msg) =>
    toast(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  return (
    <>
      <Head>
        <title>Write | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 px-6 min-h-screen-top">
        <div className="max-w-panel pt-15px">
          <WriteNav
            previousUrl={referer}
            saveToDraft={saveToDraft}
            submitForReview={submitForReview}
            getSettings={getSettings}
            post={post}
          />
          <div
            className={`height_Iframe_write bg-white w-full rounded overflow-y-auto`}
          >
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={TARGET}
            ></iframe>
          </div>
          {/* <div
            className={`height_Iframe_write flex  w-full justify-center px-3 rounded overflow-y-auto`}
          >
            <p className="text-gray-700 text-center font-semibold mt-8">
              Oops! This functionality is disabled in smaller screens !
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
