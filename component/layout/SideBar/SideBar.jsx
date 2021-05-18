import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import UserState from "../../../context/user/userContext";

export default function SideBar({ onToggle, toggle, course }) {
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
    <aside
      className={`transform top-0 ${
        toggle ? "left-0" : "-left-64"
      } w-64 bg-white border-r fixed h-full overflow-auto ease-in-out transition-all delay-200 duration-500 z-20 translate-x-0`}
    >
      <img
        className="h-5 w-5 absolute top-5 right-6 cursor-pointer close-icon"
        src="/images/close.svg"
        onClick={handleClick}
      />

      <ul className="text-gray-900 flex flex-col mt-14 h-80">
        {titles.map((title) => (
          <li
            key={title.chapterId}
            className={`flex flex-row justify-between items-center text-center text-gray-700 border-l-8 border-gray-700 hover:border-purple-700 hover:text-purple-700 hover:bg-gray-100 p-4`}
          >
            <Link href={`/curriculum/${course.courseUrl}/${title.chapterUrl}`}>
              <a onClick={handleClick}>{title.chapterName}</a>
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
  );
}
