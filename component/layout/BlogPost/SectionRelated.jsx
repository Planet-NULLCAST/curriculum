import Link from "next/link";
import Image from "next/image";
import AuthorDetails from "../BlogListing/AuthorDetails";
import moment from "moment";
import styles from "./SectionRelated.module.scss";

export default function SectionRelated({ title, posts }) {
  return (
    <section className={`${styles.section} py-10 lg:py-20`}>
      <div className="container container--post">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-25 font-extrabold">{title}</h2>
          <span>
            <Link href="/blog">
              <a className={`${styles.moreLink} linkUnderline`}>
                View All Blogs
              </a>
            </Link>
          </span>
        </div>
        <div className={styles.relatedList}>
          {posts?.count > 0 ? (
            posts.map((post) => (
              <div className={styles.relatedItem} key={posts.post_id}>
                <figure>
                  <Link href={`/${posts?.slug}`}>
                    <a>
                      <img src={`${posts?.banner_image}`} alt={`${posts.title}`} />
                    </a>
                  </Link>
                </figure>
                <div className={styles.text}>
                  <p className={styles.date}>
                    {moment(post.publishedAt).format("MMMM Do, YYYY")}
                  </p>
                  <h3>
                    <Link href={`/${posts.slug}`}>
                      <a className="linkUnderline">
                        {/* 34 */}
                        {posts.title.length > 34
                          ? posts.title.substring(0, 34) + "..."
                          : posts.title}
                      </a>
                    </Link>
                  </h3>
                  <AuthorDetails
                    username={posts.user.user_name}
                    avatar={posts.user.avatar}
                  />
                </div>
              </div>
            ))
          ) : (
            <div>No blogs!</div>
          )}
        </div>
      </div>
    </section>
  );
}
