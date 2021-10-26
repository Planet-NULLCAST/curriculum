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
          {posts?.length > 0 ? (
            posts.map((post) => (
              <div className={styles.relatedItem} key={post._id}>
                <figure>
                  <Link href={`/${post.slug}`}>
                    <a>
                      <img src={`${post.bannerImage}`} alt={`${post.title}`} />
                    </a>
                  </Link>
                </figure>
                <div className={styles.text}>
                  <p className={styles.date}>
                    {moment(post.publishedAt).format("MMMM Do, YYYY")}
                  </p>
                  <h3>
                    <Link href={`/${post.slug}`}>
                      <a className="linkUnderline">
                        {/* 34 */}
                        {post.title.length > 34
                          ? post.title.substring(0, 34) + "..."
                          : post.title}
                      </a>
                    </Link>
                  </h3>
                  <AuthorDetails
                    username={post.primaryAuthor.username}
                    avatar={post.primaryAuthor.avatar}
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
