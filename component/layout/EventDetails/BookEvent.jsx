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

export default function BookEvent({ data, showShare, handleSubmit }) {
  const { title, description, event_time, location, registration_link } = data;
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [bookStatus, setBookStatus] = useState(true);
  const [bookedPop, setBookedPop] = useState(true);
  const [open, setOpen] = useState(false)
  const _cookies = new Cookies();

  useEffect(() => {
    const userData = _cookies.get("userNullcast");
    if (userData) {
      setUserId(userData.id);
      setUserName(userData.user_name);
      getUserData();
      eventBookCheck();
    }
  });

  async function getUserData() {
    if (userName) {
      try {
        const response = await UserService.getUserByUsername(userName);
        setUserEmail(response.data.email);
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  async function eventBookCheck() {
    if (userId) {
      const eventId = data.id;
      if (eventId) {
        try {
          const data = await EventService.getBookEventStatus(eventId);
          if (data) {
            setBookStatus(false);
          }
        }
        catch (err) {
          setBookStatus(true);
        }
      }
    }
  }

  async function bookEventUser() {
    setIsLoading(true);
    eventBookCheck();
    const userData = _cookies.get("userNullcast");
    // console.log(userId, 'userId');
    const eventId = data.id;
    const userFullName = userData.full_name;
    setUserId(userData.id);
    setUserName(userData.user_name);
    if (userId && userName) {
      try {
        if (userEmail) {
          const data = await EventService.bookEvent(userEmail, eventId, userFullName, userId);
          if (data) {
            setIsLoading(false);
            setBookStatus(false);
            setOpen(true);
            // notify(data.message);
          }
        }
      } catch (err) {
        setIsLoading(false);
        console.log(err);
        setOpen(true);
        notify(err?.response?.data?.message || err?.message, 'error');
      }
    }
  }
  return (
    <div className={styles.Book_Wrap}>
      <p className={styles.Book_Title}>Date and Time</p>
      <div className={styles.Book_Date_Wrap}>
        <span className="date">
          {moment(event_time).format("MMMM DD, YYYY")}
        </span>
        <span className="time">{moment(event_time).format("LT")}</span>
      </div>
      <Link href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event_time}&details=For+details,+Visit+this+link+:+${registration_link}&location=${location}&sf=true&output=xml`}>
        <a target="_blank" className={styles.calender} rel="nofollow">
          <span className={styles.icon}>
            +
          </span>
          <span className={styles.location}>ADD TO CALENDER</span>
        </a>
      </Link>

      {
        userId ? (
          <div className="flex justify-center">
            <button type="button"
              onClick={() => {
                if (bookStatus) {
                  bookEventUser();
                }
              }}
              disabled={bookStatus ? "" : "disabled"}
              className={`${styles.Book_Now} ${bookStatus ? "" : "cursor-not-allowed"}`} >
              {isLoading && <LoadIcon color="#fff" height="33px" />}

              {bookStatus ? "Book Event" : "Booked"}
            </button>
          </div>
        ) : (
          <div
            className="flex justify-center">
            <ModalBookGuestEvent
              trigger={
                <div
                  className={styles.Book_Now}
                >
                  BOOK NOW
                </div>
              }
              event={data}
            />
          </div >
        )
      }
      {
        open ? (
          <div
            className="flex justify-center">
            <ModalBookEvent
              setOpen={setOpen} open={open}
            />
          </div>
        ) : (
          <div>
          </div>
        )
      }
      <button className={styles.share} onClick={showShare}>SHARE EVENT</button>
    </div >
  );
}
