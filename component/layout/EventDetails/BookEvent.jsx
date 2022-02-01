import styles from "./BookEvent.module.scss";
import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Cookies from "universal-cookie";
import EventService from "../../../services/EventService";
import UserService from "../../../services/UserService";
import notify from "../../../lib/notify";
import ModalBookEvent from "../../../component/popup/ModalBookEvent";
import ModalBookGuestEvent from "../../../component/popup/ModalBookGuestEvent";
import { LoadIcon } from "../../../component/ButtonLoader/LoadIcon";

export default function BookEvent({ data, showShare }) {
  const { title, description, event_time, location, registration_link } = data;
  return (
    <div className={styles.Book_Wrap}>
      <p className={styles.Book_Title}>Date and Time</p>
      <div className={styles.Book_Date_Wrap}>
        <span className="date">
          {moment(event_time).format("MMMM DD, YYYY")}
        </span>
        <span className="time">{moment(event_time).format("LT")}</span>
      </div>
      <Link
        href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event_time}&details=For+details,+Visit+this+link+:+${registration_link}&location=${location}&sf=true&output=xml`}
      >
        <a
          target="_blank"
          className={`${styles.calender} ${
            event_time > new Date().toISOString()
              ? ""
              : "pointer-events-none cursor-not-allowed"
          }`}
          rel="nofollow"
        >
          <span className={styles.icon}>+</span>
          <span className={styles.location}>ADD TO CALENDER</span>
        </a>
      </Link>
      <Link href={registration_link}>
        <a
          target="_blank"
          className={`${styles.Book_Now} ${
            event_time > new Date().toISOString()
              ? ""
              : `${styles.ended} cursor-not-allowed pointer-events-none`
          }`}
          rel="nofollow"
        >
          {event_time > new Date().toISOString() ? `BOOK NOW` : `EVENT ENDED !`}
        </a>
      </Link>
      <button className={styles.share} onClick={showShare}>
        SHARE EVENT
      </button>
    </div>
  );
}
