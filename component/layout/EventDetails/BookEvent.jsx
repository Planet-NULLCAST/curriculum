import styles from "./BookEvent.module.scss";
import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Cookies from "universal-cookie";
import EventService from "../../../services/EventService";
import UserService from "../../../services/UserService";
import notify from "../../../lib/notify";
import ModalBookEvent from "../../../component/popup/ModalBookEvent";
import { LoadIcon } from "../../../component/ButtonLoader/LoadIcon";

export default function BookEvent({ data, showShare, handleSubmit }) {
  const { title, description, event_time, location, registration_link } = data;
  const [bookPop, setBookPop] = useState(false);
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [bookStatus, setBookStatus] = useState(true);
  const _cookies = new Cookies();


  useEffect(() => {
    console.log(data.id, 'Book');
    console.log('hey');
    const userId = _cookies.get("userNullcast");
    console.log(userId, 'userId');
    if (userId) {
      setUserId(userId.id);
    }
  }, []);


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
          // console.log(err);
          // notify(err?.response?.data?.message || err?.message, 'error');
        }
      }

    }

  }
  useEffect(() => {
    eventBookCheck();
    console.log('hey h');
  });




  async function bookEventUser() {

    const userData = _cookies.get("userNullcast");
    // console.log(userId, 'userId');
    const eventId = data.id;
    const userFullName = userData.full_name;
    setUserId(userData.id);
    setUserName(userData.user_name);
    if (userId && userName) {
      setIsLoading(true);
      try {
        const response = await UserService.getUserByUsername(userName);
        setUserEmail(response.data.email);
        if (userEmail) {
          const data = await EventService.bookEvent(userEmail, eventId, userFullName, userId);
          if (data) {
            setIsLoading(false)
            setBookStatus(false);
            notify(data.message);
          }
        }
      } catch (err) {
        setIsLoading(false)
        console.log(err);
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
      {userId ? (
        <div className="flex justify-center">

          <button type="button"
            onClick={() => {
              if (bookStatus) {

                bookEventUser();
              }
            }}
            disabled={bookStatus == true ? "disabled" : ""}
            className={styles.Book_Now} >
            {isLoading && <LoadIcon color="#fff" height="33px" />}

            {bookStatus ? "Book Event" : "Booked"}
          </button>
        </div>
      ) : (
        <div
          className="flex justify-center">
          <ModalBookEvent
            trigger={
              <div
                className={styles.Book_Now}
              >
                BOOK NOW
              </div>
            }
            event={data}
            handleSubmit={() => {
              handleSubmit();

            }}
            purpose={"as a guest"}
            buttonColor={"green"}
            heading={"Book event"}
            text="You are not Logged in please login or continue as a guest!"
          // secondaryText="This cannot be undone"
          />

        </div>


      )}

      <button className={styles.share} onClick={showShare}>SHARE EVENT</button>
    </div>
  );
}
