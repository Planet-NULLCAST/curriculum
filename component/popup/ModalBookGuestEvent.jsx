import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import notify from "../../lib/notify";
import EventService from "../../services/EventService";
import ModalBookEvent from "../popup/ModalBookEvent";
import SubscribeService from "../../services/SubscribeService";
import { LoadIcon } from "../../component/ButtonLoader/LoadIcon";
import styles from "./ModalBookGuestEvent.module.scss";
import { fail } from "assert";

const ModalBookGuestEvent = ({
  trigger,
  event,
}) => {

  const [validName, setValidName] = useState("");
  const [validEmailName, setValidEmailName] = useState("");
  const [validEmail, setEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nsletter, setNsletter] = useState(false);
  const [open, setOpen] = useState(false);

  async function subscribeNewsletter(email) {
    try {
      const response = await SubscribeService.addSubscription(email);
    } catch (err) { }
  }

  function confirmEmail() {
    var email = document.getElementById("email").value
    var confemail = document.getElementById("confemail").value
    if (email === confemail) {
      setEmailValid(true);
      setValidEmailName(confemail);
    }
    else {
      setEmailValid(false);
      notify('Email Not Matching!', 'error');
    }
  }

  async function handleClick(e) {
    e.preventDefault();
    const fName = e.target.fullName.value;
    confirmEmail();
    const eventId = event.id;
    if (validEmail) {
      setIsLoading(true);
      if (fName && validEmailName) {
        try {
          const data = await EventService.bookEvent(validEmailName, eventId, fName);
          nsletter && subscribeNewsletter(email);
          if (data) {
            setIsLoading(false);
            setOpen(true);
            // notify(data.message);
          }
        } catch (err) {
          setIsLoading(false);
          notify(err?.response?.data?.message || err?.message, 'error');
        }
      } else {
        setIsLoading(false);
        if (!fName) {
          setValidName("empty");
        }
        if (!validEmailName) {
          setEmailValid(false);
        }
      }
    }
  }

  function handleName(e) {
    const regexName = /^[a-zA-Z]/;
    if (e.target.value.length === 0) {
      setValidName("empty");
    } else if (e.target.value?.length > 30) {
      setValidName("length");
    } else {
      if (e.target.value.match(regexName)) {
        setValidName("valid");
      } else {
        setValidName("characters");
      }
    }
  }

  const emailValidator = (e) => {
    let emailAdress = e.target.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress === "") {
      setEmailValid(true);
    }
    if (emailAdress.match(regexEmail)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <Popup trigger={trigger} modal nested>
      {(closePop) => (
        <div className="modal m-auto rounded bg-white relative">
          <form onSubmit={(e) => handleClick(e)}>
            <button
              className="closePop  absolute top-0 right-0 w-5 h-5 mr-2 mt-2 text-2xl text-gray-600"
              onClick={() => {
                closePop();
              }}
            >
              &times;
            </button>
            <div className={styles.card}>
              <div className={styles.close}>
                <i className="fas fa-times"></i>
              </div>
              <div className={styles.heading}>Event Registration</div>
              <div className={styles.body}>
                <div className={styles.header}>Countinue as guest </div>
                <div className={styles.login_text}>
                  <a href="/login">
                    <span className={styles.login}>login</span>
                  </a>
                  for better experiance
                </div>
                <Inputfield label="First Name"
                  id="fullName"
                  name="fullName"
                  onBlur={(e) => handleName(e)}
                  onChange={(e) => {
                    if (validName !== "") {
                      handleName(e);
                    }
                  }}
                  placeholder="First Name"
                />
                {validName === "valid" && ""}
                {validName === "empty" && (
                  <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                    Please enter your name
                  </span>
                )}
                <Inputfield label="Last Name" placeholder="Last Name" id="lastName" />
                <Inputfield label="Email" placeholder="Enter Email"
                  id="email"
                  onBlur={(e) => emailValidator(e)}
                  onChange={(e) => {
                    if (validEmailName !== "") {
                      emailValidator(e);
                    }
                  }}
                />
                {validEmailName === "empty" && (
                  <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                    please enter email address !
                  </span>
                )}
                <Inputfield label="Confirm Email"
                  onBlur={() => confirmEmail()}
                  id="confemail"
                  placeholder="Enter Email"
                />
                <div className={styles.check}>
                  <input type="checkbox"
                    id="updates"
                    name="updates"
                    value="updates"
                    onChange={() => setNsletter(!nsletter)}
                  />
                  <label htmlFor="check" className={styles.checktext}>
                    Keep me updated on the latest news and events from nullcast
                  </label>
                </div>
                <div className={styles.btnbox}>
                  <button className={`${styles.submit_btn} ${isLoading
                    ? "opacity-50 cursor-not-allowed flex items-center justify-center w-60"
                    : "hover:bg-transparent hover:border-black hover-text-pink-710 "
                    }`}
                    type="submit">
                    Submit
                    {isLoading && <LoadIcon color="#fff" height="25px" />}
                  </button>

                </div>
              </div>
            </div>
          </form>
          {open ? (
            <div
              className="flex justify-center">
              <ModalBookEvent
                setOpen={setOpen} open={open}
                onClose={() => {
                  closePop();
                }}
              />
            </div>
          )
            : (
              <div className="">
              </div>
            )
          }
        </div >
      )}
    </Popup >
  );
};

export default ModalBookGuestEvent;

const Inputfield = ({ label, placeholder, id, onBlur, onChange }) => {
  return (
    <div className={styles.textbox}>
      <div>{label}</div>
      <input
        id={id}
        onBlur={(e) => { onBlur }}
        onChange={onChange}
        className={styles.textinput}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
