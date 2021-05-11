import HomeSpotlight from "../component/layout/HomeSpotlight/HomeSpotlight";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SectioBlogs from "../component/layout/SectionBlogs/SectionBlogs";
import "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="wrap">
      <SiteHeader />
      <HomeSpotlight />
      <SectioBlogs />
    </div>
  );
}