import { useState } from "react";
import Link from "next/link";

import styles from "./WhatsNewPosts.module.scss";

export default function WhatsNewPosts({ blogs }) {
  const [active, setActive] = useState(1);

  const createMarkup = (value) => {
    return { __html: value };
  };

  return (
    <>
      <section className={styles.header}>
        <ul>
          <li
            style={{ background: active == 1 && "#f6e049" }}
            onClick={() => setActive(1)}
          >
            All Post
          </li>
          <li
            style={{ background: active == 2 && "#f6e049" }}
            onClick={() => setActive(2)}
          >
            Fix
          </li>
          <li
            style={{ background: active == 3 && "#f6e049" }}
            onClick={() => setActive(3)}
          >
            Announcement
          </li>
          <li
            style={{ background: active == 4 && "#f6e049" }}
            onClick={() => setActive(4)}
          >
            Improvement
          </li>
        </ul>
      </section>
      <section className={styles.content}>
        {blogs.map((post, index) => (
          <div
            style={{ flexDirection: index % 2 != 0 ? "row-reverse" : "row" }}
            className={styles.content__child}
          >
            <div
              style={{
                "--order": index % 2 == 0 ? 0 : 1
              }}
              className={styles.content__left}
            >
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={createMarkup(post.html)} />
              <Link href="#">
                <a className="btn btn--small mt-auto">
                  <span className="btn__text">Learn more</span>
                </a>
              </Link>
            </div>
            <div
              style={{
                "--order": index % 2 != 0 ? 0 : 1
              }}
              className={styles.content__right}
            >
              <img src={post.bannerImage} alt="image" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
