import React, { useRef, useEffect, useState } from "react";
import WriteNav from "../../component/myblogs/WriteNav";
import MyBlogs from "../../component/myblogs/MyBlogs";
import Head from "next/head";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";

export default function Username() {
  const [currentNav, setcurrentNav] = useState("profile");

  const changeNav = (data) => {
    setcurrentNav(data);
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
          <WriteNav />
        </div>
      </div>
    </>
  );
}
