import { useState, useEffect } from "react";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from "../component/layout/BlogPost/BlogSpotlight";
import BlogPost from "../component/layout/BlogPost/BlogPost";
import SectionAuthor from "../component/layout/BlogPost/SectionAuthor";
import SectionRelated from "../component/layout/BlogPost/SectionRelated";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import PostService from "../services/PostService";
import Cookies from "universal-cookie";
import { url, logoPath } from "../seoschema/schema";
import notify from "../lib/notify";

// unsure on using getServerSideProps
// if facing SEO issues refer
// https://andrei-calazans.com/posts/2021-05-06/next-js-when-to-use-get-server-side-props
// https://stackoverflow.com/questions/66294596/nextjs-getstaticprops-and-getserversideprops

export async function getServerSideProps(context) {
  try {
    const slug = context.params.blogPost;
    const response = await PostService.getPostBySlug(slug);
    const tagName = response.data.tags[0].name; 
    const { data }  = await PostService.getPostByTags(tagName);
    return {
      props: {
        blog: response.data,
        relatedPosts: data.posts,
      }
    };
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    };
  }
}

export default function BlogListing({ blog , relatedPosts }) {
  // console.log("bloga", relatedPosts, 'error');
  const [postsCount, setPostsCount] = useState(0);
  const {
    html,
    user,
    title,
    banner_image,
    created_at,
    canonicalUrl,
    published_at,
    updatedAt,
    metaDescription
  } = blog;
  // console.log(relatedPosts);
  // const {}
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  return (
    <>
      <SiteHeader />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "publisher": {
                "@type": "Organization",
                "name": "Nullcast Blog",
                "logo": `${logoPath}`
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${url}`
              },
              "author": {
                "@type": "Person",
                "name": `${user.user_name}`,
                "image": {
                  "@type": "ImageObject",
                  "url": `${user.avatar}`,
                  "width": 1200,
                  "height": 1200
                },
                "url": `${url}/u/${user.user_name}`,
                "sameAs": []
              },
              "headline": `${title}`,
              "url": `${canonicalUrl}`,
              "datePublished": `${published_at}`,
              "dateModified": `${updatedAt}`,
              "image": {
                "@type": "ImageObject",
                "url": `${banner_image}`,
                "width": 1500,
                "height": 843
              },
              "keywords": "",
              "description": `${metaDescription}`
            })
          }}
        ></script>
        <title>{title}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={blog.canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:url" content={blog.canonicalUrl} />
        <meta property="og:image" content={blog.banner_image} />
        <meta property="article:published_time" content={blog.published_at} />
        <meta property="article:modified_time" content={blog.updatedAt} />
        <meta property="article:tag" content={blog.tags[0]} />

        <meta name="twitter:card" content={blog.banner_image} />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:url" content={blog.canonicalUrl} />
        <meta name="twitter:image" content={blog.banner_image} />
        <meta name="twitter:label1" content="Written By" />
        <meta name="twitter:data1" content={blog.user.user_name} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <BlogSpotlight
        title={title}
        bannerImage={banner_image}
        createdAt={created_at}
        primaryAuthor={user}
      />
      <BlogPost
        userId={userCookie ? userCookie.id : ""}
        token={userCookie ? userCookie.accessToken : ""}
        blog={blog}
        html={html}
      />
      <SectionAuthor primaryAuthor={user}  postCount={postsCount} />
      <SectionRelated title="Related Blogs" posts={relatedPosts} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
