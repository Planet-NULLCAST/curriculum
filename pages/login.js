import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { baseUrl, authUrl, enrolUrl } from "../config/config";
import "react-toastify/dist/ReactToastify.css";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import Head from "next/head";
const axios = require("axios");

export default function Login() {
  const router = useRouter();
  // console.log("redirect", router.query.redirect);
  const redirectTo = router.query.redirect;

  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setValidPassword] = useState(false);

  const eyeClick = (e) => {
    setValidPassword((prevState) => {
      return !prevState;
    });
  };
  const emailValidator = (e) => {
    let emailAdress = e.target.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

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
    if (validEmail) {
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
            document.cookie = `user=${JSON.stringify(data)}`;

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
      <div className="w-full h-screen bg-white flex">
        <div className="fixed top-0 right-0 flex items-center p-3 pr-6 sm:p-6 sm:pr-12">
          <p className={`font-semibold ${Loginstyles.text_gray_910}`}>
            Don’t have an Account ?
          </p>
          <a
            href="/signup"
            className="ml-3 bg-gray-900 px-4 py-2 rounded text-white text-sm hover:bg-white hover:text-gray-900 border border-gray-900 duration-700"
          >
            Sign Up
          </a>
        </div>
        <SideLogin />
        <div className="flex justify-end w-full mt-20">
          <div className="w-full lg:w-1/2 bg-white h-full flex flex-col items-center justify-center p-6 md:p-20 md:pb-5 md:pt-0 pt-0">
            <div className="border border-gray-100 shadow-lg rounded-xl w-full h-fit p-5 sm:p-10 max-w-xl">
              <h1 className="text-gray-500 font-extrabold text-xl">Login</h1>
              <p className={`${Loginstyles.text_gray_910} mt-2 text-sm`}>
                Welcome Back!
              </p>
              <div className="container py-2 px-0-imp">
                <form method="" action="">
                  <div className="mb-1 flex flex-col">
                    <label
                      className={`${Loginstyles.text_gray_910} mt-2 mb-1 font-semibold text-sm`}
                    >
                      Email
                    </label>
                    <input
                      placeholder="Enter email"
                      className="inputStyle"
                      id="email"
                      type="text"
                      onChange={(e) => emailValidator(e)}
                    />
                    {validEmail ? (
                      ""
                    ) : (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Invalid email field !
                      </span>
                    )}
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label
                      className={`${Loginstyles.text_gray_910} mt-2 mb-1 font-semibold text-sm`}
                    >
                      Password
                    </label>
                    <div className="relative w-full">
                      <input
                        placeholder="Enter password"
                        className="inputStyle w-full"
                        id="password"
                        type={`${validPassword ? "text" : "password"}`}
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
                    className="submitButtons w-full"
                    type="submit"
                    onClick={(e) => handleClick(e)}
                  >
                    Login
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
