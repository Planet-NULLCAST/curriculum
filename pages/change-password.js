import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import styles from "../styles/Settings.module.scss";
import AuthService from "../services/AuthService";
import validatePassword from "../lib/validatePassword";
import { getCookieValue } from "../lib/cookie";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        return {
          props: {}
        };
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      };
    }
  } catch (err) {
    console.log("Error => ", err);
    return {
      props: {}
    };
  }
}

export default function changePassword() {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [validCurrentPassword, setValidCurrentPassword] = useState("");
  const [validNewPassword, setValidNewPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    passwordCheck(name, value);
  };

  const passwordCheck = (name, value) => {
    if (name === "newPassword") {
      const validType = validatePassword(value);
      if (validType) {
        setValidNewPassword(validType);
      }
    }

    if (name === "confirmPassword") {
      const validType = validatePassword(value);
      if (validType) {
        setValidConfirmPassword(validType);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (validNewPassword !== "" && name === "newPassword") {
      passwordCheck(name, value);
    }

    if (validConfirmPassword !== "" && name === "confirmPassword") {
      passwordCheck(name, value);
    }

    if (validCurrentPassword !== "" && name === "currentPassword") {
      if (value === "") {
        setValidCurrentPassword("empty");
      } else {
        setValidCurrentPassword("notempty");
      }
    }

    setPassword((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const resetPassword = async (passwords) => {
    try {
      const { message } = await AuthService.changePassword(
        passwords,
        userCookie
      );
      notify(message, true);
    } catch (err) {
      notify(err.message, false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPass = e.target.currentPassword.value;
    const newPass = e.target.newPassword.value;
    const confirmPass = e.target.confirmPassword.value;
    passwordCheck(e.target.newPassword.name, newPass);
    passwordCheck(e.target.confirmPassword.name, confirmPass);
    if (currentPass === "") {
      setValidCurrentPassword("empty");
    }
    if (
      newPass === confirmPass &&
      validNewPassword === "valid" &&
      validConfirmPassword === "valid" &&
      currentPass
    ) {
      const passwords = {
        currentPassword: currentPass,
        confirmPass
      };
      resetPassword(passwords);
    }
  };

  const handleHidePassword = (e) => {
    const { name } = e.target;
    if (name === "currentPassword") {
      console.log(hidePassword.currentPassword);
      setHidePassword((prevValue) => {
        return {
          ...prevValue,
          currentPassword: !hidePassword.currentPassword
        };
      });
    }

    if (name === "newPassword") {
      setHidePassword((prevValue) => {
        return {
          ...prevValue,
          newPassword: !hidePassword.newPassword
        };
      });
    }

    if (name === "confirmPassword") {
      setHidePassword((prevValue) => {
        return {
          ...prevValue,
          confirmPassword: !hidePassword.confirmPassword
        };
      });
    }
  };

  const notify = (msg, type) => {
    if (type) {
      toast.success(msg, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      toast.error(msg, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <>
      <SiteHeader />
      <Head>
        <title>Change Password</title>
      </Head>
      <section>
        <div className={`${styles.settingsBg} bg-gray-100 py-2 pb-6 px-6`}>
          <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm max-w-panel">
            <ul className="flex flex-row justify-start items-center font-semibold h-full">
              <li className="mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center border-gray-600">
                <span className="mt-1 text-gray-600">Settings</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap relative lg:justify-center max-w-panel">
            <div className={`${styles.aside} bg-white md:mr-4`}>
              <ul>
                <Link href="/settings">
                  <a>
                    <li>
                      <span>Edit Profile</span>
                    </li>
                  </a>
                </Link>
                <Link href="/change-password">
                  <a>
                    <li>
                      <span>Change Password</span>
                    </li>
                  </a>
                </Link>
                {/* <li>
                  <span>Notifications</span>
                </li>
                <li>
                  <span>Sessions</span>
                </li> */}
              </ul>
            </div>
            <div className={`${styles.formWrap} bg-white p-4 py-7 md:px-10`}>
              <form onSubmit={handleSubmit} className="flex flex-wrap">
                <div className="w-full mb-4">
                  <label htmlFor="currentPassword">Current Password</label>
                  <div className="flex">
                    <input
                      id="currentPassword"
                      type={`${
                        hidePassword.currentPassword ? "text" : "password"
                      }`}
                      placeholder="Enter Current Password"
                      onChange={handleInputChange}
                      value={password.currentPassword}
                      name="currentPassword"
                    />
                    <img
                      src="/images/eye.svg"
                      className="relative top-4 -left-10 w-6 h-6 cursor-pointer opacity-50 hover:opacity-100 duration-700"
                      onClick={handleHidePassword}
                      name="currentPassword"
                      alt="eye-icon"
                    ></img>
                  </div>
                  {validCurrentPassword === "empty" && (
                    <p className="text-sm text-red-400 text-left">
                      Please enter the current password
                    </p>
                  )}
                </div>

                <div className="w-full mb-4">
                  <label htmlFor="newPassword">New Password</label>
                  <div className="flex">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type={`${hidePassword.newPassword ? "text" : "password"}`}
                      onChange={handleInputChange}
                      onBlur={handleOnBlur}
                      value={password.newPassword}
                      placeholder="Enter New Password"
                    />
                    <img
                      src="/images/eye.svg"
                      className="relative top-4 -left-10 w-6 h-6 cursor-pointer opacity-50 hover:opacity-100 duration-700"
                      onClick={handleHidePassword}
                      name="newPassword"
                      alt="eye-icon"
                    ></img>
                  </div>

                  {validNewPassword === "empty" && (
                    <p className="text-sm text-red-400 text-left">
                      Please enter the new password
                    </p>
                  )}
                  {(validNewPassword === "length" ||
                    validNewPassword === "characters") && (
                    <p className="text-sm text-red-400 text-left">
                      Your password must contain minimum of 8 characters and at
                      least one uppercase letter, one lowercase letter, one
                      number and one special character
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="flex">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={`${
                        hidePassword.confirmPassword ? "text" : "password"
                      }`}
                      onBlur={handleOnBlur}
                      onChange={handleInputChange}
                      value={password.confirmPassword}
                      placeholder="Confirm Password"
                    />
                    <img
                      src="/images/eye.svg"
                      className="relative top-4 -left-10 w-6 h-6 cursor-pointer opacity-50 hover:opacity-100 duration-700"
                      onClick={handleHidePassword}
                      name="confirmPassword"
                      alt="eye-icon"
                    ></img>
                  </div>

                  {validConfirmPassword === "empty" && (
                    <p className="text-sm text-red-400 text-left">
                      Please enter the password
                    </p>
                  )}
                  {(validConfirmPassword === "length" ||
                    validConfirmPassword === "characters") && (
                    <p className="text-sm text-red-400 text-left">
                      Your password must contain minimum of 8 characters and at
                      least one uppercase letter, one lowercase letter, one
                      number and one special character
                    </p>
                  )}
                  {password.newPassword &&
                    validNewPassword === "valid" &&
                    password.confirmPassword &&
                    validConfirmPassword === "valid" &&
                    password.newPassword !== password.confirmPassword && (
                      <p className="text-sm text-red-400 text-left py-2">
                        Passwords are not equal
                      </p>
                    )}
                </div>
                <div className="text-right w-full">
                  <button>Update Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
