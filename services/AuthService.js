const axios = require("axios");
import { baseUrl, forgotPasswordUrl, resetPasswordUrl } from "../config/config";

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

const AuthService = {
  sendEmail,
  resetPassword
};

module.exports = AuthService;
