import { useState } from "react";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl, clientUrl } from "../config/config";
import Head from "next/head";

export default function SignUp() {
  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setValidPassword] = useState(false);
  const [terms, setTerms] = useState(false);

  const notify = (item) =>
    toast(item.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  const termsClick = (e) => {
    setTerms((prevState) => {
      return !prevState;
    });
  };
  const eyeClick = (e) => {
    setValidPassword((prevState) => {
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
  const handleClick = (e) => {
    e.preventDefault();
    const fName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;
    const update = document.querySelector("#updates").value;
    // console.log(terms);
    if (validEmail && terms) {
      const bod = {
        fullName: fName,
        email: email,
        username: user,
        password: pass
      };
      fetch("http://localhost:8080/api/auth/signup", {
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
          if (data.message === "User was registered successfully!") {
            console.log(data);
            window.location.replace("/login");
          }
          notify(data);
        });
    }
  };
  return (
    <div className="w-full min-h-screen bg-white flex">
      <Head>
        <title>Sign Up | Nullcast</title>{" "}
      </Head>
      <div className="fixed w-full lg:w-1/2 top-0 right-0 flex items-center justify-end p-3 pr-6 sm:p-6 sm:pr-12 sm:pb-0 bg-white">
        <p className={`font-semibold ${Loginstyles.text_gray_910}`}>
          Already have an Account ?
        </p>
        <a
          href="/login"
          className="ml-3 bg-gray-900 px-4 py-2 rounded text-white text-sm hover:bg-white hover:text-gray-900 border border-gray-900 duration-700"
        >
          Login
        </a>
      </div>
      <SideLogin />
      <div className="flex justify-end w-full mt-20">
        <div className="w-full lg:w-1/2 bg-white h-full flex flex-col items-center justify-center p-6 md:p-20 md:pb-5 md:pt-0 pt-0">
          <div className="border border-gray-100 shadow-lg rounded-xl w-full h-fit p-5 sm:p-10 max-w-xl">
            <h1 className="text-gray-500 font-extrabold text-xl">Sign up</h1>
            <p className={`${Loginstyles.text_gray_910} mt-2 text-sm`}>
              Want to be a Mighty Dev Duck? Login and contribute to our
              community
            </p>
            <div className="container py-2">
              <form method="" action="">
                <div className="mb-1 flex flex-col">
                  <label
                    className={`${Loginstyles.text_gray_910} mt-2 mb-1 font-semibold text-sm`}
                  >
                    Full Name
                  </label>
                  <input
                    placeholder="Enter full name"
                    className="inputStyle"
                    id="fullName"
                    type="text"
                  />
                </div>
                <div className="mb-1 flex flex-col">
                  <label
                    className={`${Loginstyles.text_gray_910} mt-2 mb-1 font-semibold text-sm`}
                  >
                    Username
                  </label>
                  <input
                    placeholder="Enter username"
                    className="inputStyle"
                    id="username"
                    type="text"
                  />
                </div>
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
                    type="email"
                    onChange={(e) => emailValidator(e)}
                  />
                  {validEmail ? (
                    ""
                  ) : (
                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      Invalid email address !
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
                <div className="flex items-center text-xs mb-1">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value="terms"
                    className="cursor-pointer"
                    onClick={(e) => termsClick(e)}
                  />
                  <label htmlFor="terms" className="ml-2 cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-blue-700">
                      terms and conditions
                    </a>
                  </label>
                </div>
                <div className="flex items-center text-xs mb-3">
                  <input
                    type="checkbox"
                    id="updates"
                    name="updates"
                    value="updates"
                    className="cursor-pointer"
                  />
                  <label htmlFor="updates" className="ml-2 cursor-pointer">
                    Send me latest updates
                  </label>
                </div>
                <button
                  className="submitButtons w-full"
                  type="submit"
                  onClick={(e) => handleClick(e)}
                >
                  Create account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
