import styles from "./SectionEvents.module.scss";
import Image from "next/image";
import moment from "moment";
import Fade from "react-reveal/Fade";

export default function SectionEvents({ events }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <Fade>
          <div className="sectionHeader mb-10 lg:mb-20 xl:mb-32">
            <h2 className="sectionHeader__title md:w-64">See what Quacking?</h2>
            <p className="sectionHeader__description">
              Get the latest scoop from the world of development with the latest
              news, hacks, tricks, and more on javascript, machine learning,
              enterprise architecture and more.
            </p>
          </div>
        </Fade>
        <div className={styles.event}>
          <figure>
            <Image
              src={events?.banner_image ? events.banner_image : '/'}
              alt=""
              width={978}
              height={539}
            />
            <figcaption>
              <h3>
                <span>{events?.title}</span>
              </h3>
              <p>{events?.event_time && moment(events?.event_time).format("MMMM Do YYYY, h:mm a")}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
