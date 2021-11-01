import HomeSpotlight from "../component/layout/HomeSpotlight/HomeSpotlight";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SectionBlogs from "../component/layout/SectionBlogs/SectionBlogs";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionVideos from "../component/layout/SectionVideos/SectionVideos";
import SectionEvents from "../component/layout/SectionEvents/SectionEvents";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SectionUsers from "../component/layout/SectionUsers/SectionUsers";
import Head from "next/head";
import "../styles/Home.module.scss";
import PostService from "../services/PostService";
import UserService from "../services/UserService";
import { homePageSchema, logoPath, url } from "../seoschema/schema";
import notify from "../lib/notify";

export async function getServerSideProps(context) {
  try {
    const postParams = {
      sort_field: "published_at",
      status: "published",
      order: "ASC",
      limit: 4,
      page: 1,
      with_table: "users"
    };
    const userParams = {
      limit: 10
    };
    const responsePost = await PostService.getLatestPosts(postParams);
    // console.log(responsePost.posts[0].user);
    const responseUser = await UserService.getLatestUsers(userParams);
    // console.log(responseUser);
    return {
      props: {
        posts: responsePost.posts || [],
        user: responseUser
      }
    };
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, 'error');
    return { props: { blog: [] } };
  }
}

export default function Home({ posts, user }) {
  // console.log(process.env.ENV, baseUrl, clientUrl);
  return (
    <div className="wrap">
      <Head>
        <title>Home | Nullcast</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        ></script>
        <meta
          name="description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nullcast" />
        <meta
          property="og:description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={logoPath} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="nullcast" />
        <meta
          name="twitter:description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={logoPath} />
        <meta property="og:image:width" content="352" />
        <meta property="og:image:height" content="212" />
      </Head>
      <SiteHeader />
      <HomeSpotlight />
      {posts && posts[0] && <SectionBlogs posts={posts} />}

      <SectionVideos />
      {user && <SectionUsers user={user} />}

      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
