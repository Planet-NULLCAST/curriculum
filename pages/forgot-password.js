import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { LoadIcon } from "../component/ButtonLoader/LoadIcon";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import notify from "../lib/notify";
import AuthService from "../services/AuthService";
import validateEmail from "../lib/validateEmail";

export default function forgotPassword() {
  const [validEmail, setEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const sendEmail = async (email) => {
    // console.log({ email });
    try {
      const { message } = await AuthService.sendEmail(email);
      // console.log(message);
      notify(message, "dark");
    } catch (err) {
      // console.log(err.response.data.message);
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let mail = emailRef.current.value;
    if (validEmail && mail !== "") {
      sendEmail(mail);
    }
  };

  return (
    <div>
      <Head>
        <title>Forgot Password | Nullcast</title>
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
                <h1 className="text-white font-bold text-2xl leading-10">
                  Forgot Password ?
                </h1>
                <p className={`text-white mt-2 text-sm font-bold mb-3`}>
                  Enter Your Mail id
                </p>
                <div className="container py-2 px-0-imp">
                  <form>
                    <div className="mb-4 flex flex-col">
                      <label
                        className={`text-white mt-2 mb-1 font-semibold text-sm`}
                      >
                        Email
                      </label>
                      <input
                        ref={emailRef}
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

                    <button
                      className={`submitButtons w-full flex items-center justify-center ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-transparent hover-text-pink-710"
                      }`}
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      disabled={!validEmail || isLoading}
                    >
                      {isLoading && <LoadIcon color="#fff" height="23px" />}
                      Send Reset Mail
                    </button>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
