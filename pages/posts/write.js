import React, { useRef, useEffect, useState } from "react";
import WriteNav from "../../component/myblogs/WriteNav";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";
import { baseUrl, clientUrl, editorUrl } from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import MyBlogsstyles from "../../styles/MyBlogs.module.css";

const TARGET = editorUrl;

Write.getInitialProps = async (ctx) => {
  // console.log(ctx);
  // console.log(ctx.query);
  const post_Id = ctx.query.post_id;
  return { post_Id: post_Id ? post_Id : "" };
};

export default function Write({ post_Id }) {
  // console.log("postId if there's a post Id", post_Id);
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState();
  const iframeRef = useRef();
  const postElement = useRef();
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  // console.log(userCookie);

  useEffect(() => {
    // const _postId = window.location.search.split("=")[1];
    const currentPostId = router.query.post_id;
    // console.log({ currentPostId });
    if (userCookie) {
      setPostId(currentPostId);
      iframeRef.current.onload = function () {
        console.log("iframe loaded ======>>>>>");
        if (currentPostId) {
          console.log("iframe current", currentPostId);
          getPostById(currentPostId);
        }
      };
      // if (postId) {
      async function getPostById(id) {
        // console.log("in function", id);
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
      // getPostById();
      // }
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

  async function updatePostById(updateData, newPostId) {
    const { msg, data } = await PostService.updatePostById(
      userCookie,
      updateData,
      newPostId
    );
    console.log("updated post response", data);
    notify(msg);
  }

  async function createPost(createThisPost) {
    const { data } = await PostService.createPost(userCookie, createThisPost);
    const { post, msg } = data;
    notify(msg);
    // console.log(post, msg);
    //TO DO: compare our user id and the posts's user id
    // setPostId(post._id);
    router.push(`?post_id=${post._id}`);
  }

  const saveToDraft = () => {
    // Send a post message to the iframe
    iframeRef.current.contentWindow.postMessage({ msg: "savePost" }, TARGET);
    setTimeout(() => {
      // wait for the response post message to get the post from the state
      console.log({ postElement });
      // console.log(postElement.current.scratch);
      const newMobiledoc = postElement.current.scratch;
      const title = postElement.current.titleScratch || "[Untitled]";
      // console.log("title: ", title);
      // createPost or updatePost -  if post id - update, else create
      console.log({ router });
      const newPostId = router.query.post_id;
      console.log({ newPostId });
      if (newPostId) {
        //updatePost
        const newUpdatedPost = {
          title: title,
          mobiledoc: newMobiledoc
        };
        updatePostById(newUpdatedPost, newPostId);
      } else {
        const createThisPost = {
          mobiledoc: newMobiledoc,
          title: title,
          status: "drafted",
          type: "blog"
        };
        console.log(createThisPost);
        createPost(createThisPost);
      }
    }, 500);
  };

  const submitForReview = () => {
    //status pending if submitted for review
  };

  const getSettings = async (e) => {
    //get form settings data - imageUpload url tags shortDes metaTitle metaDes
    e.preventDefault();
    console.log(e.target.imageUpload.files[0]);
    // console.log("in settings");
    const imageFile = e.target.imageUpload.files[0] || "";
    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      id: postId,
      category: "posts",
      ContentType: imageFile.type
    };
    const s3ImageUrl = await PostService.uploadImage(imageFile, imageData);
    console.log(s3ImageUrl);
    const postUrl = e.target.url.value || "";
    // console.log(`${baseUrl}/${postUrl}`);
    let tags = Array.from(e.target.tags) || "";
    // console.log("tags length: ", tags.length);
    if (tags.length > 0) {
      tags = tags.map((tag) => tag.value.toUpperCase());
      // console.log("multiple tags", tags);
    } else {
      tags = e.target.tags.value.toUpperCase();
      // console.log("single tag", tags);
    }

    const shortDes = e.target.shortDes.value || "";
    const metaTitle = e.target.metaTitle.value || "";
    const metaDes = e.target.metaDes.value || "";
    // console.log(imageName, postUrl, tags, shortDes, metaTitle, metaDes);
    const settingsData = {
      tags: tags,
      // url: , //p/id
      canonicalUrl: `${clientUrl}/${postUrl}`,
      bannerImage: s3ImageUrl,
      shortDescription: shortDes,
      metaTitle: metaTitle,
      metaDescription: metaDes
    };
    if (postId) {
      updatePostById(settingsData, postId);
    } else {
      createPost(settingsData);
    }
  };

  const notify = (msg) =>
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
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
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
