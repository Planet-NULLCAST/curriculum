import { useState,useEffect } from "react";
import {useRouter} from "next/router";

import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import WhatsNewSpotlight from "../component/layout/WhatsNew/WhatsNewSpotlight";
import WhatsNewPosts from "../component/layout/WhatsNew/WhatsNewPosts";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import PostService from "../services/PostService";

export async function getServerSideProps(context) {
  try {
    let tag = context.query.tag
    let searchArray = ["whats-new"]
    if (tag) {
      searchArray = ["whats-new", tag]
    }
    const { posts, count } = await PostService.getPostsByMultipleTags(searchArray, 0);
    return {
      props: {
        blogs: posts
      }
    }
  } catch (err) {
    console.log("Error => ", err);
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    };
  }
}

export default function whatsNew(props) {
  return (
    <>
      <SiteHeader />
      <WhatsNewSpotlight />
      <WhatsNewPosts blogs={props.blogs} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
