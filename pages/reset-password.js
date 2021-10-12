import React, { useState, useEffect } from "react";
import Head from "next/head";
import AuthService from "../services/AuthService";
import validatePassword from "../lib/validatePassword";
import { useRouter } from "next/router";
import notify from "../lib/notify";

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
      // console.log("newPassword validType -", validType);
      if (validType) {
        setValidNewPassword(validType);
      }
    }

    if (name === "confirmPassword") {
      const validType = validatePassword(value);
      // console.log("confirmPassword validType -", validType);
      if (validType) {
        setValidConfirmPassword(validType);
      }
    }
  };

  const handleInputChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);
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

  useEffect(() => {
    // console.log(query);
  }, []);

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
    // console.log(e.target.newPassword.value);
    // console.log(e.target.confirmPassword.value);
    const newPass = e.target.newPassword.value;
    const confirmPass = e.target.confirmPassword.value;
    // console.log({ password });
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
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="h-1/2 w-2/3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <label
            htmlFor="newPassword"
            className="font-semibold text-xl w-2/3 m-4 text-purple-600"
          >
            Enter new password
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="text"
            className="border border-purple-600 py-3 h-11 w-2/3"
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            value={password.newPassword}
          />
          {validNewPassword === "empty" && (
            <p className="text-sm text-red-400 text-left w-2/3">
              Please enter a password
            </p>
          )}
          {(validNewPassword === "length" ||
            validNewPassword === "characters") && (
            <p className="text-sm text-red-400 text-left w-2/3">
              Your password must contain minimum of 8 characters and at least
              one uppercase letter, one lowercase letter, one number and one
              special character
            </p>
          )}

          <label
            htmlFor="confirmPassword"
            className="font-semibold text-xl w-2/3 m-4 text-purple-600"
          >
            Confirm new password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            className="border border-purple-600 py-3 h-11 w-2/3"
            onBlur={handleOnBlur}
            onChange={handleInputChange}
            value={password.confirmPassword}
          />
          {validConfirmPassword === "empty" && (
            <p className="text-sm text-red-400 text-left w-2/3">
              Please enter a password
            </p>
          )}
          {(validConfirmPassword === "length" ||
            validConfirmPassword === "characters") && (
            <p className="text-sm text-red-400 text-left w-2/3">
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
              <p className="text-sm text-red-400 text-left w-2/3 py-2">
                Passwords are not equal
              </p>
            )}
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold text-xl w-2/3 h-11 m-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
