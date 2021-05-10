import { useState } from "react";
import Loading from "../component/layout/common/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");

export default function Login() {
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
    const err = fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bod)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.accessToken) {
          document.cookie = `user=${JSON.stringify(data)}`;
          // axios({
          //   method: "post",
          //   mode: "no-cors",
          //   url: `http://localhost:8080/api/progress/javascript`,
          //   headers: {
          //     "x-access-token": `${data.accessToken}`
          //   }
          // })
          //   .then((response) => {
          //     let onChapter = response.data;
          let progress = JSON.parse(
            window.localStorage.getItem("progress")
          ) || [{ courseName: "", completedChapter: [] }];
          let offChapter = progress[0].completedChapter;
          offChapter.forEach((element) => {
            axios({
              method: "post",
              mode: "no-cors",
              url: `http://localhost:8080/api/enrol/javascript/${element}`,
              headers: {
                "x-access-token": `${data.accessToken}`
              }
            }).then((response) => {
              if (response.data.entryAdded) {
                console.log("Chapter Is Completed!");
              } else {
                console.log(response.data);
              }
            });
          });
          axios({
            method: "post",
            mode: "no-cors",
            url: `http://localhost:8080/api/progress/javascript`,
            headers: {
              "x-access-token": `${data.accessToken}`
            }
          })
            .then((response) => {
              let progress = [
                { courseName: "javascript", completedChapter: response.data }
              ];
              window.localStorage.setItem("progress", JSON.stringify(progress));
            })
            .catch((err) => {
              console.log(err.message);
            });
          window.location.replace("http://localhost:3000/");
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
