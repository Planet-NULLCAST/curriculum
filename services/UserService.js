const axios = require("axios");
import { baseUrl, usersUrl, userUrl, getUsersUrl } from "../config/config";
// import { getUrl } from "../lib/getUrl";

async function getLatestUsers(reqParams) {
  try {
    const { data } = await axios.get(`${baseUrl}/${usersUrl}`,reqParams);
    return data;
  } catch (err) {
    throw err;
  }
}
//get all users
async function getAllUsers() {
  try {
    const { data } = await axios.get(`${baseUrl}/${getUsersUrl}`);
    return data;
  } catch (err) {
    throw err;
  }
}

//Api call for fetching userdetails
async function getUserByUsername(username) {

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
  console.log({ reqData });
  try {
    const { data } = await axios.put(
      `${baseUrl}/${userUrl}/${userCookie.id}`,reqData);

      console.log(data, 'update');

    return data;
  } catch (err) {
    throw err;
  }
}

//get user profile details by user Id
// async function getProfileByUserId(userCookie) {
//   let url = getUrl();
//   try {
//     const { data } = await axios.get(`${url}/${usersUrl}/${userCookie.id}`, {
//       headers: {
//         "x-access-token": `${userCookie.accessToken}`
//       }
//     });
//     // console.log({ data });
//     return data;
//   } catch (err) {
//     throw err;
//   }
// }

const UserService = {
  getLatestUsers,
  getUserByUsername,
  getAllUsers,
  updateProfileByUserId,
  // getProfileByUserId
};

module.exports = UserService;
