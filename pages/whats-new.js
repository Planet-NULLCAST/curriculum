import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import WhatsNewSpotlight from "../component/layout/WhatsNew/WhatsNewSpotlight";
import WhatsNewPosts from "../component/layout/WhatsNew/WhatsNewPosts";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import PostService from "../services/PostService";
import notify from "../lib/notify";

export async function getServerSideProps(context) {
  try {
    let tag = context.query.tag;
    let searchArray = ["whats-new"];
    if (tag) {
      searchArray = ["whats-new", tag];
    }
    const {
      data: { posts, count }
    } = await PostService.getPostByTags(searchArray, 0);
    return {
      props: {
        blogs: posts
      }
    };
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");

    return {
      props: {
        blogs: []
      }
    };
  }
}

export default function whatsNew({ blogs }) {
  console.log(blogs);
  return (
    <>
      <Head>
        <title> What's new | Nullcast</title>
      </Head>
      <SiteHeader />
      <WhatsNewSpotlight />
      <WhatsNewPosts blogs={blogs} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
