import Head from "next/head";
import Link from "next/link";
import Layout from "../../component/layout/Layout";
import { getAllChapterIds, getChapterData } from "../../lib/jslist";
import Editor from "../../component/editor/Editor";
import Output from "../../component/layout/Output/Output";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useContext, useState } from "react";
import UserState from "../../context/user/userContext";
const axios = require("axios");
import { useRouter } from "next/router";

hljs.registerLanguage("javascript", javascript);

export async function getStaticPaths() {
  const paths = await getAllChapterIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const chapterData = await getChapterData(params);
  return {
    props: {
      chapterData
    }
  };
}
export default function Chapter({ chapterData }) {
  const { testCase } = chapterData;
  const userState = useContext(UserState);
  const [progress, setProgress] = useState(0);
  const [courseList, setCourseList] = useState([]);
  const findCourseIndex = (chapterName, courseName) => {
    if (courseList.length > 0) {
      const courseId = courseList.indexOf(
        courseList.find((post, index) => {
          if (post.courseName === courseName) {
            return true;
          }
        })
      );
      const chapterId = courseList[courseId].chapters.indexOf(
        courseList[courseId].chapters.find((post, index) => {
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
    setCourseList(JSON.parse(window.localStorage.getItem("courses")));
  }, []);
  useEffect(() => {
    userState.setTest(testCase);
    userState.setRun(false);
  }, [testCase]);
  useEffect(() => {
    let progress = JSON.parse(window.localStorage.getItem("progress"));
    if (progress && courseList.length > 0) {
      const Course = progress.find((post, index) => {
        if (post.courseName === chapterData.courseName) {
          return true;
        }
      });
      const indexC = progress.indexOf(Course);
      setProgress(
        (progress[indexC].completedChapter.length /
          courseList[indexC].chapters.length) *
          100
      );
    }
  }, [userState]);

  const routerClick = (courseName, chapterName) => {
    e.preventDefault();
    if (chapterName) {
      router.push(`/${courseName}/${chapterName}`);
    }
    return;
  };

  return (
    <Layout>
      <Head>
        <title>{chapterData.title}</title>
      </Head>
      <div className="grid grid-cols-3" style={{ height: "84.5vh" }}>
        <div className="bg-gray-50 px-4 py-4 overflow-auto text-gray-700">
          <div className="py-3">
            <a
              href="#"
              className="text-sm py-1 px-2 uppercase rounded-full border border-gray-500 tracking-wider font-medium"
            >
              Learn
            </a>
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
        <div>
          <Editor initialValue={chapterData} />
        </div>
        <div>
          <Output />
        </div>
      </div>
      <div className="flex flex-row space-x-52 bg-gray-900 items-center py-6 sticky bottom-0 h-12 justify-between">
        <div
          className="rounded-md bg-gray-600"
          style={{ width: "382px", marginLeft: "10px" }}
        >
          <div
            className="mt-0 bg-green-600 py-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="pr-6">
          <Link href={`/${chapterData.courseName}/${chapterData.prev}`}>
            <a className="text-white">
              {chapterData.prev ? (
                <img
                  src="/images/svgs/leftarrawo.svg"
                  className="h-12 inline-block"
                />
              ) : (
                <img
                  src="/images/svgs/leftdull.svg"
                  className="h-12 inline-block"
                />
              )}
            </a>
          </Link>
          {courseList.length > 0 ? (
            <p className="text-white inline-block">
              {findCourseIndex(
                chapterData.chapterName,
                chapterData.courseName
              ) + 1}
              /{courseList[0].chapters.length}
            </p>
          ) : (
            ""
          )}
          <Link href={`/${chapterData.courseName}/${chapterData.next}`}>
            <a className="text-white">
              {chapterData.next ? (
                <img
                  src="/images/svgs/rightarrow.svg"
                  className="h-12 inline-block"
                />
              ) : (
                <img
                  src="/images/svgs/rightdull.svg"
                  className="h-12 inline-block"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
