import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import ListingFeatured from "../component/layout/BlogListing/ListingFeatured";
import Listing from "../component/layout/BlogListing/Listing";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import PostService from "../services/PostService";
import TagService from "../services/TagService";
import { useState } from "react";
import { homePageSchema, logoPath, url } from "../seoschema/schema";

export async function getServerSideProps() {
  const limit = 10; //should be 10
  const filterWhatsNew = true;
  const tagsArray = await TagService.getTags(filterWhatsNew);
  console.log(tagsArray);
  try {
    const postParams = {
      fieldName: "publishedAt",
      order: -1,
      limit: limit,
      skip: 0
    };
    const responsePost = await PostService.getLatestPosts(postParams);
    // console.log(responsePost.data);
    if (responsePost.data.blog.length > 0) {
      return {
        props: {
          blog: responsePost.data.blog,
          tagsArray: tagsArray,
          count: responsePost.data.count,
          limit: limit
        }
      };
    } else {
      return {
        props: {
          blog: [],
          tagsArray: tagsArray,
          count: 0
        }
      };
    }
  } catch (err) {
    console.log("Error => ", err);
    return {
      props: {}
    };
  }
}

export default function BlogListing({ blog, tagsArray, count, limit }) {
  // console.clear();
  // console.log(tagsArray);
  const [newBlogs, setNewBlogs] = useState(blog);

  const currentCount = (count) => {
    // console.log(count);
    getNewPosts(count);
  };

  const getNewPosts = async (clickNo) => {
    const postParams = {
      fieldName: "publishedAt",
      order: -1,
      limit: limit,
      skip: clickNo * limit
    };
    const responsePost = await PostService.getLatestPosts(postParams);
    // console.log(responsePost.data.blog);
    // console.log(posts, count);

    setNewBlogs((prevValue) => {
      return [...prevValue, ...responsePost.data.blog];
    });
  };
  return (
    <div>
      <Head>
        <title>Blog | Nullcast</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...homePageSchema,
              url: `${url}/blog`,
              description: "blog"
            })
          }}
        ></script>
        <meta
          name="description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <link rel="canonical" href={`${url}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="blog" />
        <meta
          property="og:description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <meta property="og:url" content={`${url}/blog`} />
        <meta property="og:image" content={logoPath} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="blog" />
        <meta
          name="twitter:description"
          content="nullcast is a series of blogs, podcasts and short videos for everything web related."
        />
        <meta name="twitter:url" content={`${url}/blog`} />
        <meta name="twitter:image" content={logoPath} />
        <meta property="og:image:width" content="352" />
        <meta property="og:image:height" content="212" />
      </Head>
      <SiteHeader />
      <ListingHeader />
      {blog && blog[0] && <ListingFeatured blog={blog[0]} />}
      {blog.length > 0 ? (
        <Listing
          blog={newBlogs}
          tagsArray={tagsArray}
          currentCount={currentCount}
          blogCount={count}
        />
      ) : (
        <div className="flex items-center justify-center m-9 font-semibold">
          There's no published blogs yet!
        </div>
      )}

      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
