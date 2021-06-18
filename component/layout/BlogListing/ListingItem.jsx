import styles from "./ListingItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Details from "./AuthorDetails";
import moment from "moment";

export default function ListingItem(props) {
  return (
    <>
      {props.blog.map((item, key) => (
        <div className={styles.listing__item} key={key}>
          <Fade>
            <figure className={styles.listing__figure}>
              <img
                src={item.bannerImage}
                alt={item.title}
                width={350}
                height={370}
                layout="responsive"
              />
            </figure>
          </Fade>
          <div>
            <div className="tags">
              <Link href={`/`}>
                <a className="tags__item">{item.tags[0]}</a>
              </Link>
            </div>
            <h3>
              <Link href={`/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            </h3>

            <p className={styles.time}>
              <span>{moment(item.publishedAt).format("MMMM Do, YYYY")}</span>
              {/* <span> 5 Min Read</span> */}
            </p>
          </div>
          <Details username={item.primaryAuthor.username} />
        </div>
      ))}

      {/* <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-1.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <Link href="/">
                        <a className="tags__item">Development</a>
                    </Link>
                </div>
                <h3>
                    <Link href="/">
                        <a>Active Tab Animation using HTML, CSS...</a>
                    </Link>
                </h3>

                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>
            <Details />

        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-2.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <Link href="/">
                        <a className="tags__item">Development</a>
                    </Link>
                </div>
                <h3>
                    <Link href="/">
                        <a>Creative Search Bar and Input Field Design...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>

            <Details />

        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-3.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <Link href="/">
                        <a className="tags__item">Development</a>
                    </Link>
                </div>
                <h3>
                    <Link href="/">
                        <a>Introduction to Rapid HTML Development...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>
            <Details />


        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-4.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <Link href="/">
                        <a className="tags__item">Development</a>
                    </Link>
                </div>
                <h3>
                    <Link href="/">
                        <a>Bootstrap 5 alpha - The first UI Kit for the...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>

            <Details />

        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-5.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <Link href="/">
                        <a className="tags__item">Development</a>
                    </Link>
                </div>
                <h3>
                    <Link href="/">
                        <a>Write Schema Without Schema Markup...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>

            <Details />

        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-1.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <a className="tags__item">Development</a>
                </div>
                <h3>
                    <Link href="/">
                        <a>Active Tab Animation using HTML, CSS...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>

            <Details />

        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-1.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <a className="tags__item">Development</a>
                </div>
                <h3>
                    <Link href="/">
                        <a>Active Tab Animation using HTML, CSS...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>

            <Details />


        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-1.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <a className="tags__item">Development</a>
                </div>
                <h3>
                    <Link href="/">
                        <a>Active Tab Animation using HTML, CSS...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>
            <Details />


        </div>



        <div className={styles.listing__item}>
            <Fade>
            <figure className={styles.listing__figure}>
                <Image 
                    src="/images/temp/blog-1.png"
                    alt="Blog image"
                    width={350}
                    height={370}
                    layout="responsive"
                />
            </figure>
            </Fade>
            <div>
                <div className="tags">
                    <a className="tags__item">Development</a>
                </div>
                <h3>
                    <Link href="/">
                        <a>Active Tab Animation using HTML, CSS...</a>
                    </Link>
                </h3>
                <p className={styles.time}>
                    <span>February 26,2021</span>
                    <span>5 Min Read</span>
                </p>
            </div>
            <Details />

        </div> */}
    </>
  );
}
