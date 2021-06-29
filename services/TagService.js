const axios = require("axios");
import { baseUrl, tagUrl } from "../config/config";
import {getUrl} from "../lib/getUrl"

async function getTags() {
  let url = getUrl();
  
  try {
    const { data } = await axios.get(`${url}/${tagUrl}`);
    // console.log(data.tags);
    return data.tags;
  } catch (err) {
    console.log(err);
    return err.message;
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
    return err.message;
  }
}

const TagService = {
  getTags,
  postTags
};

module.exports = TagService;
