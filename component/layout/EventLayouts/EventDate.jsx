import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import styles from "./EventDate.module.scss";
import { useRouter } from 'next/router'
import notify from "../../../lib/notify";

export default function EventDate({ eventDate }) {
  const router = useRouter()
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const countDown = useCallback(() => {
    const id = setInterval(() => {
      const now = new Date();
      const dateOfEvent = new Date(eventDate);
      const then = moment(eventDate).diff(now);
      var d = moment.duration(then);
      if(d._data.days <= 0 && d._data.hours <= 0 && d._data.minutes <= 0 && d._data.seconds <= 0){
        clearInterval(id)
      }
      if (now <= dateOfEvent) setCount(d._data);
    }, 1000);
  }, [eventDate]);

  useEffect(() => {
    if (eventDate) countDown();
  }, []);

  return (
    <div className={styles.dateWrapper}>
      <div className={styles.dateBox}>
        <span className={styles.dateCount}>{count.days}</span>
        <span>Days</span>
      </div>
      <div className={styles.dateBox}>
        <span className={styles.dateCount}>{count.hours}</span>
        <span>Hours</span>
      </div>
      <div className={styles.dateBox}>
        <span className={styles.dateCount}>{count.minutes}</span>
        <span>Min</span>
      </div>
      <div className={styles.dateBox}>
        <span className={styles.dateCount}>{count.seconds}</span>
        <span>Sec</span>
      </div>
    </div>
  );
}
