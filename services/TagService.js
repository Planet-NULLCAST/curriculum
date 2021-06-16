const axios = require("axios");
import { baseUrl, tagUrl } from "../config/config";

async function getTags() {
  try {
    const { data } = await axios.get(`${baseUrl}/${tagUrl}`);
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
