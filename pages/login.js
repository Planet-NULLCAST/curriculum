import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { baseUrl, authUrl, enrolUrl } from "../config/config";
import "react-toastify/dist/ReactToastify.css";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { LoadIcon } from "../component/ButtonLoader/LoadIcon";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const axios = require("axios");

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const cookie = JSON.parse(
        getCookieValue(context.req.headers.cookie, "userNullcast")
      );
      // console.log(cookie);
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
    props: {}
  };
}

export default function Login() {
  const router = useRouter();
  // console.log("redirect", router.query.redirect);
  const redirectTo = router.query.redirect;

  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [hidePassword, setHidePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const eyeClick = (e) => {
    setHidePassword((prevState) => {
      return !prevState;
    });
  };
  const emailValidator = (e) => {
    let emailAddress = e.target.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAddress.match(regexEmail)) {
      setEmailValid(true);
    } else if (!e.target.value) {
      setEmailValid(false);
    } else {
      setEmailValid(false);
    }
  };

  function handlePassword(e) {
    if (e.target.value) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  const notify = (err) =>
    toast.error(err.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(e.target);
    if (validEmail && validPassword) {
      const password = document.querySelector("#password").value;
      const email = document.querySelector("#email").value;
      if (password && email) {
        const loginDetails = {
          email: email,
          password: password
        };
        // console.log({ loginDetails });
        const err = axios({
          method: "POST",
          url: `${baseUrl}${authUrl}/signin`,
          headers: {
            "Content-Type": "application/json"
          },
          data: loginDetails
        })
          .then((response) => {
            setIsLoading(false);
            return response.data;
          })
          .then((data) => {
            if (data.accessToken) {
              document.cookie = `userNullcast=${JSON.stringify(data)}`;
              sessionStorage.setItem("userNullcast", JSON.stringify(data));

              let progress = JSON.parse(
                window.localStorage.getItem("progress")
              ) || [{ courseName: "", completedChapter: [] }];
              axios({
                method: "post",
                url: `${baseUrl}${enrolUrl}/progress`,
                headers: {
                  "x-access-token": `${data.accessToken}`
                },
                data: progress
              }).then((response) => {
                // console.log(response);
              });
              axios({
                method: "post",
                url: `${baseUrl}/api/progress/all`,
                headers: {
                  "x-access-token": `${data.accessToken}`
                }
              })
                .then((response) => {
                  window.localStorage.setItem(
                    "progress",
                    JSON.stringify(response.data)
                  );
                })
                .catch((err) => {
                  console.log(err.message);
                });
              if (redirectTo) {
                router.push(redirectTo);
              } else {
                router.push("/");
              }
            } else {
              setIsLoading(false);
              notify(data);
            }
          });
      } else {
        // if(!email && !password){
        //   setEmailValid(false);

        // }
        setIsLoading(false);
        if (!email) {
          setEmailValid(false);
        }
        if (!password) {
          setValidPassword(false);
        }
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Login | Nullcast</title>
      </Head>
      <Link href="/">
        <img
          src="/images/nullcast.svg"
          alt="logo"
          className="fixed left-5 lg:left-10 top-5 lg:top-10 z-50 cursor-pointer"
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
              className={`rounded-xl w-full py-5 sm:py-10 px-5 sm:px-10 md:px-5 lg:px-20 max-w-xl flex items-start justify-center flex-col greenLogin relative overflow-y-auto ${Loginstyles.formCard}`}
            >
              <Fade duration={2000}>
                <div
                  className={`absolute top-0 right-0 flex items-center justify-end p-6 w-full ${Loginstyles.bg_green_710}`}
                >
                  <p className={`sm:flex hidden font-semibold text-white text-sm flex mr-2 md:mr-5`}>
                    Don’t have an Account ?
                  </p>
                  {isLoading ? (
                    <div className="md:mr-4 bg-pink-710 font-semibold border border-pink-710 rounded-sm duration-700 text-white focus:outline-none flex justify-center items-center w-20 h-10 opacity-50 cursor-not-allowed">
                      Sign Up
                    </div>
                  ) : (
                    <Link
                      href={{
                        pathname: `/signup`
                      }}
                    >
                      <div className="md:mr-4 bg-pink-710 font-semibold hover:bg-transparent hover-text-pink-710 border border-pink-710 rounded-sm duration-700 text-white focus:outline-none cursor-pointer flex justify-center items-center w-20 h-10">
                        Sign Up
                      </div>
                    </Link>
                  )}
                </div>
                <h1 className="text-white font-bold text-2xl leading-10">
                  Login
                </h1>
                <p className={`text-white mt-2 text-sm font-bold mb-3`}>
                  Welcome Back!
                </p>
                <div className="container py-2 px-0-imp">
                  <form method="" action="">
                    <div className="mb-1 flex flex-col">
                      <label
                        className={`text-white mt-2 mb-1 font-semibold text-sm`}
                      >
                        Email
                      </label>
                      <input
                        placeholder="Enter email"
                        maxLength="30"
                        className={`inputStyle placeholder-gray-600 pr-3 ${Loginstyles.inputGreen}`}
                        id="email"
                        name="email"
                        type="text"
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
                          Invalid email field !
                        </span>
                      )}
                    </div>
                    <div className="mb-4 flex flex-col">
                      <label
                        className={`text-white mt-2 mb-1 font-semibold text-sm`}
                      >
                        Password
                      </label>
                      <div className="relative w-full">
                        <input
                          placeholder="Enter password"
                          maxLength="50"
                          className={`inputStyle placeholder-gray-600 w-full pr-10 ${Loginstyles.inputGreen}`}
                          id="password"
                          name="password"
                          onBlur={(e) => handlePassword(e)}
                          onChange={(e) => {
                            if (!validPassword) {
                              handlePassword(e);
                            }
                          }}
                          type={`${hidePassword ? "text" : "password"}`}
                        />
                        <div className="flex justify-center items-center items h-full absolute right-0 top-0 w-10">
                          <img
                            src="/images/eye.svg"
                            className="w-1/2 cursor-pointer opacity-50 hover:opacity-100 duration-700"
                            onClick={(e) => eyeClick(e)}
                          ></img>
                        </div>
                      </div>
                      {validPassword ? (
                        ""
                      ) : (
                        <span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                          Please enter password
                        </span>
                      )}
                    </div>
                    <button
                      className={`submitButtons w-full flex items-center justify-center ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-transparent hover-text-pink-710"
                      }`}
                      type="submit"
                      onClick={(e) => {
                        handleClick(e);
                      }}
                      disabled={!validEmail || !validPassword || isLoading}
                    >
                      {isLoading && <LoadIcon color="#fff" height="23px" />}
                      Login
                    </button>
                  </form>
                  <ToastContainer />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
