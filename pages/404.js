import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import NotFound from "../component/layout/404/NotFound";
import SectionRelated from "../component/layout/BlogPost/SectionRelated";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import PostService from "../services/PostService";
import Head from "next/head";

export async function getStaticProps() {
  try {
    const latestPostsParams = {
      order: -1,
      fieldName: "publishedAt",
      limit: 4,
      skip: 0
    };
    const latestPostResponse = await PostService.getLatestPosts(
      latestPostsParams
    );
    // console.log(latestPostResponse.data.blog);
    return {
      props: {
        latestPosts: latestPostResponse.data.blog
      }
    };
  } catch (err) {
    console.log("Error =====>", err);
    return {
      props: {}
    };
  }
}

export default function NotFound404({ latestPosts }) {
  // console.log({ latestPosts });
  return (
    <>
      <Head>
        <title> Not Found! </title>
      </Head>
      <SiteHeader />
      <NotFound />
      <SectionRelated title="Recent Blogs" posts={latestPosts} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
