import styles from "./Listing.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ListingItem from "./ListingItem";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Listing({
  blog,
  currentCount,
  blogCount,
  tagsArray,
  resetCount,
  limit
}) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  let newTagsArray = [];
  if (router.asPath === "/blog") {
    const size = 5;
    newTagsArray = tagsArray.slice(0, size);
  }
  const handleLoadMore = (e) => {
    let newCount = count + 1;
    if (resetCount) newCount = count;
    setCount(newCount);
    currentCount(newCount);
  };

  return (
    <section className={styles.listing}>
      <div className="container container--small">
        <Fade>
          {router.asPath === "/blog" && (
            <div className={styles.listing__tab}>
              <div className="overflow-auto mb-3 992:mb-5 w-full">
                <ul className="tags tags--large">
                  {newTagsArray.map((tag) => (
                    <li key={tag._id}>
                      <Link href={`/tag/${tag.name}`}>
                        <a className="tags__item tags__item--navy">{tag.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5 more">
                {/* <Link href="/">
                  <a className="btn btn--blackborder">
                    Explore topics
                    <svg
                      className="btn__arrow"
                      width="14"
                      height="9"
                      fill="#000"
                      viewBox="0 0 14 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z" />
                    </svg>
                  </a>
                </Link> */}
              </div>
            </div>
          )}
        </Fade>

        <div className={styles.listing__list}>
          <ListingItem blog={blog} />
        </div>
        <div className={styles.wrapBtn}>
          {blogCount > blog?.length && (
            <button className="btn btn--gray" onClick={handleLoadMore}>
              <span className="btn__text">Load more</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
