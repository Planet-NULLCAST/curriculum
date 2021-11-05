const axios = require("axios");
import { baseUrl, tagUrl, CreateTagUrl, postTagUrl } from "../config/config";

async function getTags(filterWhatsNew) {

  try {
    const { data } = await axios.get(
      `${baseUrl}/${tagUrl}`
      // {
      //   params: { filterWhatsNew }
      // }
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function postTags(userCookie, newTag) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${CreateTagUrl}`,
      {name: newTag[0], meta_title: newTag[0] },
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
async function postTag(userCookie, Tags) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${postTagUrl}`,
      {tag_id: Tags.id, post_id: postId },
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
  postTag,
  postTags
};

module.exports = TagService;
