const axios = require("axios");
import { baseUrl, usersUrl, userUrl } from "../config/config";
import { getUrl } from "../lib/getUrl";

async function getLatestUsers(reqParams) {
  let url = getUrl();
  try {
    const {
      data: {
        data: { users }
      }
    } = await axios.get(`${url}/${usersUrl}`, {
      params: reqParams
    });
    return users;
  } catch (err) {
    throw err;
  }
}

//Api call for fetching userdetails
async function getUserByUsername(username) {
  let url = getUrl();

  try {
    const { data } = await axios.get(
      `${baseUrl}/${userUrl}/${username}`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

//update user profile details by user Id
async function updateProfileByUserId(userCookie, reqData) {
  // console.log({ reqData });
  try {
    const { data } = await axios.put(
      `${baseUrl}/${usersUrl}/${userCookie.id}`,
      reqData,
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}

//get user profile details by user Id
async function getProfileByUserId(userCookie) {
  let url = getUrl();
  try {
    const { data } = await axios.get(`${url}/${usersUrl}/${userCookie.id}`, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    // console.log({ data });
    return data;
  } catch (err) {
    throw err;
  }
}

const UserService = {
  getLatestUsers,
  getUserByUsername,
  updateProfileByUserId,
  getProfileByUserId
};

module.exports = UserService;
