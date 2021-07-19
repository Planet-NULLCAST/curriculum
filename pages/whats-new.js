import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import WhatsNewSpotlight from "../component/layout/WhatsNew/WhatsNewSpotlight";
import WhatsNewPosts from "../component/layout/WhatsNew/WhatsNewPosts";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import PostService from "../services/PostService";

export async function getServerSideProps(context) {
  try {
    const blogs = await PostService.getPostByTags("whats-new", 0);
    if (!blogs?.data) {
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      };
    }
    console.log(blogs.posts, "-------");
    return {
      props: {
        blogs: blogs.posts
      }
    };
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
