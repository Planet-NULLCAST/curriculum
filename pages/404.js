import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import NotFound from '../component/layout/404/NotFound';
import SectionRelated from "../component/layout/BlogPost/SectionRelated";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";

export default function BlogListing() {
  return (
    <>
      <SiteHeader />
      <NotFound />
      <SectionRelated title="Recent Blogs" />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
