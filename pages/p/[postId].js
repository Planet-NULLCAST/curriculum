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
import { ProgressPlugin } from "webpack";

// unsure on using getServerSideProps
// if facing SEO issues refer
// https://andrei-calazans.com/posts/2021-05-06/next-js-when-to-use-get-server-side-props
// https://stackoverflow.com/questions/66294596/nextjs-getstaticprops-and-getserversideprops

export async function getServerSideProps(context) {
  try {
    const postId = context.params.postId;
    let userId = "";
    let token = "";

    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        userId = cookie.id;
        token = cookie.accessToken;

        const response = await PostService.getPostById(cookie, postId);
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
            posts: response,
            token: token,
            userId: userId
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

const HighlightedLink = ({ text = "" }) => {
    var regexLink = new RegExp(`(${"^(https://www.youtube.com/).* $"})`, "gi");
    var textParts = text.split(regexLink);
    if(textParts.length != 1){
      return (
        textParts.filter(String).map((part) => {
            return regexLink.test(part) ? (
              <span style="color:blue;">{part}</span>
            ) : (
              <span>{part}</span>
            );
          })
      );
    }else{
      return <span>{text}</span>;
    }
};

export default function BlogListing(props) {
  const { html, primaryAuthor, title, bannerImage, createdAt } = props.posts;
  return (
    <>
      <Head>
        <title> {title} ( preview )</title>
      </Head>
      <SiteHeader />
      <BlogSpotlight
        title={title}
        bannerImage={bannerImage}
        createdAt={createdAt}
        primaryAuthor={primaryAuthor}
      />
      <BlogPost
        userId={props.userId}
        token={props.token}
        blog = {
        <HighlightedLink
          text = {props.posts}
        />
        }
        html={html}
      />
      <SectionAuthor primaryAuthor={primaryAuthor} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
