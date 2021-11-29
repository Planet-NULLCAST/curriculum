import styles from "./ListingItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Details from "./AuthorDetails";
import moment from "moment";
import Tags from "./Tags";

export default function ListingItem(props) {
  return props.blog?.map((item, key) => (
    <div className={styles.listing__item} key={key}>
      <Fade>
        <a href={`/${item.slug}`}>
          {item.banner_image && (
            <figure className={styles.listing__figure}>
              <Image
                src={item.banner_image}
                alt={item.title}
                width={350}
                height={370}
                layout="responsive"
                placeholder="blur"
                blurDataURL={item.banner_image}
              />
            </figure>
          )}
        </a>
      </Fade>
      <div>
        {item.tag?.length > 0 ? (
          <Tags _tags={item.tag} />
        ) : (
          <div className="tags h-9"></div>
        )}
        <h3>
          <Link href={`/${item.slug}`}>
            <a>{item.title}</a>
          </Link>
        </h3>

        <p className={styles.time}>
          <span>{moment(item.published_at).format("MMMM Do, YYYY")}</span>
          {/* <span> 5 Min Read</span> */}
        </p>
      </div>
      <Details
        username={item.user.user_name}
        avatar={item.user.avatar}
      />
    </div>
  ));
}
