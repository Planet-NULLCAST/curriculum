import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

import "react-toastify/dist/ReactToastify.css";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";

// import LoginSide from "../images/svg/login_side.svg";
// import LoginSide from "../images/png/login_side.png";

import { baseUrl, authUrl, enrolUrl } from "../constants/axios";
import { useRouter } from "next/router";
const axios = require("axios");

export default function Login() {
  const router = useRouter();
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
    const pass = document.querySelector("#password").value;
    const user = document.querySelector("#username").value;
    const bod = {
      username: user,
      password: pass
    };
    const err = axios({
      method: "POST",
      url: `${baseUrl}${authUrl}/signin`,
      headers: {
        "Content-Type": "application/json"
      },
      data: bod
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
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
            console.log(response);
          });
          axios({
            method: "post",
            url: `http://localhost:8080/api/progress/all`,
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
          router.push("/");
        } else {
          notify(data);
        }
      });
  };
  return (
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
            <div className="container py-2">
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
                    id="username"
                    type="text"
                  />
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
                      type="password"
                    />
                    <div className="flex justify-center items-center items h-full absolute right-0 top-0 w-10">
                      <img
                        src="/images/eye.svg"
                        className="w-1/2 cursor-pointer opacity-50 hover:opacity-100 duration-700"
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
                {/* <a
                  href="/signup"
                >
                  Don't have account?
                </a> */}
              </form>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
