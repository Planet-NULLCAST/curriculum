import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import ListingFeatured from "../component/layout/BlogListing/ListingFeatured";
import Listing from "../component/layout/BlogListing/Listing";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import PostService from "../services/PostService";

export async function getServerSideProps(context) {
  try {
    const postParams = {
      fieldName: 'publishedAt',
      order:-1,
      limit:9,
      skip:0
    }
    const responsePost = await PostService.getLatestPosts(postParams);

    return {
      props: { blog: responsePost.data.blog }
    }
  } catch (err) {
    console.log('Error => ', err);
    return err;
  }
}

export default function BlogListing(props) {
  return (
    <div>
      <Head>
        <title>Blog | Nullcast</title>
      </Head>
      <SiteHeader />
      <ListingHeader />
      <ListingFeatured 
        blog={props.blog}
      />
      <Listing 
        blog={props.blog}
      />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
