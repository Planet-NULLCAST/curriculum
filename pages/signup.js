import { useState } from "react";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../config/config";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";

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
    // const fName = document.querySelector("#fullName").value;
    // const email = document.querySelector("#email").value;
    // const user = document.querySelector("#username").value;
    // const pass = document.querySelector("#password").value;
    // const update = document.querySelector("#updates").value;
    const fName = e.target.fullName.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const updates = e.target.updates.value;

    console.log(updates);
    if (validEmail && terms) {
      const signupData = {
        fullName: fName,
        email: email,
        username: username,
        password: password,
        updates: updates
      };
      fetch(`${baseUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signupData)
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
              className={`rounded-xl w-full max-w-xl flex items-start justify-center flex-col greenLogin relative overflow-hidden ${Loginstyles.formCard}`}
            >
              <Fade duration={2000}>
                <div
                  className={`absolute top-0 right-0 flex items-center justify-end px-6 pt-5 pb-3 w-full ${Loginstyles.bg_green_710}`}
                >
                  <p
                    className={`font-semibold text-white text-sm flex mr-2`}
                  >
                    Already have an Account ?
                  </p>
                  <Link
                    href={{
                      pathname: `/login`
                    }}
                  >
                    <div className="submitButtons cursor-pointer py-1">
                      Login
                    </div>
                  </Link>
                </div>
                <div
                  className={`absolute bottom-0 right-0 py-3 w-full z-50 ${Loginstyles.bg_green_710}`}
                ></div>
                <div className="w-full mt-14 h-full overflow-y-auto mb-6 px-5 sm:px-10 md:px-5 lg:px-20 py-2">
                  <h1 className="font-extrabold text-2xl text-white ">
                    Sign Up
                  </h1>
                  <p className={`font-bold mt-2 text-white text-sm`}>
                    Want to be a Mighty Dev Duck? Login and contribute to our
                    community
                  </p>
                  <div className="container py-2 px-0-imp">
                    <form onSubmit={(e) => handleClick(e)}>
                      <div className="mb-1 flex flex-col" name="inner-div">
                        <label
                          className={`text-white mt-2 mb-1 font-semibold text-sm`}
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          placeholder="Enter full name"
                          className={`inputStyle ${Loginstyles.inputGreen}`}
                          id="fullName"
                          name="fullName"
                          type="text"
                        />
                      </div>
                      <div className="mb-1 flex flex-col">
                        <label
                          className={`text-white mt-2 mb-1 font-semibold text-sm`}
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          placeholder="Enter username"
                          className={`inputStyle ${Loginstyles.inputGreen}`}
                          id="username"
                          name="username"
                          type="text"
                        />
                      </div>
                      <div className="mb-1 flex flex-col">
                        <label
                          className={`text-white mt-2 mb-1 font-semibold text-sm`}
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          placeholder="Enter email"
                          className={`inputStyle ${Loginstyles.inputGreen}`}
                          id="email"
                          name="email"
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
                          className={`text-white mt-2 mb-1 font-semibold text-sm`}
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <div className="relative w-full">
                          <input
                            placeholder="Enter password"
                            className={`inputStyle w-full ${Loginstyles.inputGreen}`}
                            id="password"
                            name="password"
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
                        <label
                          htmlFor="terms"
                          className="ml-2 cursor-pointer text-white"
                        >
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
                        <label
                          htmlFor="updates"
                          className="ml-2 cursor-pointer text-white"
                        >
                          Send me latest updates
                        </label>
                      </div>
                      <button
                        className="submitButtons w-full py-2"
                        type="submit"
                      >
                        Create account
                      </button>
                    </form>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
