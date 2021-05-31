import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../component/myblogs/Navbar";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import baseUrl from "../../config/config";
const axios = require("axios");

export default function Mypost() {
  useEffect(() => {
    // axios
    //   .get(`http://localhost:8080/api/posts`)
    //   .then((response) => {
    //     if (response) {
    //       console.log("blog listed");
    //     } else {
    //       console.log("err");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
  }, []);

  const data = {
    msg: "Posts: ",
    data: [
      {
        tags: ["css", "html"],
        _id: "60b0899c3397112295ded7fc",
        userId: "60a4d5ac2871874c835ca542",
        url: "ww/ww/",
        createdBy: "60a4d5ac2871874c835ca542",
        updatedBy: "person b",
        html: "</a>",
        title: "person a post 21",
        mobiledoc: "mobiledoc",
        status: "approved",
        featured: true,
        canonicalUrl: "ww/www",
        primaryTag: "css",
        primaryAuthor: {
          _id: "60b0899c3397112295ded7fd",
          firstName: "person b"
        },
        contributors: [
          {
            _id: "60b0899c3397112295ded7fe",
            firstName: "person c"
          },
          {
            _id: "60b0899c3397112295ded7ff",
            firstName: "person d"
          }
        ],
        bannerImage: "img",
        metaTitle: "some article",
        metaDescription: "some description",
        type: "type",
        createdAt: "2021-05-22T06:11:40.644Z",
        updatedAt: "2021-05-28T06:11:40.644Z",
        __v: 0
      }
    ]
  };
  return (
    <>
      <Head>
        <title>My Posts | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          <Navbar />
          <MyBlogs data={data} />
        </div>
      </div>
    </>
  );
}
