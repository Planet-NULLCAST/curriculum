import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./WhatsNewPosts.module.scss";

export default function WhatsNewPosts({ blogs }) {
  const router = useRouter();

  const createMarkup = (value) => {
    return { __html: value };
  };
  const boxdata = [
    {
      head: "Set a Fallback Placeholder in Message Templates 📝",
      content:
        "This information is also super helpful for our support team should you run into an issue..."
    },
    {
      head: "How To Choose A Headless CMS",
      content:
        "This information is also super helpful for our support team should you run into an issue..."
    },
    {
      head: "Front-End Boilerplates & Starter Kits",
      content:
        "This information is also super helpful for our support team should you run into an issue..."
    }
  ];
  return (
    <div className={styles.wrapperHeader}>
      <section className={styles.header}>
        <ul>
          <Link
            href={{
              pathname: `/whats-new`
              // query:{tag:'whats-new'}
            }}
          >
            <li style={{ background: !router.query.tag && "#f6e049" }}>
              All Post
            </li>
          </Link>
          <Link
            href={{
              pathname: `/whats-new`,
              query: { tag: "fix" }
            }}
          >
            <li style={{ background: router.query.tag == "fix" && "#f6e049" }}>
              Fix
            </li>
          </Link>
          <Link
            href={{
              pathname: `/whats-new`,
              query: { tag: "announcement" }
            }}
          >
            <li
              style={{
                background: router.query.tag == "announcement" && "#f6e049"
              }}
            >
              Announcement
            </li>
          </Link>
          <Link
            href={{
              pathname: `/whats-new`,
              query: { tag: "improvement" }
            }}
          >
            <li
              style={{
                background: router.query.tag == "improvement" && "#f6e049"
              }}
            >
              Improvement
            </li>
          </Link>
        </ul>
      </section>
      {blogs[0] ? (
        <>
          <section>
            <div className={styles.Container}>
              <div className={styles.content__box}>
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${blogs[0]?.banner_image})`
                    }}
                    className={styles.boximg}
                  ></div>
                  <div className={styles.boxheader}>{blogs[0]?.title}</div>
                  <div className={styles.boxcontent}>
                    <div
                      dangerouslySetInnerHTML={createMarkup(blogs[0]?.html)}
                    />
                  </div>
                  <Link href={`/${blogs[0]?.slug}`}>
                    <a className="btn btn--small mt-auto">
                      <span className="btn__text">Learn more</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className={styles.sub_card}>
                <img src="/images/whatsnewsubscription.png" alt="image" />
                <div className={styles.sub_head}>
                  Subscribe to <br /> Monthly Updates
                </div>
                <div className={styles.sub_text}>
                  With tools to help you get your work done better. Subscribe
                  and get Vitaly’s Smart Interface Design Checklists PDF — in
                  your inbox. 🎁
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter your email"
                    className={styles.sub_input}
                  />
                </div>
                <button className="btn btn--small" type="submit">
                  <span className="btn__text">Subscribe</span>
                </button>
              </div>
            </div>
          </section>
          <section className={styles.Container}>
            {boxdata.map((obj) => {
              return (
                <div className={styles.rowbox}>
                  <div className={styles.rowboxhead}>{obj.head}</div>
                  <div className={styles.rowboxcontent}>{obj.content}</div>
                  <button className="btn btn--small" type="submit">
                    <span className="btn__text">Learn more</span>
                  </button>
                </div>
              );
            })}
          </section>
          <section className={styles.Container}>
            {blogs.map((post, index) => (
              <div className={styles.content__box}>
                <div
                  style={{ backgroundImage: `url(${post.banner_image})` }}
                  className={styles.boximg}
                ></div>
                <div className={styles.boxheader}>{post.title}</div>
                <div className={styles.boxcontent}>
                  <div dangerouslySetInnerHTML={createMarkup(post.html)} />
                </div>
                <Link href={`/${post.slug}`}>
                  <a className="btn btn--small mt-auto">
                    <span className="btn__text">Learn more</span>
                  </a>
                </Link>
              </div>

              // <div
              //   style={{ flexDirection: index % 2 != 0 ? "row-reverse" : "row" }}
              //   className={styles.content__child}
              // >
              //    <img src={post.bannerImage} alt="image" />
              //   <div
              //     style={{
              //       "--order": index % 2 == 0 ? 0 : 1
              //     }}
              //     className={styles.content__left}
              //   >
              //     <Link href={`/${post.slug}`}>
              //       <h3>{post.title}</h3>
              //     </Link>
              //     <div dangerouslySetInnerHTML={createMarkup(post.html)} />
              //     <Link href={`/${post.slug}`}>
              //       <a className="btn btn--small mt-auto">
              //         <span className="btn__text">Learn more</span>
              //       </a>
              //     </Link>
              //   </div>
              //   <div
              //     style={{
              //       "--order": index % 2 != 0 ? 0 : 1
              //     }}
              //     className={styles.content__right}
              //   >

              //   </div>
              // </div>
            ))}
          </section>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
