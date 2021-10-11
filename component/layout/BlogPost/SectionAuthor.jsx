import Link from "next/link";
import AuthorDetails from "../BlogListing/AuthorDetails";
import styles from "./SectionAuthor.module.scss";
import PostService from "../../../services/PostService";
import { useEffect, useState } from "react";
import notify from "../../../lib/notify";

export default function SectionAuthor({ primaryAuthor }) {
  const { bio, username, avatar } = primaryAuthor;

  const [count, setCount] = useState();

  const getPostsCountByUserId = async () => {
    try {
      const res = await PostService.getPublishedPostsCountByUserId(
        primaryAuthor._id
      );
      // console.log(count);
      setCount(res.count);
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  };

  useEffect(() => {
    getPostsCountByUserId();
  }, [primaryAuthor]);
  return (
    <section className={`${styles.section} py-10 lg:py-20`}>
      <div className="container container--post">
        <div className="flex items-center justify-between mb-7">
          <h2>About the Author</h2>
          <span>
            <Link href={`/u/${username}`}>
              <a className={`${styles.profileLink} linkUnderline`}>
                View Profile
              </a>
            </Link>
          </span>
        </div>
        <div className={styles.widget}>
          <div className={styles.details}>
            <AuthorDetails username={username} avatar={avatar} />

            <div className={styles.stats}>
              <div className={styles.statsItem}>
                <strong>{count}</strong>
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
