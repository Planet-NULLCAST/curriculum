import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import ListingFeatured from '../component/layout/BlogListing/ListingFeatured';
import Listing from '../component/layout/BlogListing/Listing';
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

export default function BlogListing() {
    return (
        <>
            <SiteHeader />
            <ListingHeader />
            <ListingFeatured />
            <Listing />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}