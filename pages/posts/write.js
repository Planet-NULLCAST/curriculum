import React, { useRef, useEffect, useState } from "react";
import WriteNav from "../../component/myblogs/WriteNav";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import { env } from "../../next.config";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";
import { baseUrl } from "../../config/config";

const TARGET = env.EDITOR_URL;

export default function Write() {
  const [currentNav, setcurrentNav] = useState("profile");
  // const [post, setPost] = useState(null);
  const iframeRef = useRef();
  const postElement = useRef();
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const router = useRouter();
  const postId = router.query.post_id;
  // console.log(userCookie);

  useEffect(() => {
    // console.log(TARGET);
    // console.log(router.query);

    console.log({ postId });
    if (userCookie) {
      if (postId) {
        console.log("test");
        async function getPostById() {
          const response = await PostService.getPostById(userCookie, postId);
          console.log(response);

          // const title = "some title";
          // ---- to show the post in iframe
          iframeRef.current.contentWindow.postMessage(
            {
              msg: "providePost",
              post: response
            },
            TARGET
          );
        }
        getPostById();
      } else {
        //create blank ??
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
  }, [postId]);

  const changeNav = (data) => {
    setcurrentNav(data);
  };

  const updateThisPost = {
    mobiledoc: {
      atoms: [],
      cards: [],
      sections: [[1, "p", [[0, [], 0, "asfasdfdsafdafadsf"]]]],
      version: "0.3.1",
      ghostVersion: "4.0"
    }
  };

  async function updatePostById(updateData) {
    const response = await PostService.updatePostById(
      userCookie,
      updateData,
      postId
    );
    console.log(response);
  }

  async function createPost(settingsData) {
    const createThisPost = {
      mobiledoc: {
        atoms: [],
        cards: [],
        sections: [[1, "p", [[0, [], 0, "some new post "]]]],
        version: "0.3.1",
        ghostVersion: "4.0"
      }

      //settings data

      // tags: ["css", "js"],
      // url: "ww/ww/",
      // title: "person a post 1",
      // status: "pending",
      // canonicalUrl: "ww/www",
      // primaryTag: "css",
      // bannerImage: "img",
      // metaTitle: "some article",
      // metaDescription: "some description",
      // type: "type"
    };
    const response = await PostService.createPost(userCookie, createThisPost);
    console.log(response);
  }

  const saveToDraft = () => {
    // Send a post message to the iframe
    iframeRef.current.contentWindow.postMessage({ msg: "savePost" }, TARGET);
    setTimeout(() => {
      // wait for the response post message to get the post from the state
      console.log({ postElement });
      // createPost or updatePost -  if post id - update, else create
      if (postId) {
        //updatePost
        updatePostById(updateThisPost);
      } else {
        createPost();
      }
    }, 500);
  };

  const publishPost = () => {
    //status pending for publish
  };

  const getSettings = (e, tagData) => {
    //get form settings data - imageUpload url tags shortDes metaTitle metaDes
    e.preventDefault();
    // console.log(tagData);
    // console.log(e.target.imageUpload.files[0]);
    const imageFile = e.target.imageUpload.files[0];
    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      id: postId,
      category: "posts",
      ContentType: imageFile.type
    };
    PostService.uploadImage(imageFile, imageData);
    const imageName = imageFile.name;
    const postUrl = e.target.url.value;
    // console.log(`${baseUrl}/${postUrl}`);
    const tags = Array.from(e.target.tags).map((tag) =>
      tag.value.toUpperCase()
    );
    console.log(tags);

    const shortDes = e.target.shortDes.value;
    const metaTitle = e.target.metaTitle.value;
    const metaDes = e.target.metaDes.value;
    // console.log(imageName, postUrl, tags, shortDes, metaTitle, metaDes);
    const settingsData = {
      tags: tags,
      // url: ,
      title: "person a post 1",
      status: "drafted",
      canonicalUrl: `${baseUrl}/${postUrl}`,
      primaryTag: "css",
      bannerImage: imageName,
      shortDescription: shortDes,
      metaTitle: metaTitle,
      metaDescription: metaDes,
      type: "blog"
    };
    if (postId) {
      updatePostById(settingsData);
    } else {
      createPost(settingsData);
    }
  };

  return (
    <>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          <WriteNav
            saveToDraft={saveToDraft}
            publishPost={publishPost}
            getSettings={getSettings}
          />
          <div className="h-screen">
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src={TARGET}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
