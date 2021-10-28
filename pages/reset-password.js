import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AuthService from "../services/AuthService";
import validatePassword from "../lib/validatePassword";
import notify from "../lib/notify";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export async function getServerSideProps(context) {
  return {
    props: {
      query: context.query
    }
  };
}

export default function resetPassword({ query }) {
  const router = useRouter();
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

  const resetPassword = async (newPass) => {
    try {
      const response = await AuthService.resetPassword(newPass, query.token);
      console.log(response.status);
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
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
      resetPassword(confirmPass);
    }
  };

  const proceed = password.newPassword &&
  validNewPassword === "valid" &&
  password.confirmPassword &&
  validConfirmPassword === "valid" &&
  password.newPassword === password.confirmPassword ? true : false

  return (
    <div>
      <Head>
        <title>Reset Password | Nullcast</title>
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
            className={`${Loginstyles.bg_yellow_710} h-full flex flex-col items-center lg:items-end justify-center overflow-x-hidden greenLoginDiv`}
          >
            <div
              className={`rounded-xl w-full py-5 sm:py-10 px-5 sm:px-10 md:px-5 lg:px-20 max-w-xl flex items-start justify-center flex-col greenLogin relative overflow-y-auto ${Loginstyles.formCard}`}
            >
              <Fade duration={2000}>
                <h1 className="text-white font-bold text-2xl leading-10">
                  Reset Password
                </h1>
                <div className="container py-2 px-0-imp">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col">
                      <label
                        htmlFor="newPassword"
                        className={`text-white mt-2 mb-1 font-semibold text-sm`}
                      >
                        Enter new password
                      </label>
                      <div className="relative w-full">
                        <input
                          placeholder="Enter new password"
                          maxLength="50"
                          className={`inputStyle placeholder-gray-600 w-full pr-10 ${Loginstyles.inputGreen}`}
                          id="newPassword"
                          name="newPassword"
                          type="text"
                          onChange={handleInputChange}
                          onBlur={handleOnBlur}
                          value={password.newPassword}
                        />
                      </div>
                      {validNewPassword === "empty" && (
                        <p className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                          Please enter a password
                        </p>
                      )}
                      {(validNewPassword === "length" ||
                        validNewPassword === "characters") && (
                          <p className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                            Your password must contain minimum of 8 characters and at least
                            one uppercase letter, one lowercase letter, one number and one
                            special character
                          </p>
                        )}
                    </div>
                    <div className="mb-4 flex flex-col">
                      <label
                        htmlFor="confirmPassword"
                        className={`text-white mt-2 mb-1 font-semibold text-sm`}
                      >
                        Confirm new password
                      </label>
                      <div className="relative w-full">
                        <input
                          placeholder="Confirm new password"
                          maxLength="50"
                          className={`inputStyle placeholder-gray-600 w-full pr-10 ${Loginstyles.inputGreen}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="text"
                          onBlur={handleOnBlur}
                          onChange={handleInputChange}
                          value={password.confirmPassword}
                        />
                      </div>
                      {validConfirmPassword === "empty" && (
                        <p className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                          Please enter a password
                        </p>
                      )}
                      {(validConfirmPassword === "length" ||
                        validConfirmPassword === "characters") && (
                          <p className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
                            Your password must contain minimum of 8 characters and at least
                            one uppercase letter, one lowercase letter, one number and one
                            special character
                          </p>
                        )}
                      {password.newPassword &&
                        validNewPassword === "valid" &&
                        password.confirmPassword &&
                        validConfirmPassword === "valid" &&
                        password.newPassword !== password.confirmPassword && (
                          <p className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0 py-2">
                            Passwords are not equal
                          </p>
                        )}
                    </div>

                    <button
                      type="submit"
                      disabled={proceed ? false : true}
                      className={`submitButtons w-full flex items-center justify-center hover:bg-transparent ${
                        !proceed
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-transparent hover-text-pink-710"
                      }`}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
