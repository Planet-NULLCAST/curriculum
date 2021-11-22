import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { LoadIcon } from "../component/ButtonLoader/LoadIcon";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
// import Cookies from "universal-cookie";
import moment from "moment";
import { signIn } from "../services/AuthService";

import { getCookieValue } from "../lib/cookie";
import notify from "../lib/notify";

export async function getServerSideProps(context) {
  // console.log(context.req.headers.referer);
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(context.req.headers.cookie, "token");
      if (contextCookie) {
        return {
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    }
    return {
      props: {
        referer: context.req.headers.referer ? context.req.headers.referer : ""
      }
    };
  } catch (err) {
    console.log(err);
    return {
      props: {}
    };
  }
}

export default function Login({ referer }) {
  const router = useRouter();
  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [hidePassword, setHidePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const eyeClick = (e) => {
    setHidePassword((prevState) => {
      return !prevState;
    });
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

  function handlePassword(e) {
    if (e.target.value) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  async function handleClick(e) {
    if (!document.querySelector("#password").value) {
      setValidPassword(false);
      return;
    }
    if (!document.querySelector("#email").value) {
      setEmailValid(false);
      return;
    }
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      document.querySelector("#email").value &&
      !document.querySelector("#email").value.match(regexEmail)
    ) {
      setEmailValid(false);
      return;
    }
    e.preventDefault();
    setIsLoading(true);
    // console.log(e.target);
    if (validEmail && validPassword) {
      const password = document.querySelector("#password").value;
      const email = document.querySelector("#email").value;

      if (password && email) {
        try {
          const data = await signIn(email, password);
          const newDate = new Date(moment().add(30, "days")).toUTCString();
          const expires = `; expires=${newDate}`;
          const userData = data.user;
          document.cookie = `userNullcast=${JSON.stringify(
            userData
          )}${expires}`;
          localStorage.setItem("userNullcast", JSON.stringify(userData));
          notify(`${data.message}`);
          // console.log(document.cookie);

          // let progress = JSON.parse(
          //   window.localStorage.getItem("progress")
          // ) || [{ courseName: "", completedChapter: [] }];
          // axios({
          //   method: "post",
          //   url: `${baseUrl}${enrolUrl}/progress`,
          //   headers: {
          //     "x-access-token": `${data.accessToken}`
          //   },
          //   data: progress
          // }).then((response) => {
          //   // console.log(response);
          // });
          // axios({
          //   method: "post",
          //   url: `${baseUrl}/api/progress/all`,
          //   headers: {
          //     "x-access-token": `${data.accessToken}`
          //   }
          // })
          //   .then((response) => {
          //     window.localStorage.setItem(
          //       "progress",
          //       JSON.stringify(response.data)
          //     );
          //   })
          //   .catch((err) => {
          //     console.log(err.message);
          //   });
          // if (referer) {
          //   router.back();
          // } else {
          //   router.push("/");
          // }
          if (referer) {
            router.back();
          } else {
            router.push("/");
          }
        } catch (err) {
          setIsLoading(false);
          notify(err?.response?.data?.message ?? err?.message, "error");
        }
      }
    } else {
      if (!email) {
        setEmailValid(false);
      }
      if (!password) {
        setValidPassword(false);
      }
    }
  }
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
        className={`p-20 h-screen  flex flex-col-reverse md:flex-row items-center justify-center w-full  ${Loginstyles.bg_yellow_710} loginSection`}
      >
        <SideLogin />
        <Fade duration={2000}>
          <div
            className={`${Loginstyles.bg_yellow_710} h-full  lg:mr-30 flex flex-col items-center  justify-center  greenLoginDiv  `}
          >
            <form
              className={`shadow-lg w-80 p-4 z-10 lg:ml-30 lg:mr-10  flex flex-col bg-black rounded-lg {Loginstyles.bg_yellow_710}`}
            >
              <h1 className="lg:hidden xl:block mb-1 text-white font-bold text-2xl leading-10">
                Login
              </h1>
              <p
                className={`lg:hidden xl:block text-white mt-0 font-bold text-xs  mb-3`}
              >
                Welcome Back!
              </p>
              <div className="mb-1 flex flex-col">
                <label className={`text-white mt-2 mb-1 font-semibold text-sm`}>
                  Email
                </label>
                <input
                  placeholder="Enter email"
                  maxLength="30"
                  className={`inputStyle placeholder-gray-600 pr-3 ${Loginstyles.inputGreen} xl:mb-2.5 2xl:mb-5 `}
                  id="email"
                  name="email"
                  type="email"
                  onBlur={(e) => emailValidator(e)}
                  onChange={(e) => {
                    emailValidator(e);

                    // setEmailValid(true);
                    // if (!validEmail) {
                    //   emailValidator(e);
                    // }
                  }}
                />
                {validEmail ? (
                  ""
                ) : (
                  <span className="flex items-center font-bold tracking-wide text-red-danger text-xs pt-1 ml-0">
                    Invalid email field !
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col">
                <label className={`text-white mt-2 mb-1 font-semibold text-sm`}>
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    placeholder="Enter password"
                    maxLength="50"
                    className={`inputStyle placeholder-gray-600 w-full pr-10 ${Loginstyles.inputGreen} xl:mb-3 2xl:mb-5`}
                    id="password"
                    name="password"
                    onBlur={(e) => handlePassword(e)}
                    onChange={(e) => {
                      if (!validPassword) {
                        handlePassword(e);
                      }
                    }}
                    type={`${hidePassword ? "text" : "password"}`}
                  />
                  <div className="flex justify-center items-center items h-full absolute right-0 top-0 w-10">
                    <img
                      alt="eye"
                      src="/images/eye.svg"
                      className="w-1/2 cursor-pointer xl:mb-3 opacity-50 hover:opacity-100 duration-700"
                      onClick={(e) => eyeClick(e)}
                    ></img>
                  </div>
                </div>
                {validPassword ? (
                  ""
                ) : (
                  <span className="flex items-center font-bold tracking-wide text-red-danger text-xs pt-1 ml-0">
                    Please enter password
                  </span>
                )}
              </div>

              <button className="w-full bg-blue-500 text-white p-1.5 2xl:p-3 rounded-lg font-semibold text-lg">
                Login
              </button>
              <Link href="/forgot-password">
                <a className="text-blue-400 text-center my-2">
                  Forgot Pasword?
                </a>
              </Link>
              <hr />

              {/* <div
              className={`absolute top-0 right-0 flex items-center justify-end p-6 w-full ${Loginstyles.bg_green_710}`}
            >
              {isLoading ? (
                <div className="md:mr-4 bg-pink-710 font-semibold border border-pink-710 rounded-sm duration-700 text-white focus:outline-none flex justify-center items-center w-20 h-10 opacity-50 cursor-not-allowed">
                  Sign Up
                </div>
              ) : (
                <Link
                  href={{
                    pathname: `/signup`
                  }}
                >
                  <div className="md:mr-4 bg-pink-710 font-semibold hover:bg-transparent hover-text-pink-710 border border-pink-710 rounded-sm duration-700 text-white focus:outline-none cursor-pointer flex justify-center items-center w-20 h-10">
                    Sign Up
                  </div>
                </Link>
              )}

           </div> */}

              <p className={`w-full text-center text-white pt-2 `}>
                Don’t have an Account ?
              </p>
              <Link
                href={{
                  pathname: `/signup`
                }}
              >
                <button className="w-full bg-green-400 mt-5 2xl:mt-8 xl:mb-2.5 text-white p-1.5 2xl:p-3 rounded-lg font-semibold text-lg">
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}
