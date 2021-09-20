const axios = require("axios");
import { baseUrl, tagUrl } from "../config/config";
import { getUrl } from "../lib/getUrl";

async function getTags(filterWhatsNew) {
  let url = getUrl();

  try {
    const { data } = await axios.get(
      `${url}/${tagUrl}`
      // {
      //   params: { filterWhatsNew }
      // }
    );
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
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
    throw err;
  }
}

const TagService = {
  getTags,
  postTags
};

module.exports = TagService;
