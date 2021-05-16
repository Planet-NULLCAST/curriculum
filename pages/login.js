import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      progress: undefined,
    });
  const handleClick = (e) => {
    e.preventDefault();
    const pass = document.querySelector("#password").value;
    const user = document.querySelector("#username").value;
    const bod = {
      username: user,
      password: pass,
    };
    const err = axios({
      method: "POST",
      url: `${baseUrl}${authUrl}/signin`,
      headers: {
        "Content-Type": "application/json",
      },
      data: bod,
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
              "x-access-token": `${data.accessToken}`,
            },
            data: progress,
          }).then((response) => {
            console.log(response);
          });
          axios({
            method: "post",
            url: `http://localhost:8080/api/progress/all`,
            headers: {
              "x-access-token": `${data.accessToken}`,
            },
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
    <div className="max-w-lg bg-blue-800 shadow-2xl rounded-lg mx-auto text-center py-12 mt-12">
      <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
        Login Box
      </h1>
      <div className="container py-5 max-w-md mx-auto">
        <form method="" action="">
          <div className="mb-4">
            <input
              placeholder="Username"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-gray-400 "
              href="/signup"
            >
              Don't have account?
            </a>
          </div>
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
  );
}
