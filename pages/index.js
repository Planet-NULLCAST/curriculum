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
import EventService from "../services/EventService";
import UserService from "../services/UserService";
import { homePageSchema, logoPath, url } from "../seoschema/schema";
import notify from "../lib/notify";
import LoadingOverlay from "react-loading-overlay";
import { addCourses } from "../courses/meta";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

export async function getServerSideProps(context) {
  try {
    const postParams = {
      // sort_field: "published_at",
      status: "published",
      order: "DESC",
      limit: 4,
      page: 1,
      sort_field: "featured"
      // with_table: "users"
    };
    const userParams = {
      limit: 10
    };
    const responsePost = await PostService.getPostsByUsers(postParams);
    const { data } = await UserService.getLatestUsers(userParams);
    const eventParams = {
      sort_field: "event_time",
      order: "ASC",
      limit: 1,
      status: "published",
      page: 1,
      with_table: "users, tags"
    };
    const responseEvents = await EventService.getLatestEvents(eventParams);
    console.log(responseEvents, "events");
    return {
      props: {
        posts: responsePost?.data?.posts || [],
        user: data?.users || [],
        events: responseEvents?.events[0] || []
        // count: responseEvents.count,
        // limit: responseEvents.limit
      }
    };
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return { props: { posts: [], events: [], user: [] } };
  }
}
//addCourses()
export default function Home({ posts, user, events }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
      <LoadingOverlay
        active={loading}
        spinner={<SyncLoader color="#000" />}
        className="w-full h-screen"
        styles={{
          overlay: (base) => ({
            ...base,
            background: "#fff",
            color: "#fff",
            backgroundImage: 'url("/images/gif/xma.gif")',
            backgroundSize: "contain",
            fontSize: 36,
            fontWeight: "600",
            display: "flex",
            flexDirection: "column",
            position:'fixed'
          })
        }}
      >
        <SiteHeader />
        <HomeSpotlight />
        {posts && <SectionBlogs posts={posts} />}

        <SectionVideos />
        {user && <SectionUsers user={user} />}

        {events && <SectionEvents events={events} />}
        <SectionSwag />
        <SiteFooter />
      </LoadingOverlay>
    </div>
  );
}
