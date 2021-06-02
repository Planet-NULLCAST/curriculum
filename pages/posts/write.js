import React, { useRef, useEffect, useState } from "react";
import WriteNav from "../../component/myblogs/WriteNav";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import { env } from "../../next.config";

const TARGET = env.EDITOR_URL;

export default function Username() {
  const [currentNav, setcurrentNav] = useState("profile");
  const [post, setPost] = useState(null);
  const iframeRef = useRef();

  useEffect(() => {
    console.log(process.env);
    // TODO: make api call to get the corresponding post
    // TODO: after getting the post sent a post message to the iframe
    // with { msg: providePost, post: {mobiledoc: required, title} }

    window.addEventListener(
      "message",
      (event) => {
        // IMPORTANT: check the origin of the data!
        if (event.isTrusted && event.origin.startsWith(TARGET)) {
          if (event.data.post) {
            console.log("message recieved", event);
            setPost(event.data.post);
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
      document.removeEventListener("message", () =>
        console.log("listener removed")
      );
    };
  }, []);

  const changeNav = (data) => {
    setcurrentNav(data);
  };

  const saveBlog = () => {
    // Send a post message to the iframe
    iframeRef.current.contentWindow.postMessage({ msg: "savePost" }, TARGET);
    setTimeout(() => {
      // wait for the response post message to get the post from the state
      console.log(post);

      // TODO: make api call to create or edit post
      // Optimize the timeout accordingly
    }, 500);
  };

  return (
    <>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          {/* <Navbar /> */}
          <WriteNav saveToDraft={saveBlog} />
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
