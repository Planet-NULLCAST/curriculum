import HomeSpotlight from "../component/layout/HomeSpotlight/HomeSpotlight";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SectioBlogs from "../component/layout/SectionBlogs/SectionBlogs";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionVideos from "../component/layout/SectionVideos/SectionVideos";
import SectionEvents from "../component/layout/SectionEvents/SectionEvents";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SectionUsers from "../component/layout/SectionUsers/SectionUsers";
import Head from "next/head";

// import "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Home | Nullcast</title>
      </Head>
      <SiteHeader />
      <HomeSpotlight />
      <SectioBlogs />
      <SectionVideos />
      <SectionUsers />
      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
