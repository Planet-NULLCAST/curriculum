import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from "../../component/layout/BlogPost/BlogSpotlight";
import BlogPost from "../../component/layout/BlogPost/BlogPost";
import SectionAuthor from "../../component/layout/BlogPost/SectionAuthor";
import SectionSwag from "../../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../../component/layout/SiteFooter/SiteFooter";
import PostService from "../../services/PostService";
import { getCookieValue } from "../../lib/cookie";
import Head from "next/head";
import notify from "../../lib/notify";

// unsure on using getServerSideProps
// if facing SEO issues refer
// https://andrei-calazans.com/posts/2021-05-06/next-js-when-to-use-get-server-side-props
// https://stackoverflow.com/questions/66294596/nextjs-getstaticprops-and-getserversideprops

export async function getServerSideProps(context) {
  try {
    const postId = context.params.postId;
    let userId = "";
    // let token = "";

    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        userId = cookie.id;
        // token = cookie.accessToken;

        const response = await PostService.getPostById(postId);
        const postParams = {
          status: "published",
        };
        const count = await PostService.getPostCount(userId, postParams);
        console.log(count.data.count, 'count')
        // console.log('ysggh',response);
        if (!response) {
          return {
            redirect: {
              permanent: false,
              destination: "/404"
            }
          };
        }
        return {
          props: {
            posts: response.data,
            count: count.data.count,
            // token: token,
            userId: userId,
          }
        };
      }
    } else {
      // console.log("else");
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, 'error');
    return {
      props: {}
    };
  }
}

export default function BlogListing(props,response) {
  const { html, title, banner_image, created_at, user } = props.posts;
  const count = props.count;
  return (
    <>
      <Head>
        <title> {title} ( preview )</title>
      </Head>
      <SiteHeader />
      <BlogSpotlight
        title={title}
        bannerImage={banner_image}
        createdAt={created_at}
        primaryAuthor={user}
      />
      <BlogPost
        userId={props.userId}
        vote={false}
        blog={props.posts}
        html={html}
      />
      <SectionAuthor primaryAuthor={user} postCount={count} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
