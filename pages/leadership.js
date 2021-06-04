import Head from "next/head";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import Landing from "../component/leadership/Landing";
import Tabs from "../component/leadership/Tabs";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";

export default function Leadership() {

  const contents = {
    type: "courses",
    title: "Leadership",
    subtitle:
      "Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more",
    buttonText: "Get Started for free",
    image: "/images/bg-coursespotlight2.svg",
    alt: "Want to be a Mighty Duck?",
    imageWidth: 482,
    imageHeight: 377,
    bgcolor: "#083644"
    // bgimage: "bg1"
  };
  return (
    <div>
      <Head>
        <title>Leadership | Nullcast </title>
      </Head>
      <SiteHeader />
      <Landing contents={contents} />
      <Tabs />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
