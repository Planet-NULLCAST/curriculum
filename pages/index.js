import HomeSpotlight from "../component/layout/HomeSpotlight/HomeSpotlight";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SectioBlogs from "../component/layout/SectionBlogs/SectionBlogs";
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

export async function getServerSideProps(context) {
  try {
    const postParams = {
      sort_field: "published_at",
      order: "ASC",
      limit: 2,
      page: 1,
      with_table: "users, tags"
    };
    // const userParams = {
    //   fieldName: "createdAt",
    //   order: -1,
    //   limit: 10,
    //   skip: 0
    // };
    const responsePost = await PostService.getLatestPosts(postParams);
    // const responseUser = await UserService.getLatestUsers(userParams);
    return {
      props: { blog: responsePost.data }
    };
  } catch (err) {
    console.log("Error => ", err);
    return { props: { blog: [] } };
  }
}

export default function Home({ blog }) {
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
      {blog && blog[0] && <SectioBlogs blog={blog} />}

      <SectionVideos />
      {/* {user && <SectionUsers user={user} />} */}

      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
