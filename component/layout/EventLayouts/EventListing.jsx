import styles from "./EventListing.module.scss";
import EventItems from "./EventItems";
import { useState } from "react";

export default function EvListing({ events, eventCount, currentCount }) {
  const [count, setCount] = useState(0);

  const handleLoadMore = (e) => {
    let newCount = count + 1;
    setCount(newCount);
    currentCount(newCount);
  };

  return (
    <section className={styles.listing}>
      <div className="container container--small">
        <div className={styles.listing__list}>
          <EventItems events={events} />
        </div>
        <div className={styles.wrapBtn}>
          {events.length !== eventCount && (
            <button className="btn btn--gray" onClick={handleLoadMore}>
              <span className="btn__text">Load more</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
