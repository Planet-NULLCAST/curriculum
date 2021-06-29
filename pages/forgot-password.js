import React, { useState } from "react";
import Head from "next/head";
import AuthService from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validateEmail from "../lib/validateEmail";

export default function forgotPassword() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleOnBlur = (e) => {
    emailCheck(e.target.value);
  };

  const emailCheck = (newVal) => {
    const isValidEmail = validateEmail(newVal);
    // console.log({ isValidEmail });
    if (isValidEmail) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
    if (validEmail !== "") {
      emailCheck(e.target.value);
    }
  };

  const sendEmail = async (email) => {
    // console.log({ email });
    const { message } = await AuthService.sendEmail(email);
    // console.log(message);
    notify(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit", e.target.email.value);
    // console.log({ validEmail });
    if (validEmail) {
      sendEmail(e.target.email.value);
    }
  };

  const notify = (msg) => {
    // console.log(msg);
    toast.dark(msg, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="h-1/2 py-8 w-2/3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <label
            htmlFor="email"
            className="font-semibold text-xl w-2/3 m-4 text-purple-600"
          >
            Enter your email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="border border-purple-600 py-3 h-11 w-2/3"
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            value={email}
          />
          {validEmail !== "" && validEmail === false && (
            <p className="text-sm text-red-400 text-left w-2/3">
              Please enter a valid email
            </p>
          )}
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold text-xl w-2/3 h-11 m-4"
          >
            Send Reset Mail
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
