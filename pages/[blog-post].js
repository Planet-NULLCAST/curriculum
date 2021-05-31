import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import BlogSpotlight from '../component/layout/BlogPost/BlogSpotlight';
import BlogPost from '../component/layout/BlogPost/BlogPost';
import SectionAuthor from '../component/layout/BlogPost/SectionAuthor';
import SectionRelated from '../component/layout/BlogPost/SectionRelated';
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

export default function BlogListing() {
    return (
        <>
            <SiteHeader />
            <BlogSpotlight />
            <BlogPost />
            <SectionAuthor />
            <SectionRelated />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}