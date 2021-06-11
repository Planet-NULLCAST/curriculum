import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { baseUrl, authUrl, enrolUrl } from "../config/config";
import "react-toastify/dist/ReactToastify.css";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import Head from "next/head";
import Cookies from "universal-cookie";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const axios = require("axios");
export default function Login() {
  const router = useRouter();
  const cookies = new Cookies();
  // console.log("redirect", router.query.redirect);
  const redirectTo = router.query.redirect;

  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setValidPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const eyeClick = (e) => {
    setHidePassword((prevState) => {
      return !prevState;
    });
  };
  const emailValidator = (e) => {
    let emailAddress = e.target.value;
    // console.log(emailAddress);
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
    // console.log(e.target);
    if (e.target.value) {
      setValidPassword(true);
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
    // console.log(e.target);
    if (validEmail && validPassword) {
      const password = document.querySelector("#password").value;
      const email = document.querySelector("#email").value;
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
          return response.data;
        })
        .then((data) => {
          // console.log(data);
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
            notify(data);
          }
        });
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
            className={`w-full lg:w-1/2 ${Loginstyles.bg_yellow_710} h-full flex flex-col items-center justify-center px-6 md:pl-28 md:pr-10 overflow-x-hidden`}
          >
            <div
              className={`rounded-xl w-full py-5 sm:py-10 px-5 sm:px-10 md:px-5 lg:px-20 max-w-xl flex items-start justify-center flex-col greenLogin relative overflow-y-auto ${Loginstyles.formCard}`}
            >
              <Fade duration={2000}>
                <div
                  className={`absolute top-0 right-0 flex items-center justify-end p-6 w-full ${Loginstyles.bg_green_710}`}
                >
                  <p className={`font-semibold text-white text-sm flex mr-2`}>
                    Don’t have an Account ?
                  </p>
                  <Link
                    href={{
                      pathname: `/signup`
                    }}
                  >
                    <div className="submitButtons cursor-pointer py-1">
                      Sign Up
                    </div>
                  </Link>
                </div>
                <h1 className="text-white font-extrabold text-2xl">Login</h1>
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
                        className={`inputStyle ${Loginstyles.inputGreen}`}
                        id="email"
                        name="email"
                        type="text"
                        onChange={(e) => emailValidator(e)}
                      />
                      {validEmail ? (
                        ""
                      ) : (
                        <span className="flex items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1">
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
                          className={`inputStyle w-full ${Loginstyles.inputGreen}`}
                          id="password"
                          name="password"
                          onChange={handlePassword}
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
                    </div>
                    <button
                      className={`submitButtons w-full py-2 ${
                        !validEmail || !validPassword
                          ? "disabled:opacity-50 cursor-default"
                          : ""
                      }`}
                      type="submit"
                      onClick={(e) => handleClick(e)}
                      // disabled={!validEmail || !validPassword ? true : false}
                    >
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
