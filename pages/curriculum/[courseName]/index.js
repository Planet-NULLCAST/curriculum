import { getAllCourseIds, getCourseData } from "../../../lib/jslist";
import { getCourse } from "../../../lib/getCourse";
import Head from "next/head";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import CourseSpotlight from "../../../component/layout/CourseSpotlight/CourseSpotlight";
import ChapterOverview from "../../../component/layout/ChapterOverview/ChapterOverview";
import ChapterList from "../../../component/layout/ChapterList/ChapterList";
import SiteFooter from "../../../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../../../component/layout/SectionSwag/SectionSwag";

export async function getStaticPaths() {
  const paths = await getAllCourseIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const courseData = await getCourseData(params.courseName);
  // console.log(courseData);
  return {
    props: {
      params,
      courseData
    }
  };
}

export default function CourseName({ courseData, params }) {
  // console.log(courseData, params);
  const currentCourseName = params.courseName;

  let currentCourse = getCourse(currentCourseName);
  // console.log(currentCourse);

  let { courseName, courseUrl } = currentCourse;
  let currentChapters = currentCourse.chapters;
  // console.log(courseName, currentChapters);

  const contents = {
    type: "chapters",
    title: `Learn ${courseName}`,
    buttonText: "Start",
    image: "/images/illustration-1.svg",
    alt: `Learn ${courseName}`,
    imageWidth: 482,
    imageHeight: 377,
    bgcolor: "#083644",
    bgimage: "bg2"
  };
  return (
    <div>
      <Head>
        <title> {courseName} | Curriculum</title>
      </Head>
      <SiteHeader />
      <CourseSpotlight contents={contents} />
      <ChapterOverview />
      <ChapterList chapters={currentChapters} courseUrl={courseUrl} />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
