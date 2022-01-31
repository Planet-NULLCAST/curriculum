import styles from "./EventItems.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import moment from "moment";

export default function EventItems({ events }) {

  function truncate(string, length){
    if (string.length > length)
        return string.substring(0,length)+'...';
    else
        return string;
  };

  return events.map((item, key) => (
    <div className={styles.listing__item} key={"Event_Item_" + key}>
      <Fade>
        <a href={`/e/${item.slug}`}>
          {item.banner_image && (
            <figure className={styles.listing__figure}>
              <Image
                src={item.banner_image}
                alt={item.meta_title}
                width={350}
                height={370}
                layout="responsive"
                placeholder="blur"
                blurDataURL={item.banner_image}
              />
              <button>
                <img
                  src="/images/event-card.svg"
                  className={styles.listing__figure__icon}
                  alt="Event_Card_Icon"
                  width={19.94}
                  height={19.94}
                />
              </button>
            </figure>
          )}
        </a>
      </Fade>
      <div>
        <h3>
          <Link href={`/e/${item.slug}`}>
            <a>{truncate(item.title, 42)}</a>
          </Link>
        </h3>

        <p className={styles.time}>
          <span className={styles.icon}>
            <img src="/images/calender.svg" alt="calender_Icon" />
          </span>
          <span>{moment(item?.event_time).format("MMMM DD, YYYY")}</span>
          <span className={styles.icon}>
            <img src="/images/clock.svg" alt="clock_Icon" />
          </span>
          <span>{moment(item?.event_time).format("LT")}</span>
        </p>
        <p className={styles.time}>
          <span className={styles.icon}>
            <img src="/images/location-pin.svg" alt="location_Icon" />
          </span>
          <span className={styles.location}>{truncate(item?.location,30)}</span>
        </p>
      </div>
    </div>
  ));
}
