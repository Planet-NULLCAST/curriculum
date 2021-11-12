import Link from "next/link";
import AuthorDetails from "../BlogListing/AuthorDetails";
import styles from "./SectionAuthor.module.scss";
import PostService from "../../../services/PostService";
import { useEffect, useState } from "react";
import notify from "../../../lib/notify";

export default function SectionAuthor({ primaryAuthor, postCount }) {
  const { bio, user_name, avatar } = primaryAuthor;
console.log(postCount);
  useEffect(() => {
  }, [primaryAuthor]);
  return (
    <section className={`${styles.section} py-10 lg:py-20`}>
      <div className="container container--post">
        <div className="flex items-center justify-between mb-7">
          <h2>About the Author</h2>
          <span>
            <Link href={`/u/${user_name}`}>
              <a className={`${styles.profileLink} linkUnderline`}>
                View Profile
              </a>
            </Link>
          </span>
        </div>
        <div className={styles.widget}>
          <div className={styles.details}>
            <AuthorDetails username={user_name} avatar={avatar} />

            <div className={styles.stats}>
              <div className={styles.statsItem}>
                <strong>{postCount}</strong>
                <span>Blogs</span>
              </div>
              <div className={styles.statsItem}>
                <strong>0</strong>
                <span>Followers</span>
              </div>
              <div className={styles.statsItem}>
                <strong>0</strong>
                <span>Following</span>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
