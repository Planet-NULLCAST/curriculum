import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import ListingFeatured from "../component/layout/BlogListing/ListingFeatured";
import Listing from "../component/layout/BlogListing/Listing";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import PostService from "../services/PostService";
import { useState } from "react";
import { homePageSchema, logoPath, url } from "../seoschema/schema";
import notify from "../lib/notify";

export async function getServerSideProps() {
  const limit = 10; //should be 10
  // const filterWhatsNew = true;
  // const tagsArray = await TagService.getTags(filterWhatsNew);

  try {
    const postParams = {
      // sort_field: "published_at",
      order: "DESC",
      status: "published",
      limit: limit,
      page: 1
      // with_table: "users, tags"
    };
    const { data } = await PostService.getPostsByUsers(postParams);
    if (data.posts.length > 0) {
      return {
        props: {
          blog: data.posts,
          // tagsArray: tagsArray,
          count: 2,
          limit: limit
        }
      };
    } else {
      return {
        props: {
          blog: [],
          // tagsArray: tagsArray,
          count: 0
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return {
      props: {}
    };
  }
}

export default function BlogListing({ blog, count, limit }) {
  const tagsArray = [
    {
      count: 0,
      status: "enabled",
      _id: "610299948fb9dadb439a392f",
      name: "css",
      user_id: "610296398fb9dadb439a392c",
      createdAt: "2021-07-29T12:05:40.984Z",
      updatedAt: "2021-07-29T12:05:40.984Z",
      __v: 0
    },
    {
      count: 0,
      status: "enabled",
      _id: "610299a78fb9dadb439a3930",
      name: "fix",
      user_id: "610296398fb9dadb439a392c",
      createdAt: "2021-07-29T12:05:59.672Z",
      updatedAt: "2021-07-29T12:05:59.672Z",
      __v: 0
    }
  ];
  const [newBlogs, setNewBlogs] = useState(blog);

  const currentCount = (count) => {
    getNewPosts(count);
  };

  const getNewPosts = async (clickNo) => {
    const postParams = {
      // sort_field: "published_at",
      // order: "ASC",
      status: "published",
      limit: limit,
      page: 1
      // with_table: "users, tags"
    };
    try {
      const { data } = await PostService.getPostsByUsers(postParams);
      console.log(data, 'success');  
      setNewBlogs((prevValue) => {
        return [...prevValue, ...data.posts];
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
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
      {blog && <ListingFeatured blog={blog[0]} />}
      {blog?.length > 0 ? (
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
