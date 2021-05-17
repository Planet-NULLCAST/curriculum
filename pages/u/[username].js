import React from "react";
import Navbar from "../../component/profile/Navbar";
import ProfileDetails from "../../component/profile/ProfileDetails";
import Head from "next/head";
import Activity from "../../component/profile/Activity";
import Count from "../../component/profile/Count";
import FollowersList from "../../component/profile/FollowersList";
import BlogList from "../../component/profile/BlogList";
import Profilestyles from "../../styles/Profile.module.css";

export default function Username() {
  return (
    <>
      <Head>
        <title>Profile | Nullcast</title>
      </Head>
      <div className="bg-gray-100 py-2 pb-6 px-6">
        <Navbar />
        <div className="flex flex-row">
          <div className="flex flex-col w-3/4">
            <ProfileDetails />
            <Activity />
            <BlogList />
          </div>
          <div
            className={`bg-white shadow-sm rounded w-1/4 ml-4 p-3 overflow-auto ${Profilestyles.h_max_40rem}`}
          >
            <Count />
            <FollowersList />
          </div>
        </div>
      </div>
    </>
  );
}
