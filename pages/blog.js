import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import ListingFeatured from "../component/layout/BlogListing/ListingFeatured";
import Listing from "../component/layout/BlogListing/Listing";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";

export default function BlogListing() {
  return (
    <div>
      <Head>
        <title>Blog | Nullcast</title>
      </Head>
      <SiteHeader />
      <ListingHeader />
      <ListingFeatured />
      <Listing />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
