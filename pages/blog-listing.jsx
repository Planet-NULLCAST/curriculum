import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import ListingHeader from "../component/layout/ListingHeader/ListingHeader";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

export default function BlogListing() {
    return (
        <>
            <SiteHeader />
            <ListingHeader />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}