import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PostService from "../../../services/PostService"

import styles from "./WhatsNewPosts.module.scss";

export default function WhatsNewPosts({ blogs }) {
  const router = useRouter();

  const createMarkup = (value) => {
    return { __html: value };
  };

  return (
    <>
      <section className={styles.header}>
        <ul>
        <Link 
            href={{
              pathname: `/whats-new`,
            }}
          >
            <li
              style={{ background: !router.query.tag && "#f6e049" }}
            >
              All Post
            </li>
          </Link>
          <Link 
            href={{
              pathname: `/whats-new`,
              query: {tag:"fix"}
            }}
          >
            <li
              style={{ background: router.query.tag == "fix" && "#f6e049" }}
            >
              Fix
            </li>
          </Link>
          <Link 
            href={{
              pathname: `/whats-new`,
              query: {tag:"announcement"}
            }}
          >
            <li
              style={{ background: router.query.tag == "announcement" && "#f6e049" }}
            >
              Announcement
            </li>
          </Link>
          <Link 
            href={{
              pathname: `/whats-new`,
              query: {tag:"improvement"}
            }}
          >
            <li
              style={{ background: router.query.tag == "improvement" && "#f6e049" }}
            >
              Improvement
            </li>
          </Link>
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
              <Link href={`/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={createMarkup(post.html)} />
              <Link href={`/${post.slug}`}>
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
