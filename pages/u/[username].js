import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../component/profile/Navbar";
import Head from "next/head";

import Activity from "../../component/profile/Activity";
import ProfileDetails from "../../component/profile/ProfileDetails";
import Count from "../../component/profile/Count";
import FollowersList from "../../component/profile/FollowersList";
import BlogList from "../../component/profile/BlogList";
import LuckEgg from "../../component/profile/LuckEgg";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import UserService from "../../services/UserService";
import PostService from "../../services/PostService";

import Profilestyles from "../../styles/Profile.module.css";

export async function getServerSideProps(context) {
  try {
    const username = context.params.username;
    const userData = await UserService.getUserByUsername(username);
    const blogCount = await PostService.getPostCountByUserName(username);
    const limit = 5;
    const blogs = await PostService.getAllPostsByUsername(username, limit);
    if (!userData || blogCount == "") {
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      };
    }
    return {
      props: {
        userData: userData,
        blogCount : blogCount.count,
        blogs : blogs.allPosts,
      }
    };
  } catch (err) {
    //Redirect to 404 page if there is any kind of error
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    };
  }
}

export default function Username(props) {
  const [currentNav, setcurrentNav] = useState("profile");

  const changeNav = (data) => {
    setcurrentNav(data);
  };

  return (
    <div>
      <Head>
        <title>Profile | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6">
        <Navbar changeNav={changeNav} currentNav={currentNav} />
        <div className="flex lg:flex-row flex-col max-w-panel min-h-screen">
          <div className="flex flex-col lg:w-3/4 w-full">
            <ProfileDetails userData={props.userData} />
            {currentNav === "profile" && (
              <>
                <Activity />
                <BlogList blogs={props.blogs} />
              </>
            )}
            {currentNav === "store" && <LuckEgg />}
          </div>
          <div
            className={`bg-white shadow-sm rounded lg:w-1/4 w-full mt-3 lg:mt-0 lg:ml-4 p-3 overflow-auto ${Profilestyles.h_max_40rem}`}
          >
            <Count blogCount={props.blogCount} />
            <FollowersList />
          </div>
        </div>
      </div>
    </div>
  );
}
