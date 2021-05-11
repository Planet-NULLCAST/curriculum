import { getAllCourseIds, getCourseData } from "../../../lib/jslist";

export async function getStaticPaths() {
  const paths = await getAllCourseIds();
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const courseData = await getCourseData(params.courseName);
  // console.log(courseData);
  return {
    props: {
      courseData,
    },
  };
}

function courseName({ courseData }) {
  console.log(courseData);
  return <div>Course list</div>;
}

export default courseName;
