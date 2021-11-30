import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import UserState from "../../../context/user/userContext";

export default function SideBar({ onToggle, toggle, course, courseRef }) {
  const titles = course.chapters;
  // console.log({ titles });
  // console.log(course.courseUrl);

  const userState = useContext(UserState);
  const { progress } = userState;
  // console.log({ progress });

  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (progress !== "") {
      const completedChapters = progress?.find(
        (item) => item.courseName === course.courseUrl
      )?.completedChapter;
      setChapters(completedChapters);
    }
  }, [progress]);

  // console.log({ chapters });

  function handleClick(e) {
    onToggle();
  }

  return (
    <>
      <aside
        className={`transform top-0 ${
          toggle ? "left-0" : "-left-64"
        } w-64 bg-white border-r fixed ease-in-out h-full transition-all delay-200 duration-500 z-50 translate-x-0 `}
      >
        <img
          className="h-5 w-5 absolute top-5 right-6 cursor-pointer close-icon"
          src="/images/close.svg"
          onClick={handleClick}
        />

        <ul
          className="text-gray-900 flex flex-col my-14 overflow-auto"
          style={{ height: "86%" }}
        >
          {titles.map((title) => (
            <li
              key={title.chapterId}
              className={`flex flex-row justify-between items-center  text-gray-700 border-l-4 border-gray-700 hover:border-purple-700 hover:text-purple-700 hover:bg-gray-100 p-4`}
            >
              <Link
                href={`/curriculum/${course.courseUrl}/${title.chapterUrl}`}
              >
                <a  onClick={() =>{
                  console.log('j');
                  courseRef.current.scrollTo({top: 0, left: 0,behavior: 'smooth'});
                  handleClick()
                  }}>{title.chapterName}</a>
              </Link>
              {chapters?.includes(title.chapterUrl) && (
                <img
                  src="/images/checkmark.svg"
                  alt="check mark progress"
                  className="h-4 w-4 mr-2"
                />
              )}
            </li>
          ))}
        </ul>
      </aside>
      {toggle && (
        <div
          onClick={handleClick}
          className="absolute h-100 w-100 left-0 right-0 top-0 bottom-0 z-40 cursor-pointer"
        />
      )}
    </>
  );
}
