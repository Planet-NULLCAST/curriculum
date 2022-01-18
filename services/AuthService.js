const axios = require("axios");
import router from "next/router";
import {
  baseUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  changePasswordUrl,
  loginUrl,
  userUrl,
  verificationMail,
  logoutUrl,
  emailTokenUrl,
} from "../config/config";

async function sendEmail(email) {
  const item = {
    to: email
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${forgotPasswordUrl}`, item);
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
    throw err;
  }
}

async function signIn(email, password) {
  const loginDetails = {
    email: email,
    password: password
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${loginUrl}`, loginDetails);
    return data;
  } catch (err) {
    throw err;
  }
}

async function signUp(email, password, fName, username) {
  const signupData = {
    full_name: fName,
    email: email,
    user_name: username,
    password: password
    // updates: updates
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${userUrl}`, signupData);
    return data;
  } catch (err) {
    throw err;
  }
}

async function emailVerification(email) {
  const signupData = {
    to: email
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${verificationMail}`, signupData);
    return data;
  } catch (err) {
    throw err;
  }
}

async function emailToken(token) {
  const tokenData = {
    token: token
  };
  try {
    const { data } = await axios.put(`${baseUrl}/${emailTokenUrl}`, tokenData);
    return data;
  } catch (err) {
    throw err;
  }
}

async function resetPassword(password, token) {
  const item = {
    password: password,
    token: token
  };
  try {
    const response = await axios.post(`${baseUrl}/${resetPasswordUrl}`, item);
    // console.log(response);
    return response;
  } catch (err) {
    throw err;
  }
}

async function changePassword(passwords, userCookie) {
  const item = {
    current_password: passwords.currentPassword,
    new_password: passwords.confirmPass,
    user_name: userCookie.user_name
  };
  try {
    const { data } = await axios.put(`${baseUrl}/${changePasswordUrl}`, item, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    throw err;
  }
}

async function logout() {
  try {
    await axios.post(`${logoutUrl}`, {});
  } catch {}
  window.localStorage.removeItem("progress");
  sessionStorage.removeItem("userNullcast");
  document.cookie = "userNullcast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  if (router.pathname === "/posts" || router.pathname === "/posts/write") {
    router.push("/");
  } else if (router.pathname !== "/login") {
    router.reload();
  }
}

const AuthService = {
  sendEmail,
  resetPassword,
  changePassword,
  signIn,
  signUp,
  logout,
  emailVerification,
  emailToken,
};

module.exports = AuthService;
