import React, { useContext } from "react";
import UserContext from "../../context/user/userContext";
const axios = require("axios");
import { toast } from "react-toastify";
import { baseUrl } from "../../config/config";
import Cookies from "universal-cookie";

export default function Runbutton({ editorVal, courseName, chapterName }) {
  const userState = useContext(UserContext);
  const testCase = userState.test;
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  let clicked = false;
  let flag = false;

  const notify = (err) => {
    console.log(err);
    toast.dark(err, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  const clickHandle = () => {
    clicked = true;
    userState.setRun(clicked);

    let i = 0;

    while (i < editorVal.length) {
      // console.log(i);
      editorVal[i] = editorVal[i].replace(/\s\s+/g, "");
      // console.log(editorVal[i]);

      editorVal[i] = editorVal[i].replace(/"+/g, "'");
      // console.log(editorVal[i]);

      if (editorVal[i] === "{") {
        editorVal[i - 1] = editorVal[i - 1] + "{";
        editorVal.splice(i, 1);
        // console.log(i);
        continue;
      }
      // console.log(editorVal[i]);
      if (i < testCase.length) {
        if (testCase[i].case.includes(editorVal[i])) {
          testCase[i].isCorrect = true;
        } else {
          testCase[i].isCorrect = false;
        }
      }
      i = i + 1;
    }
    for (let i = 0; i < testCase.length; i++) {
      if (testCase[i].isCorrect) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      let cook = userCookie;

      if (cook) {
        axios({
          method: "post",
          mode: "no-cors",
          url: `${baseUrl}/api/enrol/${courseName}/${chapterName}`,
          headers: {
            "x-access-token": `${cook.accessToken}`
          }
        }).then((response) => {
          if (response.data.entryAdded) {
            notify("👍 Chapter Is Completed!");
          } else {
            notify(`👍 ${response.data}`);
          }
        });
      }
      let progress = JSON.parse(window.localStorage.getItem("progress"));
      if(!progress) progress = []
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
    }
    userState.setTest(testCase);
  };
  return (
    <div className="absolute bottom-14">
      <button
        className={`bg-green-600  text-white font-medium py-1 px-3 ml-4 mt-20 rounded-sm ${
          !testCase && "disabled:opacity-50"
        }`}
        onClick={clickHandle}
        disabled={!testCase}
      >
        Run
      </button>
    </div>
  );
}
