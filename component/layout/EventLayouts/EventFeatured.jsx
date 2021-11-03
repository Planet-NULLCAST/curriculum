import styles from "./EventFeatured.module.scss";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import moment from "moment";
import EventDate from "./EventDate";

// For testing only (image from unsplash). Remove this and 'loader' from Image in production
const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

export default function EventFeatured({ event }) {
  return (
    event && (
      <section className={styles.section}>
        <div className="container container--small md:flex">
          <div className="md:w-1/3 md:pr-6">
            <Fade>
              <Link href={`/events/${event?.id}`}>
                <a>
                  <figure>
                    {event.banner_image && (
                      <Image
                        src={event.banner_image}
                        loader={myLoader}
                        alt={event?.meta_title}
                        width={380}
                        height={318}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={event?.banner_image}
                      />
                    )}
                    <button>
                      <img 
                        src="/images/event-card.svg" 
                        alt="Event_Card_Icon"
                        width={19.94}
                        height={19.94} />
                    </button>
                  </figure>
                </a>
              </Link>
            </Fade>
          </div>
          <Fade>
            <div className={`${styles.text} md:w-2/3 md:pl-6`}>
              <h3>
                <Link href={`/events/${event?.id}`}>
                  <a>{event?.meta_title}</a>
                </Link>
              </h3>
              <EventDate eventDate={event?.event_time} />
              <p className={styles.time}>
                <span className={styles.icon}>
                  <img src="/images/calender.svg" alt="calender_Icon" />
                </span>
                <span>{moment(event?.event_time).format("MMMM DD, YYYY")}</span>
                <span className={styles.icon}>
                  <img src="/images/clock.svg" alt="clock_Icon" />
                </span>
                <span>{moment(event?.event_time).format("LT")}</span>
              </p>
              <p className={styles.time}>
                <span className={styles.icon}>
                  <img src="/images/location-pin.svg" alt="location_Icon" />
                </span>
                <span className={styles.location}>{event?.location}</span>
              </p>
              <p>{`${event?.description}`.length > 180 ? `${event?.description}`.slice(0,180) + "..." : `${event?.description}`}</p>
            </div>
          </Fade>
        </div>
      </section>
    )
  );
}
