import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import Listing from "../component/layout/BlogListing/Listing";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionRelated from "../component/layout/BlogPost/SectionRelated";
import Head from "next/head";
import PostService from "../services/PostService";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  try {
    // console.log("query", context.query);
    if (context.query.q) {
      const { msg, posts, count } = await PostService.getPostsByQuery(
        context.query.q,
        context.query.clickNo
      );
      // console.log(posts);
      //get latest posts
      const latestPostsParams = {
        order: -1,
        fieldName: "publishedAt",
        limit: 4,
        skip: 0
      };
      const latestPostResponse = await PostService.getLatestPosts(
        latestPostsParams
      );
      // console.log(latestPostResponse.data.blog);
      return {
        props: {
          posts: posts,
          count: count,
          existingQuery: context.query.q,
          clickNum: parseInt(context.query.clickNo, 10),
          latestPosts: latestPostResponse.data.blog
        }
      };
    } else {
      return {
        // props: {
        //   posts: [],
        //   count: 0
        // },
        redirect: {
          permanent: false,
          destination: "/blog"
        }
      };
    }
  } catch (err) {
    console.log("Error => ", err);
    return {
      props: {
        posts: [],
        count: 0
      }
    };
  }
}

export default function Search({
  posts,
  count,
  existingQuery,
  clickNum,
  latestPosts
}) {
  const [newBlogs, setNewBlogs] = useState(posts);
  const [query, setQuery] = useState("");
  const [clickNo, setClickNo] = useState(clickNum);
  const [resetCount, setResetCount] = useState(false);
  const router = useRouter();
  // console.log({ posts });
  // console.log({ clickNum });

  useEffect(() => {
    setNewBlogs(posts);
  }, [posts]);

  useEffect(() => {
    setQuery(existingQuery);
  }, [existingQuery]);

  const currentCount = (count) => {
    // console.log(count);
    // console.log("query", query);
    setResetCount(false);
    if (!query) {
      getNewPosts(existingQuery, count);
    } else {
      getNewPosts(query, count);
    }
  };

  const getNewPosts = async (query, clickNo) => {
    // console.log({ query });
    const { msg, posts } = await PostService.getPostsByQuery(query, clickNo);
    // console.log(posts);

    setNewBlogs((prevValue) => {
      return [...prevValue, ...posts];
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // let clickNo = 0;
    setClickNo(0);
    setResetCount(true);
    // console.log("search", e.target.search.value);
    const _query = e.target.search.value;
    // console.log(_query);
    setQuery(_query);
    router.push({
      pathname: "/search",
      query: { q: _query, clickNo: 0 }
    });
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Search | Nullcast</title>
      </Head>
      <SiteHeader />
      <div className={`flex flex-row justify-center items-center  m-10`}>
        <form
          className="bg-white px-6 border-2 border-gray-400"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search for blogs"
            className="h-12 w-96"
            name="search"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">
            <svg
              width="20"
              height="13"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.706 5.758L14.456.305a.975.975 0 00-1.42.004c-.392.41-.39 1.074.003 1.482l3.524 3.66H1.004C.45 5.452 0 5.922 0 6.5s.45 1.048 1.004 1.048h15.559l-3.524 3.66a1.081 1.081 0 00-.003 1.483.975.975 0 001.42.004l5.249-5.452a1.083 1.083 0 000-1.485z"
                fill="#000"
              />
            </svg>
          </button>
        </form>
      </div>
      {posts.length ? (
        <Listing
          blog={newBlogs}
          currentCount={currentCount}
          blogCount={count}
          // clickNo={clickNo}
          resetCount={resetCount}
        />
      ) : (
        <div className="flex justify-center items-center m-9 font-semibold">
          We couldn't find any blogs for this query!
        </div>
      )}

      <SectionRelated title="Latest Blogs" posts={latestPosts} />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
