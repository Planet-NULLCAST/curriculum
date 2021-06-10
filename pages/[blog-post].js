import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from "../component/layout/BlogPost/BlogSpotlight";
import BlogPost from "../component/layout/BlogPost/BlogPost";
import SectionAuthor from "../component/layout/BlogPost/SectionAuthor";
import SectionRelated from "../component/layout/BlogPost/SectionRelated";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

import PostService from "../services/PostService";

export async function getServerSideProps(context) {
  const slug = Object.values(context.params)[0];
    const response = await PostService.getPostBySlug(slug);

    if(!response) {
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      }
    }
  return {
    props: { blog: response.data.blog}
  }
}

export default function BlogListing(props) {
  const { html, primaryAuthor, title, bannerImage, createdAt } = props.blog;
  // console.log(props.blog);
  return (
    <>
      <SiteHeader />
      <BlogSpotlight 
        title={title}
        bannerImage={bannerImage}
        createdAt={createdAt}
      />
      <BlogPost 
        html={html}
      />
      <SectionAuthor 
        data={primaryAuthor}
      />
      <SectionRelated title="Related Blogs" />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
