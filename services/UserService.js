const axios = require("axios");
import { userUrl } from "../config/config";
import {getUrl} from "../lib/getUrl"

async function getLatestUsers(reqParams) {

  let url = getUrl();
  
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
        throw err;
    }
}

//Api call for fetching userdetails
async function getUserByUsername(username) {
  let url = getUrl();

    try {
      const {data} = await axios.get(`${url}/${userUrl}/getUserByUsername/${username}`);
      return data;
    } catch (err) {
      throw err;
    }
}

const UserService = {
    getLatestUsers,
    getUserByUsername
};

module.exports = UserService;
