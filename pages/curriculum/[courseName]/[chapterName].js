import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Cookies from "universal-cookie";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { getAllChapterIds, getChapterData } from "../../../lib/jslist";
import { getCourse } from "../../../lib/getCourse";
import { courses } from "../../../courses/meta";
import Editor from "../../../component/editor/Editor";
import Output from "../../../component/layout/Output/Output";
import Sidebar from "../../../component/layout/SideBar/SideBar";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import UserState from "../../../context/user/userContext";
import { enrollCourse } from "../../../services/CurriculamService";

const axios = require("axios");
import "highlight.js/styles/tomorrow-night-blue.css";
import notify from "../../../lib/notify";

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
  function onOutsideClick() {
    setToggle(false);
  }
  const router = useRouter();
  const { testCase, contentOnly } = chapterData;
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  const clickHandle = async (courseName, chapterName) => {
    if (contentOnly) {
      try {
        const data = await enrollCourse(courseName, chapterName)
        if (data.entryAdded) {
          console.log("👍 Chapter Is Completed!");
        } else {
          console.log(`👍 ${data}`);
        };
      } catch (err) {
        notify(err?.response?.data?.message ?? err?.message, 'error');
      }
    }

    let progress = JSON.parse(window.localStorage.getItem("progress"));
    if (!progress) progress = [];
    const Course = progress.find((post, index) => {
      if (post.courseName === courseName) {
        return true;
      }
    });
    if (progress.length > 0 && Course) {
      const index = progress.indexOf(Course);
      let chapterList = new Set(progress[index].completedChapter);
      chapterList.add(chapterName);
      chapterList = [...chapterList];
      let progressItem = {
        courseName: courseName,
        completedChapter: chapterList
      };
      progress[index] = progressItem;
    } else {
      let progressDetails = {
        courseName: courseName,
        completedChapter: []
      };
      progressDetails.completedChapter.push(chapterName);
      progress.push(progressDetails);
    }
    userState.setProgress(progress);
    window.localStorage.setItem("progress", JSON.stringify(progress));
    userState.setRun(true);
  }

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
    <div onClick={onOutsideClick}
      className={`bg-gray-50 flex flex-row justify-center`}
      style={{ height: "calc(100vh - 107px)" }}
    >
      <div
        className={`px-4 py-4 overflow-auto text-gray-700 ${contentOnly ? "md:w-1/2" : "md:w-1/3"
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
        <div className="w-1/3 hidden md:block">
          <Editor courseName={courseName} chapterName={chapterName} />
        </div>
      )}
      {!contentOnly && (
        <div className="w-1/3 hidden md:block">
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
        <div onClick={onOutsideClick} className="rounded-md bg-gray-600 hidden md:inline-block w-60 lg:w-80 mx-2">
          <div
            className="mt-0 bg-green-600 py-1 rounded-full"
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
        <div className="hidden md:inline-block text-white">
          {Math.round(progressBar)}%
        </div>
      </div>

      <div 
      onClick={onOutsideClick}
        className="flex flex-row w-1/2 justify-end items-center">
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
              className={`h-12 inline-block ${findCourseIndex(courses, chapterName, courseName, false) > 0
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
              className={`h-12 inline-block ${findCourseIndex(courses, chapterName, courseName, false) + 1 <
                  currentCourse.chapters.length
                  ? ""
                  : "invisible"
                }`}
            />
          </a>
        </div>

        <div className="pr-5 ml-5 lg:ml-10 hidden md:block">
          <Link href="https://discord.com/invite/5byDDp2qbK">
            <a
              className="text-white h-8 text-xs bg-indigo-600 w-full p-2 rounded-sm inline-flex items-center"
              target="_blank"
              rel="noopener noreferer"
            >
              Trouble? Join Discord
              <svg
                className="hidden lg:block ml-2"
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.984 6.379c-.756-2.537-1.609-3.848-1.623-3.871-.048-.058-1.253-1.466-4.158-2.508l-.384 1.02c1.382.496 2.362 1.1 2.901 1.49-1.61-.468-3.524-.756-5.22-.756-1.696 0-3.61.288-5.22.757.539-.39 1.519-.995 2.9-1.49L6.798 0C3.892 1.042 2.687 2.45 2.64 2.508c-.014.023-.867 1.334-1.623 3.871C.286 8.824.01 12.273 0 12.411.065 12.51 1.559 15 5.63 15L6.66 13.54a11.102 11.102 0 01-3.267-1.439l.617-.904A10.048 10.048 0 009.5 12.815c1.963 0 3.861-.56 5.49-1.617l.616.904c-1 .652-2.104 1.138-3.267 1.44L13.371 15c4.07 0 5.564-2.49 5.629-2.59-.01-.137-.287-3.586-1.016-6.031zM6.926 9.222H5.813V7.411h1.113v1.812zm6.261 0h-1.113V7.411h1.113v1.812z"
                  fill="#fff"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
};
