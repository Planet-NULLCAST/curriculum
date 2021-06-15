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
import UserService from "../services/UserService";

export async function getServerSideProps(context) {
  try {
    const postParams = {
      fieldName: 'publishedAt',
      order:-1,
      limit:4,
      skip:0
    }
    const userParams = {
      fieldName:'createdAt',
      order:-1,
      limit:10,
      skip:0
    }
    const responsePost = await PostService.getLatestPosts(postParams);
    const responseUser = await UserService.getLatestUsers(userParams);
    return {
      props: { blog: responsePost.data.blog, user: responseUser.data.user }
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
      <SectionUsers 
        user={props.user}
      />
      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
