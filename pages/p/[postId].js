import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from "../../component/layout/BlogPost/BlogSpotlight";
import BlogPost from "../../component/layout/BlogPost/BlogPost";
import SectionAuthor from "../../component/layout/BlogPost/SectionAuthor";
import SectionRelated from "../../component/layout/BlogPost/SectionRelated";
import SectionSwag from "../../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../../component/layout/SiteFooter/SiteFooter";

import PostService from "../../services/PostService";
import { getCookieValue } from "../../lib/cookie";

// unsure on using getServerSideProps
// if facing SEO issues refer 
// https://andrei-calazans.com/posts/2021-05-06/next-js-when-to-use-get-server-side-props
// https://stackoverflow.com/questions/66294596/nextjs-getstaticprops-and-getserversideprops

export async function getServerSideProps(context) {
  try {
    const postId = context.params['postId'];
    if (context.req.headers.cookie) {
      const cookie = JSON.parse(getCookieValue(context.req.headers.cookie, 'userNullcast'));
      const response = await PostService.getPostById(cookie, postId);
      if(!response) {
        return {
          redirect: {
            permanent: false,
            destination: "/404"
          }
        }
      }
      return {
          props: { posts: response}
       }
    }  else {
      console.log('else');
        return {
            redirect: {
              permanent: false,
              destination: "/404"
            }
        }
    }
  } catch (err) {
      console.log('Error => ', err);
  }
  
}

export default function BlogListing(props) {
  const { html, primaryAuthor, title, bannerImage, createdAt } = props.posts;
  return (
    <>
      <SiteHeader />
      <BlogSpotlight 
        title={title}
        bannerImage={bannerImage}
        createdAt={createdAt}
        primaryAuthor={primaryAuthor}
      />
      <BlogPost 
        html={html}
      />
      <SectionAuthor 
        primaryAuthor={primaryAuthor}      
      />
      <SectionRelated title="Related Blogs" />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
