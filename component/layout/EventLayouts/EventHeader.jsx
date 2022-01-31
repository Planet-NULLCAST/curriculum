import styles from "./EventHeader.module.scss";
import Image from "next/image";
import Fade from "react-reveal/Fade";

export default function EventHeader() {
  return (
    <section className={styles.section}>
      <div className="container container--small md:flex justify-between items-center">
        <Fade>
          <div className="md:w-7/12 lg:w-1/2">
            <h2>Nullcast is a Series of Events</h2>
            <p>
              Get the latest scoop from the world of development with the latest
              news, hacks, tricks, and more on javascript, machine learning,
              enterprise architecture and more
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="md:w-5/12 lg:w-1/2 md:flex items-center justify-end">
            <figure>
              <Image
                src="/images/events.svg"
                alt="Event people"
                height={334}
                width={572}
              />
            </figure>
          </div>
        </Fade>
      </div>
    </section>
  );
}
