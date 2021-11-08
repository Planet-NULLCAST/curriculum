import styles from "./Detail.module.scss";
import EventDate from "../EventLayouts/EventDate";

export default function Detail({ event }) {
  const { meta_title, description, location, event_time } = event;
  return (
    <section className={styles.detail__Wrap}>
      <div className="container">
      <h1 className={styles.title}>{meta_title}</h1>
      <div className={styles.location__Wrap}>
        <span className={styles.icon}>
          <img src="/images/location-pin.svg" alt="location_Icon" />
        </span>
        <span className={styles.location}>{location}</span>
      </div>
      <div className={styles.event__counter}>
        <EventDate eventDate={event_time} />
      </div>
      <div className={styles.content}>
        <h4>Description</h4>
        <p>{description}</p>
      </div>
      </div>
    </section>
  )
}