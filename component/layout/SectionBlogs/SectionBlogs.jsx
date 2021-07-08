import styles from "./SectionBlogs.module.scss";
import Fade from "react-reveal/Fade";
import AuthorDetails from "../BlogListing/AuthorDetails";
import Link from "next/link";

export default function SectionBlogs(props) {
  return (
    <section className="pt-10 lg:pt-20">
      <div className="container container--small">
        <div className="sectionHeader">
          <Fade>
            <h2 className="sectionHeader__title md:w-36 lg:w-44 xl:w-56">
              Series of Blogs
            </h2>
            <p className="sectionHeader__description">
              Get the latest scoop from the world of tech ranging from
              javascript to AI and other crazy hacks from dev ducks across the
              globe.
            </p>
          </Fade>
        </div>
        <div className={styles.blogList}>
          {props.blog.map((item, key) => (
            <div className={styles.blogItem} key={key}>
              <Fade>
                <figure className={styles.blogImage}>
                  <a href={`/${item.slug}`}>
                    <img
                      src={item.bannerImage}
                      alt={item.title}
                      width={528}
                      height={548}
                      className="w-full"
                    />
                  </a>
                </figure>
              </Fade>
              <h3>
                <a href={`/${item.slug}`}>{item.title}</a>
              </h3>

              <AuthorDetails username={item.primaryAuthor.username} />
            </div>
          ))}
        </div>
        <div className="cta text-center">
          <Link href="/blog">
            <a className="btn">
              <span className="btn__text">VIEW ALL OUR LATEST POSTS</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
