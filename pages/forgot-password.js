import Head from "next/head";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthService from "../services/AuthService";
import validateEmail from "../lib/validateEmail";

export default function forgotPassword() {
  const [isValidEmail, setIsValidEmail] = useState();

  const sendEmail = async (email) => {
    // console.log({ email });
    try {
      const { message } = await AuthService.sendEmail(email);
      // console.log(message);
      notify(message);
    } catch (err) {
      // console.log(err.response.data.message);
      notify(err.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit", e.target.email.value);
    const isValid = validateEmail(e.target.email.value);
    // console.log({ isValid });
    setIsValidEmail(isValid);
    if (isValid) {
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
          />
          {isValidEmail === false && (
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
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}
