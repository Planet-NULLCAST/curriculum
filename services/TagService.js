const axios = require("axios");
import { baseUrl, serverUrl, tagUrl } from "../config/config";

async function getTags() {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  try {
    const { data } = await axios.get(`${url}/${tagUrl}`);
    // console.log(data.tags);
    return data.tags;
  } catch (err) {
    console.log(err);
    return;
  }
}

async function postTags(userCookie, newTag) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${tagUrl}`,
      { tags: newTag },
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    // console.log(data);
    return data.msg;
  } catch (err) {
    console.log(err);
    return;
  }
}

const TagService = {
  getTags,
  postTags
};

module.exports = TagService;
