const axios = require("axios");
import {
  baseUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  changePasswordUrl,
  loginUrl,
  signUpUrl,
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
    console.log(err);
    return;
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
    throw err.response.data;
  }
}

const AuthService = {
  sendEmail,
  resetPassword,
  changePassword,
  signIn,
  signUp,
};

module.exports = AuthService;
