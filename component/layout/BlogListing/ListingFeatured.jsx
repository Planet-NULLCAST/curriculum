import styles from "./ListingFeatured.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Details from "./AuthorDetails";
import moment from "moment";

export default function ListingFeatured({ blog }) {
  return (
    blog && (
      <section className={styles.section}>
        <div className="container container--small md:flex">
          <div className="md:w-1/3 md:pr-6">
            <Fade>
              <Link href={`/${blog?.slug}`}>
                <a>
                  <figure>
                    {blog.banner_image && (
                      <Image
                        src={blog.banner_image}
                        alt={blog?.title}
                        width={380}
                        height={318}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={blog?.banner_image}
                      />
                    )}
                  </figure>
                </a>
              </Link>
            </Fade>
          </div>
          <Fade>
            <div className={` ${styles.text} md:w-2/3 md:pl-6`}>
              <div className="tags">
                <Link href={`/tag/${blog?.tags[0]?.name}`}>
                  <a className="tags__item">{blog?.tags[0]?.name}</a>
                </Link>
              </div>
              <h3>
                <Link href={`/${blog?.slug}`}>
                  <a>{blog?.title}</a>
                </Link>
              </h3>
              <p>{blog?.metaDescription}</p>
              <p className={styles.time}>
                <span>{moment(blog?.published_at).format("MMMM Do, YYYY")}</span>
                {/* <span>5 Min Read</span> */}
              </p>

              <Details
                username={blog?.user.user_name}
                avatar={blog?.user.avatar}
              />
            </div>
          </Fade>
        </div>
      </section>
    )
  );
}
