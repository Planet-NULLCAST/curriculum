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
import { baseUrl, clientUrl } from "../config/config";
import PostService from "../services/PostService";

export async function getServerSideProps(context) {
  try {
    const reqParams = {
      fieldName: 'publishedAt',
      order:-1,
      limit:4,
      skip:0
    }
    const response = await PostService.getLatestPosts(reqParams);
    return {
      props: { blog: response.data.blog }
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default function Home(props) {
  // console.log(process.env.ENV, baseUrl, clientUrl);
  return (
    <div className="wrap">
      <Head>
        <title>Home | Nullcast</title>
      </Head>
      <SiteHeader />
      <HomeSpotlight />
      <SectioBlogs 
        blog={props.blog}
      />
      <SectionVideos />
      <SectionUsers />
      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
