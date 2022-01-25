import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Cookies from "universal-cookie";
import notify from "../../lib/notify";
import EventService from "../../services/EventService";
import { LoadIcon } from "../../component/ButtonLoader/LoadIcon";

const ModalBookGuestEvent = ({
  trigger,
  purpose,
  onClose,
  text,
  event,
  secondaryText,
  heading,
  buttonColor
}) => {

  const [validName, setValidName] = useState("");
  const [validEmail, setEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [userId, setUserId] = useState("");
  const _cookies = new Cookies();

  // console.log(event, 'd');

  function confirmEmail() {
    var email = document.getElementById("email").value
    var confemail = document.getElementById("confemail").value
    if (email != confemail) {
      alert('Email Not Matching!');
    }
  }

  // useEffect(() => {
  //   console.log('hey');
  //   const userId = _cookies.get("userNullcast");
  //   console.log(userId, 'userId');
  //   if (userId) {
  //     setUserId(userId.id);
  //   }
  // }, []);


  async function handleClick(e) {

    console.log('heu');
    e.preventDefault();
    // setIsLoading(true);
    const fName = e.target.fullName.value;
    const lName = e.target.lastName.value;
    confirmEmail();
    const email = e.target.email.value;
    // const eventId = event.id;
    if (!email) {
      setEmailValid(false);
    }
    if (validEmail) {
      if (fName && email) {
        try {
          const data = await EventService.bookEvent(email, event.id, fName);
          if (data) {
            notify(data.message);
            // setIsLoading(false)
            onClose();
            // closePop();
          }
        } catch (err) {
          console.log(err);
          // setIsLoading(false);
          notify(err?.response?.data?.message || err?.message, 'error');
        }
      } else {
        setIsLoading(false);
        if (!fName) {
          setValidName("empty");
        }
        if (!email) {
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
        <div className="modal m-auto rounded bg-white p-4 relative">

          <form onSubmit={(e) => handleClick(e)}>
            <button
              className="closePop  absolute top-0 right-0 w-5 h-5 mr-2 mt-2 text-2xl text-gray-600"
              onClick={() => {
                onClose();
                closePop();
              }}          >
              &times;
            </button>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Book Event</div>
            <div className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text">
              <div className="w-full flex flex-col mt-4 justify-center mb-3">
                <div className="flex flex-col w-full mr-3">
                  <label className="mb-2 text-sm font-semibold" htmlFor="even name">
                    First Name
                  </label>
                  <input
                    type="text"
                    onBlur={(e) => handleName(e)}
                    onChange={(e) => {
                      if (validName !== "") {
                        handleName(e);
                      }
                    }} className="bg-gray-100 p-4 rounded border-grayBorder border-2"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter First Name"
                  />
                  {validName === "valid" && ""}
                  {validName === "empty" && (
                    <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                      Please enter your name
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="mb-2 text-sm font-semibold"
                    htmlFor="event location"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-100 p-4 rounded border-grayBorder border-2"
                    name="event location"
                    placeholder="Enter Last Name"
                  />

                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="mb-2 text-sm font-semibold"
                    htmlFor="event location"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onBlur={(e) => emailValidator(e)}
                    onChange={(e) => {
                      if (!validEmail) {
                        emailValidator(e);
                      }
                    }}
                    className="bg-gray-100 p-4 rounded border-grayBorder border-2"
                    name="event location"
                    placeholder="Enter email"
                  />
                  {validEmail ? (
                    ""
                  ) : (
                    <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                      Invalid email address !
                    </span>
                  )}

                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="mb-2 text-sm font-semibold"
                    htmlFor="event location"
                  >
                    confirm email
                  </label>
                  <input
                    type="text"
                    onBlur={() => confirmEmail()}
                    id="confemail"
                    className="bg-gray-100 p-4 rounded border-grayBorder border-2"
                    name="event location"
                    placeholder="confirm email"
                  />
                </div>
              </div>
            </div>
            <button
              className={`submitButtons w-full items-center justify-center ${isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-transparent hover-text-pink-710"
                }`}
              type="submit"
            // disabled={
            //   !validEmail ||
            //   validName === "length" ||
            //   validName === "characters" ||
            //   validName === "empty" ||
            //   isLoading
            // }
            >
              {/* {isLoading && <LoadIcon color="#fff" height="33px" />} */}
              {purpose}
            </button>
            <button
              className="w-full my-1 capitalize border border-black text-black hover:text-white bg-white font-bold hover:bg-black flex justify-center items-center h-10 duration-700 rounded text-sm outline-none"
              onClick={() => {
                onClose();
                closePop();
              }}            >
              Cancel
            </button>
          </form>

        </div>
      )
      }
    </Popup >
  );
};

export default ModalBookGuestEvent;
