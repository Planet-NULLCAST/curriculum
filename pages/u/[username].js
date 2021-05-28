import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../component/profile/Navbar";
import ProfileDetails from "../../component/profile/ProfileDetails";
import Head from "next/head";
import Activity from "../../component/profile/Activity";
import Count from "../../component/profile/Count";
import FollowersList from "../../component/profile/FollowersList";
import BlogList from "../../component/profile/BlogList";
import LuckEgg from "../../component/profile/LuckEgg";
import Profilestyles from "../../styles/Profile.module.css";

export default function Username() {
  const [currentNav, setcurrentNav] = useState("profile");

  const changeNav = (data) => {
    setcurrentNav(data);
  };

  return (
    <>
      <Head>
        <title>Profile | Nullcast</title>
      </Head>
      <div className="bg-gray-100 py-2 pb-6 px-6 min-h-screen">
        <div className="max-w-panel">
          <Navbar changeNav={changeNav} currentNav={currentNav} />
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col lg:w-3/4 w-full">
              <ProfileDetails />
              {currentNav === "profile" && (
                <>
                  <Activity />
                  <BlogList />
                </>
              )}
              {currentNav === "store" && <LuckEgg />}
            </div>
            <div
              className={`bg-white shadow-sm rounded lg:w-1/4 w-full mt-3 lg:mt-0 lg:ml-4 p-3 overflow-auto ${Profilestyles.h_max_40rem}`}
            >
              <Count />
              <FollowersList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
