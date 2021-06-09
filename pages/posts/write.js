import React, { useRef, useEffect, useState } from "react";
import WriteNav from "../../component/myblogs/WriteNav";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";
import { baseUrl, editorUrl } from "../../config/config";
// import MyBlogsstyles from "../../styles/MyBlogs.module.css";

const TARGET = editorUrl;

Write.getInitialProps = async (ctx) => {
  // console.log(ctx);
  // console.log(ctx.query);
  const postId = ctx.query.post_id;
  return { postId: postId };
};

export default function Write({ postId }) {
  // const [post, setPost] = useState(null);
  console.log(postId);
  const iframeRef = useRef();
  const postElement = useRef();
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  // console.log(userCookie);

  useEffect(() => {
    // const _postId = window.location.search.split("=")[1];
    if (userCookie) {
      iframeRef.current.onload = function () {
        // console.log("iframe loaded ======>>>>>");
        if (postId) {
          getPostById(postId);
        }
      };
      // if (postId) {
      async function getPostById(postId) {
        const response = await PostService.getPostById(userCookie, postId);
        console.log("get post response", response);
        const post = {
          mobiledoc: response.mobiledoc,
          title: response.title
        };

        // ---- to show the post in iframe
        iframeRef.current.contentWindow.postMessage(
          {
            msg: "providePost",
            post: post
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
  }, [postId]);

  // const updateThisPost = {
  //   //get mobiledoc from iframe - this is dummy data
  //   mobiledoc: {
  //     atoms: [],
  //     cards: [],
  //     sections: [[1, "p", [[0, [], 0, "asfasdfdsafdafadsf"]]]],
  //     version: "0.3.1",
  //     ghostVersion: "4.0"
  //   }
  // };

  async function updatePostById(updateData) {
    const response = await PostService.updatePostById(
      userCookie,
      updateData,
      postId
    );
    console.log("updated post response", response);
  }

  async function createPost(newMobiledoc, newTitle) {
    // const {
    //   tags,
    //   // url: ,
    //   title,
    //   status,
    //   canonicalUrl,
    //   primaryTag,
    //   bannerImage,
    //   shortDescription,
    //   metaTitle,
    //   metaDescription,
    //   type
    // } = settingsData;
    const createThisPost = {
      mobiledoc: newMobiledoc,
      title: newTitle,
      status: "drafted",
      type: "blog"
    };
    console.log(createThisPost);
    const { data } = await PostService.createPost(userCookie, createThisPost);
    const { post, msg } = data;
    // console.log(post, msg);
    //TO DO: compare our user id and the posts's user id
    router.push(`?post_id=${post._id}`, undefined, {
      shallow: true
    });
  }

  const saveToDraft = () => {
    // Send a post message to the iframe
    iframeRef.current.contentWindow.postMessage({ msg: "savePost" }, TARGET);
    setTimeout(() => {
      // wait for the response post message to get the post from the state
      console.log({ postElement });
      // console.log(postElement.current.scratch);
      const newMobiledoc = postElement.current.scratch;
      const title = postElement.current.titleScratch;
      console.log("title: ", title);
      // createPost or updatePost -  if post id - update, else create
      if (postId) {
        //updatePost
        const newUpdatedPost = {
          title: title,
          mobiledoc: newMobiledoc
        };
        updatePostById(newUpdatedPost);
      } else {
        createPost(newMobiledoc, title);
      }
    }, 500);
  };

  const submitForReview = () => {
    //status pending if submitted for review
  };

  const getSettings = (e, tagData) => {
    //get form settings data - imageUpload url tags shortDes metaTitle metaDes
    e.preventDefault();
    // console.log(tagData);
    // console.log(e.target.imageUpload.files[0]);
    console.log("in settings");
    const imageFile = e.target.imageUpload.files[0] || "";
    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      id: postId,
      category: "posts",
      ContentType: imageFile.type
    };
    PostService.uploadImage(imageFile, imageData);
    const imageName = imageFile.name;
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
      // url: ,
      canonicalUrl: `${baseUrl}/${postUrl}`,
      primaryTag: "css",
      bannerImage: imageName,
      shortDescription: shortDes,
      metaTitle: metaTitle,
      metaDescription: metaDes
    };
    if (postId) {
      updatePostById(settingsData);
    } else {
      createPost(settingsData);
    }
  };

  const notify = (item) =>
    toast(item.message, {
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
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}
