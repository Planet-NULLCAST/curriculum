import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from '../component/layout/BlogPost/BlogSpotlight';
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

export default function BlogListing() {
    return (
        <>
            <SiteHeader />
            <BlogSpotlight />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}