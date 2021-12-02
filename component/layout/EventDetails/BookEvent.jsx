import styles from "./BookEvent.module.scss";
import moment from "moment";
import Link from "next/link";

export default function BookEvent({ data,showShare }) {
  const { meta_title, description, event_time, location, registration_link } = data;
  return (
    <div className={styles.Book_Wrap}>
      <p className={styles.Book_Title}>Date and Time</p>
      <div className={styles.Book_Date_Wrap}>
        <span className="date">
          {moment(event_time).format("MMMM DD, YYYY")}
        </span>
        <span className="time">{moment(event_time).format("LT")}</span>
      </div>
      <Link href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${meta_title}&dates=${event_time}&details=For+details,+Visit+this+link+:+${registration_link}&location=${location}&sf=true&output=xml`}>
        <a target="_blank" className={styles.calender} rel="nofollow">
          <span className={styles.icon}>
            +
          </span>
          <span className={styles.location}>ADD TO CALENDER</span>
        </a>
      </Link>
      <Link href={registration_link}>
        <a target="_blank" className={styles.Book_Now} rel="nofollow">
          BOOK NOW
        </a>
      </Link>
      <button className={styles.share} onClick={showShare}>SHARE EVENT</button>
    </div>
  );
}
