import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { getCookieValue } from "../lib/cookie";
import { LoadIcon } from "../component/ButtonLoader/LoadIcon";
import { signUp } from "../services/AuthService";

import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import notify from "../lib/notify";
import moment from "moment";
export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const cookie = JSON.parse(
        getCookieValue(context.req.headers.cookie, "userNullcast")
      );
      if (cookie) {
        return {
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    }
  } catch (err) {
    console.log("User not logged in");
  }
  return {
    props: {
      referer: context.req.headers.referer ? context.req.headers.referer : ""
    }
  };
}

export default function SignUp({ referer }) {
  const router = useRouter();
  const [validEmail, setEmailValid] = useState(true);
  const [validTerms, setTermsValid] = useState(true);
  const [validPassword, setValidPassword] = useState("");
  const [validUserName, setValidUserName] = useState("");
  const [validName, setValidName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.getElementById("fullName").focus();
  }, []);
  const termsClick = (e) => {
    setTerms((prevState) => {
      return !prevState;
    });
  };
  const eyeClick = (e) => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };
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
  function handlePassword(e) {
    const regexPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (e.target.value.length === 0) {
      setValidPassword("empty");
    } else if (e.target.value?.length < 8) {
      setValidPassword("length");
    } else if (e.target.value.match(regexPassword)) {
      setValidPassword("valid");
    } else {
      setValidPassword("characters");
    }
  }
  // const validatePassword = (value) => {
  //   const count = {
  //     lower: 0,
  //     upper: 0,
  //     digit: 0,
  //     special: 0
  //   };

  //   for (const char of value) {
  //     if (/[a-z]/.test(char)) {
  //       count.lower++;
  //     } else if (/[A-Z]/.test(char)) {
  //       count.upper++;
  //     } else if (/\d/.test(char)) {
  //       count.digit++;
  //     } else if (/\S/.test(char)) {
  //       count.special++;
  //     }
  //   }

  //   if (Object.values(count).filter(Boolean).length < 4) {
  //     return "A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.";
  //   }

  //   return true;
  // };
  function handleUserName(e) {
    const regexUser = /^[a-zA-Z0-9]\S*$/;
    if (e.target.value.length === 0) {
      setValidUserName("empty");
    } else if (e.target.value?.length < 5 || e.target.value?.length > 15) {
      setValidUserName("length");
    } else {
      if (e.target.value.match(regexUser)) {
        setValidUserName("valid");
      } else {
        setValidUserName("characters");
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

  // Getting token from cookie
  const cookies = new Cookies();
  const userToken = cookies.get("token");

  async function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    const fName = e.target.fullName.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const updates = e.target.updates.value;

    if (!email) {
      setEmailValid(false);
    }

    if (validEmail) {
      if (fName && password && email && username && terms) {
          try {
            const data = await signUp(email, password, fName, username);
            const newDate = new Date(moment().add(30, "days")).toUTCString();
            const expires = `; expires=${newDate}`;
            const userData = data.user;
            document.cookie = `userNullcast=${JSON.stringify(
              userData
            )}${expires}`;
            localStorage.setItem("userNullcast", JSON.stringify(userData));
            // sessionStorage.setItem("userNullcast", JSON.stringify(data.user));
            if (referer) {
              router.back();
            } else {
              router.push("/");
            }
          } catch (err) {
            setIsLoading(false);
            let errorMessage = err?.response?.data?.message.split('"')[1] === 'users_email_key' ? "email already exists" : "username not available"
            console.log(errorMessage)
            notify(err?.response?.data?.message && errorMessage, 'error');
          }

          // let progress = JSON.parse(
          //   window.localStorage.getItem("progress")
          // ) || [{ courseName: "", completedChapter: [] }];
          // axios({
          //   method: "post",
          //   url: `${baseUrl}${enrolUrl}/progress`,
          //   headers: {
          //     "x-access-token": `${document.cookie}`
          //   },
          //   data: progress
          // }).then((response) => {
          //   // console.log(response);
          // });
          // axios({
          //   method: "post",
          //   url: `${baseUrl}/api/progress/all`,
          //   headers: {
          //     "x-access-token": `${document.cookie}`
          //   }
          // })
          //   .then((response) => {
          //     window.localStorage.setItem(
          //       "progress",
          //       JSON.stringify(response.data)
          //     );
          //   })
          //   .catch((err) => {
          //     console.log(err.message);
          //   });
          if (referer) {
            router.back();
          } else {
            router.push("/");
          }
      } else {
          setIsLoading(false);
          if (!fName) {
            setValidName("empty");
          }
          if (!password) {
            setValidPassword("empty");
          }
          if (!email) {
            setEmailValid(false);
          }
          if (!username) {
            setValidUserName("empty");
          }
          if (!terms) {
            setTermsValid(false);
        }
        // setIsLoading(false);
      }
    }
  }
  return (
    <div className="w-full min-h-screen bg-white flex">
      <Head>
        <title>Sign Up | Nullcast</title>{" "}
      </Head>
      <Link href="/">
        <img
          src="/images/nullcast.svg"
          alt="logo"
          className="fixed left-5 lg:left-14 top-5 lg:top-14 z-50 cursor-pointer"
        ></img>
      </Link>
      <div
        className={`w-full h-screen flex ${Loginstyles.bg_yellow_710} loginSection`}
      >
        <SideLogin />
        <div className="flex justify-end w-full items-center">
          <div
            className={`${Loginstyles.bg_yellow_710} h-full flex flex-col items-center lg:items-end justify-center overflow-x-hidden greenLoginDiv`}
          >
            <div
              className={`rounded-xl w-full max-w-xl flex items-start justify-center flex-col greenLogin relative overflow-hidden ${Loginstyles.formCard}`}
            >
              <Fade duration={2000}>
                <div
                  className={`absolute top-0 right-0 flex items-center justify-end px-6 pt-5 pb-2 w-full z-20 ${Loginstyles.bg_green_710}`}
                >
                  <p
                    className={`sm:flex hidden font-semibold text-white text-sm flex mr-2 md:mr-5`}
                  >
                    Already have an Account ?
                  </p>
                  {isLoading ? (
                    <div className="md:mr-4 bg-pink-710 font-semibold border border-pink-710 rounded-sm duration-700 text-white focus:outline-none flex justify-center items-center w-20 h-10 opacity-50 cursor-not-allowed">
                      Login
                    </div>
                  ) : (
                    <Link
                      href={{
                        pathname: `/login`
                      }}
                    >
                      <div className="md:mr-4 bg-pink-710 font-semibold hover:bg-transparent hover-text-pink-710 border border-pink-710 rounded-sm duration-700 text-white focus:outline-none cursor-pointer flex justify-center items-center w-20 h-10">
                        Login
                      </div>
                    </Link>
                  )}
                </div>
                <div
                  className={`absolute bottom-0 right-0 py-3 w-full z-50 ${Loginstyles.bg_green_710}`}
                ></div>
                <div className="w-full max-h-full flex flex-col justify-center ">
                  <div className="w-full mt-14 mb-6 h-full flex flex-col justify-start overflow-y-auto  px-5 sm:px-10 md:px-5 lg:px-20 py-2">
                    <h1 className="font-bold text-2xl text-white leading-10">
                      Sign Up
                    </h1>
                    <p className={`font-bold mt-2 text-white text-sm`}>
                      Want to be a Mighty Dev Duck?
                    </p>
                    <div className="container py-2 px-0-imp">
                      <form onSubmit={(e) => handleClick(e)}>
                        <div className="mb-1 flex flex-col" name="inner-div">
                          <label
                            className={`text-white mt-2 mb-1 font-semibold text-`}
                            htmlFor="fullName"
                          >
                            Full Name
                          </label>
                          <input
                            placeholder="Enter full name"
                            maxLength="50"
                            className={`inputStyle pr-3 placeholder-gray-600 ${Loginstyles.inputGreen}`}
                            id="fullName"
                            name="fullName"
                            type="text"
                            // onBlur={(e) => handleName(e)}
                            onChange={(e) => {
                              if (validName !== "") {
                                handleName(e);
                              }
                            }}
                          />
                          {validName === "valid" && ""}
                          {validName === "empty" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Please enter your name
                            </span>
                          )}
                          {validName === "length" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Full name can only contain maximum of 30
                              characters
                            </span>
                          )}
                          {validName === "characters" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Full name can only contain alphabets
                            </span>
                          )}
                        </div>
                        <div className="mb-1 flex flex-col">
                          <label
                            className={`text-white mt-2 mb-1 font-semibold text-sm`}
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <input
                            placeholder="Enter username"
                            maxLength="15"
                            className={`inputStyle pr-3 placeholder-gray-600 ${Loginstyles.inputGreen}`}
                            id="username"
                            name="username"
                            type="text"
                            onBlur={(e) => handleUserName(e)}
                            onChange={(e) => {
                              if (validUserName !== "") {
                                handleUserName(e);
                              }
                            }}
                          />
                          {validUserName === "valid" && ""}
                          {validUserName === "empty" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Please enter username
                            </span>
                          )}
                          {validUserName === "length" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Username must be between 5 to 15 characters
                            </span>
                          )}
                          {validUserName === "characters" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Username can only contain alphabets, numbers and
                              cannot contain spaces
                            </span>
                          )}
                        </div>
                        <div className="mb-1 flex flex-col">
                          <label
                            className={`text-white mt-2 mb-1 font-semibold text-sm`}
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            placeholder="Enter email"
                            maxLength="30"
                            className={`inputStyle pr-3 placeholder-gray-600 ${Loginstyles.inputGreen}`}
                            id="email"
                            name="email"
                            type="email"
                            onBlur={(e) => emailValidator(e)}
                            onChange={(e) => {
                              if (!validEmail) {
                                emailValidator(e);
                              }
                            }}
                          />
                          {validEmail ? (
                            ""
                          ) : (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Invalid email address !
                            </span>
                          )}
                        </div>
                        <div className="mb-4 flex flex-col">
                          <label
                            className={`text-white mt-2 mb-1 font-semibold text-sm`}
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div className="relative w-full">
                            <input
                              placeholder="Enter password"
                              // maxLength=""
                              className={`inputStyle pr-10 placeholder-gray-600 w-full ${Loginstyles.inputGreen}`}
                              id="password"
                              name="password"
                              onBlur={(e) => handlePassword(e)}
                              onChange={(e) => {
                                if (validPassword !== "") {
                                  handlePassword(e);
                                }
                              }}
                              type={`${showPassword ? "text" : "password"}`}
                            />
                            <div className="flex justify-center items-center items h-full absolute right-0 top-0 w-10">
                              <img
                                src="/images/eye.svg"
                                className="w-1/2 cursor-pointer opacity-50 hover:opacity-100 duration-700 focus-visible:outline-none"
                                onClick={(e) => eyeClick(e)}
                              ></img>
                            </div>
                          </div>
                          {validPassword === "valid" && ""}
                          {validPassword === "empty" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Please enter password
                            </span>
                          )}
                          {validPassword === "length" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Your password must contain minimum eight
                              characters, at least one uppercase letter, one
                              lowercase letter, one number and one special
                              character
                            </span>
                          )}
                          {validPassword === "characters" && (
                            <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                              Your password must contain minimum eight
                              characters, at least one uppercase letter, one
                              lowercase letter, one number and one special
                              character
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-xs mb-1">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            value="terms"
                            onClick={(e) => {
                              termsClick(e);
                              setTermsValid(e.target.checked);
                            }}
                          />
                          <label
                            htmlFor="terms"
                            className="ml-2 text-white"
                          >
                            I agree to the{" "}
                            <a href="#" className="text-white cursor-pointer underline">
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                        <div className="flex items-center text-xs mb-3">
                          <input
                            type="checkbox"
                            id="updates"
                            name="updates"
                            value="updates"
                          />
                          <label
                            htmlFor="updates"
                            className="ml-2 text-white"
                          >
                            Send me latest updates
                          </label>
                        </div>
                        {validTerms ? (
                          ""
                        ) : (
                          <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-0 mb-2">
                            You must accept our terms and conditions{" "}
                          </span>
                        )}
                        <button
                          className={`submitButtons w-full flex items-center justify-center ${isLoading
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-transparent hover-text-pink-710"
                            }`}
                          type="submit"
                          disabled={
                            !validEmail ||
                            validPassword === "length" ||
                            validPassword === "characters" ||
                            validPassword === "empty" ||
                            validUserName === "length" ||
                            validUserName === "characters" ||
                            validUserName === "empty" ||
                            validName === "length" ||
                            validName === "characters" ||
                            validName === "empty" ||
                            !validTerms ||
                            isLoading
                          }
                        >
                          {isLoading && <LoadIcon color="#fff" height="23px" />}
                          Create account
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}
