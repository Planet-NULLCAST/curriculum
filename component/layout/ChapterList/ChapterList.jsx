import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ChapterList.module.scss";

export default function ChapterList({ chapters, courseUrl }) {
  // console.log({ chapters });
  const [chaptersToShow, setChaptersToShow] = useState([]);
  const [next, setNext] = useState(3);
  const chaptersPerPage = 3;
  let tempChapterList = [];

  const getSlicedChapters = (start, end) => {
    const slicedChapters = chapters.slice(start, end);
    console.log({ slicedChapters });
    tempChapterList = [...chaptersToShow, ...slicedChapters];
    console.log({ tempChapterList });
    setChaptersToShow(tempChapterList);
  };

  useEffect(() => {
    getSlicedChapters(0, chaptersPerPage);
  }, []);

  const handleViewMore = () => {
    getSlicedChapters(next, next + chaptersPerPage);
    setNext(next + chaptersPerPage);
  };
  return (
    <section id="chapters" className={styles.section}>
      <div className="container container--small">
        <ul className={styles.list}>
          {chaptersToShow.map((chapter) => (
            <li key={chapter.chapterUrl} className="">
              <div className={styles.text}>
                <h3>{chapter.chapterName}</h3>
                <p>
                  Learn how to add styles websites with CSS and how to use
                  selectors to apply styles to specific elements.
                </p>
                <Link href={`/curriculum/${courseUrl}/${chapter.chapterUrl}`}>
                  <a className="btn btn--purple">
                    <span className="btn__text">Start</span>
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="cta text-center">
          {chaptersToShow.length !== chapters.length && (
            <button className="btn" onClick={handleViewMore}>
              <span className="btn__text">VIEW MORE</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
