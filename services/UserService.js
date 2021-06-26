const axios = require("axios");
import { baseUrl, userUrl,serverUrl } from "../config/config";

async function getLatestUsers(reqParams) {

    // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  
    try {
        const { fields, order, fieldName, limit, skip } = reqParams;
        const response = await axios.get(`${url}/${userUrl}/getUsers`, {
            params: {
                order,
                fieldName,
                limit,
                skip,
                fields
            }
        });
        return response;
    } catch (err) {
        console.log(err);
        return;
    }
}

async function getUserById(userCookie) {
    try {
      const {data} = await axios.get(`${baseUrl}/${userUrl}/getUserById/${userCookie.id}`, {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      });
      return data;
    } catch (err) {
      return;
    }
}

const UserService = {
    getLatestUsers,
    getUserById
};

module.exports = UserService;
