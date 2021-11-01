const axios = require("axios");
import router from "next/router";
import {
  baseUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  changePasswordUrl,
  loginUrl,
  signUpUrl,
  logoutUrl,
} from "../config/config";

async function sendEmail(email) {
  const item = {
    email: email
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
    const { data } = await axios.post(`${baseUrl}/${loginUrl}`,loginDetails);
    return data;
  } catch (err) {
    throw err;
  }
}

async function signUp(email, password,fName,username) {
  const signupData = {
    full_name: fName,
    email: email,
    user_name: username,
    password: password,
    // updates: updates
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${signUpUrl}`,signupData);
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
  // console.log({ passwords });
  // console.log(userId);
  const item = {
    currentPassword: passwords.currentPassword,
    newPassword: passwords.confirmPass,
    userId: userCookie.id
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${changePasswordUrl}`, item, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err.response.data);
    throw err;
  }
}

async function logout() {
  // console.log("logout");
  try {
    await axios.post(`${logoutUrl}`, {});
  } catch { }
  window.localStorage.removeItem("progress");
  sessionStorage.removeItem("userNullcast");
  document.cookie = "userNullcast=''; Max-Age=0;";
  // console.log(router);
  if (router.pathname === "/posts" || router.pathname === "/posts/write") {
    window.location = '/';
  } else {
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
};

module.exports = AuthService;
