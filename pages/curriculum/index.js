import Head from "next/head";
import { courses, addCourses } from "../../courses/meta";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import CourseSpotlight from "../../component/layout/CourseSpotlight/CourseSpotlight";
import CourseList from "../../component/layout/CourseList/CourseList";
import CourseJourney from "../../component/layout/CourseJourney/CourseJourney";
import SiteFooter from "../../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../../component/layout/SectionSwag/SectionSwag";

export default function Courses() {
  // addCourses();

  const contents = {
    type: "courses",
    title: "School of Ducks",
    subtitle: "Want to be a Mighty Duck?",
    description: "Get Ready to leave the pond and dive straight into the ever changing rapid stream of Web development.",
    buttonText: "Get Started for free",
    image: "/images/illustration-1.svg",
    alt: "Want to be a Mighty Duck?",
    imageWidth: 482,
    imageHeight: 377,
    bgcolor: "#1B0A33",
    bgimage: "bg1"
  };
  return (
    <div>
      <Head>
        <title> Curriculum | Nullcast </title>
      </Head>
      <SiteHeader />
      <CourseSpotlight contents={contents} />
      <CourseList courses={courses} />
      <CourseJourney />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
