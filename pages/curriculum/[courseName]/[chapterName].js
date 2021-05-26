import Head from "next/head";
import { getAllChapterIds, getChapterData } from "../../../lib/jslist";
import { getCourse } from "../../../lib/getCourse";
import { courses } from "../../../courses/meta";
import Editor from "../../../component/editor/Editor";
import Output from "../../../component/layout/Output/Output";
import Sidebar from "../../../component/layout/SideBar/SideBar";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useContext, useState } from "react";
import UserState from "../../../context/user/userContext";
import { useRouter } from "next/router";
import Link from "next/link";
const axios = require("axios");

hljs.registerLanguage("javascript", javascript);

export async function getStaticPaths() {
  const paths = await getAllChapterIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { courseName, chapterName } = params;
  const chapterData = await getChapterData(params);
  return {
    props: {
      chapterData,
      courseName,
      chapterName
    }
  };
}
export default function Chapter({ chapterData, chapterName, courseName }) {
  const userState = useContext(UserState);

  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  const router = useRouter();
  const { testCase, contentOnly } = chapterData;

  const clickHandle = (courseName, chapterName) => {
    if (contentOnly) {
      let cook = document.cookie;
      cook = cook.split("=");
      cook[0] !== ""
        ? (cook = JSON.parse(cook[1]).accessToken)
        : (cook = false);
      if (cook) {
        axios({
          method: "post",
          mode: "no-cors",
          url: `http://localhost:8080/api/enrol/${courseName}/${chapterName}`,
          headers: {
            "x-access-token": `${cook}`
          }
        }).then((response) => {
          if (response.data.entryAdded) {
            console.log("👍 Chapter Is Completed!");
          } else {
            console.log(`👍 ${response.data}`);
          }
        });
      }
      let index = 0;
      let progress = JSON.parse(window.localStorage.getItem("progress")) || [
        { courseName: "", completedChapter: [] }
      ];
      const Course = progress.find((post, index) => {
        if (post.courseName === courseName) {
          return true;
        }
      });
      if (Course) {
        // console.log(Course);
        const index = progress.indexOf(Course);
      }
      let chapterList = new Set(progress[index].completedChapter);
      chapterList.add(chapterName);
      chapterList = [...chapterList];
      let progressItem = {
        courseName: courseName,
        completedChapter: chapterList
      };
      progress[index] = progressItem;
      userState.setProgress(progress);
      window.localStorage.setItem("progress", JSON.stringify(progress));
      userState.setRun(true);
    }
    // userState.setTest(testCase);
    // let clicked = true;
  };

  const [progressBar, setProgressBar] = useState(0);

  let currentCourse = getCourse(courseName);

  const findCourseIndex = (courses, chapterName, courseName, chaporcourse) => {
    if (courses.length > 0) {
      const courseId = courses.indexOf(
        courses.find((post, index) => {
          if (post.courseUrl === courseName) {
            return true;
          }
        })
      );
      if (chaporcourse) {
        return courseId;
      }
      const chapterId = courses[courseId].chapters.indexOf(
        courses[courseId].chapters.find((post, index) => {
          if (post.chapterUrl === chapterName) {
            return true;
          }
        })
      );
      return chapterId;
    }
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    userState.setTest(testCase);
    userState.setRun(false);
  }, [testCase]);

  useEffect(() => {
    let progressTem = JSON.parse(window.localStorage.getItem("progress"));
    if (progressTem) {
      let progressData = progressTem.find((post, index) => {
        if (post.courseName === courseName) {
          return true;
        }
      });
      if (progressData) {
        userState.setProgress(progressTem);
      } else {
        progressTem.push({ courseName: courseName, completedChapter: [] });
        userState.setProgress(progressTem);
      }
    }
  }, [userState.testCase]);

  useEffect(() => {
    if (userState.progress && currentCourse) {
      const Course = userState.progress.find((post, index) => {
        if (post.courseName === courseName) {
          return true;
        }
      });

      const indexP = userState.progress.indexOf(Course);
      setProgressBar(
        (userState.progress[indexP].completedChapter.length /
          currentCourse.chapters.length) *
          100
      );
    }
  }, [userState.progress]);

  const routerClick = (courseName, chapterEntry, e) => {
    e.preventDefault();
    if (chapterEntry !== undefined) {
      let chapterName = chapterEntry.chapterUrl;
      router.push(`/curriculum/${courseName}/${chapterName}`);
    }
    return;
  };

  return (
    <div>
      <Head>
        <title>{chapterData.subheading} | Curriculum</title>
      </Head>
      <SiteHeader />
      <Sidebar onToggle={handleToggle} toggle={toggle} course={currentCourse} />
      <div
        className={`bg-gray-50 flex flex-row justify-center`}
        style={{ height: "calc(100vh - 123px)" }}
      >
        <div
          className={`px-4 py-4 overflow-auto text-gray-700 ${
            contentOnly ? "w-1/2" : "w-1/3"
          }`}
        >
          <div className="p-1 text-sm uppercase rounded-full border border-gray-500 tracking-wider font-medium w-28 text-center">
            JavaScript
          </div>
          <div className="font-bold my-3 uppercase">
            <h1 className="text-2xl">{chapterData.title}</h1>
          </div>
          <div className="text-xl font-semibold mt-5 mb-3">
            {chapterData.subheading}
          </div>
          <div
            className="codeClass font-light js text-gray-900"
            dangerouslySetInnerHTML={{ __html: chapterData.contentHtml }}
          />
        </div>
        {!contentOnly && (
          <div className="w-1/3">
            <Editor courseName={courseName} chapterName={chapterName} />
          </div>
        )}
        {!contentOnly && (
          <div className="w-1/3">
            <Output />
          </div>
        )}
      </div>
      <div className="flex flex-row bg-gray-900 items-center py-6 sticky bottom-0 h-12 justify-between">
        <div>
          <img
            src="/images/hamburger.svg"
            alt="hamburger menu"
            onClick={handleToggle}
            className="h-6 w-6 cursor-pointer ml-4 inline-block m-2"
          />
          <div
            className="rounded-md bg-gray-600 inline-block"
            style={{ width: "20rem", margin: "0 0.5rem" }}
          >
            <div
              className="mt-0 bg-green-600 py-1 rounded-full"
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
          <div className="inline-block text-white">
            {Math.round(progressBar)}%
          </div>
        </div>

        <div className="flex flex-row w-1/3 justify-between items-center">
          <div className="flex flex-row justify-start items-center ml-4">
            <a
              className={`text-white cursor-pointer`}
              onClick={(e) =>
                routerClick(
                  courseName,
                  currentCourse.chapters[
                    findCourseIndex(courses, chapterName, courseName, false) - 1
                  ],
                  e
                )
              }
            >
              <img
                src="/images/svgs/leftarrawo.svg"
                className={`h-12 inline-block ${
                  findCourseIndex(courses, chapterName, courseName, false) > 0
                    ? ""
                    : "invisible"
                }`}
              />
            </a>
            {courses.length > 0 ? (
              <p className="text-white px-2">
                {findCourseIndex(courses, chapterName, courseName, false) + 1}/
                {
                  courses[
                    findCourseIndex(courses, chapterName, courseName, true)
                  ].chapters.length
                }
              </p>
            ) : (
              ""
            )}
            <a
              className={`text-white cursor-pointer`}
              onClick={(e) => {
                clickHandle(courseName, chapterName);
                routerClick(
                  courseName,
                  currentCourse.chapters[
                    findCourseIndex(courses, chapterName, courseName, false) + 1
                  ],
                  e
                );
              }}
            >
              <img
                src="/images/svgs/rightarrow.svg"
                className={`h-12 inline-block ${
                  findCourseIndex(courses, chapterName, courseName, false) + 1 <
                  currentCourse.chapters.length
                    ? ""
                    : "invisible"
                }`}
              />
            </a>
          </div>

          <div className="w-1/3 mx-4">
            <Link href="https://discord.com/invite/5byDDp2qbK">
              <a className="text-white h-8 text-xs bg-indigo-600 w-full p-2 rounded-sm">
                Trouble? Join Discord
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
