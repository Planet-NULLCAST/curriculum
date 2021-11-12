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
    return data.data;
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
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function postSaveTag(userCookie, Tags, postId) {
  try {
    let arr= [];
    for (const tag of Tags) {
      const { data } = await axios.post(
        `${baseUrl}/${postTagUrl}`,
        {tag_id: tag, post_id: postId },
              {
          headers: {
            "x-access-token": `${userCookie.accessToken}`
          }
        }
      );
      arr.push(data);
    }  
    // console.log(data);
    return arr;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const TagService = {
  getTags,
  postSaveTag,
  postTags
};

module.exports = TagService;
