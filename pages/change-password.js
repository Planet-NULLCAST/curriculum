import { useState } from "react";
import Link from "next/link";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import styles from "../styles/Settings.module.scss";
import AuthService from "../services/AuthService";
import validatePassword from "../lib/validatePassword";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function changePassword() {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [validNewPassword, setValidNewPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState("");

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

    setPassword((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
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

  const resetPassword = async (passwords) => {
    try {
      const { message, updatedUser } = await AuthService.changePassword(
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
    const newPass = e.target.newPassword.value;
    const confirmPass = e.target.confirmPassword.value;
    passwordCheck(e.target.newPassword.name, newPass);
    passwordCheck(e.target.confirmPassword.name, confirmPass);
    if (
      newPass === confirmPass &&
      validNewPassword === "valid" &&
      validConfirmPassword === "valid"
    ) {
      const passwords = {
        currentPassword: e.target.currentPassword.value,
        confirmPass
      };
      resetPassword(passwords);
    }
  };

  return (
    <>
      <SiteHeader />
      <section>
        <div className={`${styles.settingsBg} bg-gray-100 py-2 pb-6 px-6`}>
          <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm max-w-panel">
            <ul className="flex flex-row justify-start items-center font-semibold h-full">
              <li className="mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center border-gray-600">
                <span className="mt-1 text-gray-600">Settings</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap relative lg:justify-center">
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
                  <input
                    id="currentPassword"
                    type="text"
                    placeholder="Enter Current Password"
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="text"
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    value={password.newPassword}
                    placeholder="Enter New Password"
                  />
                  {validNewPassword === "empty" && (
                    <p className="text-sm text-red-400 text-left">
                      Please enter a password
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
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="text"
                    onBlur={handleOnBlur}
                    onChange={handleInputChange}
                    value={password.confirmPassword}
                    placeholder="Confirm Password"
                  />
                  {validConfirmPassword === "empty" && (
                    <p className="text-sm text-red-400 text-left">
                      Please enter a password
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
                  <button>Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
