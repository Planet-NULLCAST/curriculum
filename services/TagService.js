const axios = require("axios");
import {
  baseUrl,
  tagUrl,
  CreateTagUrl,
  postTagsUrl,
  postTagUrl
} from "../config/config";

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
      { name: newTag[0], meta_title: newTag[0] },
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function postSaveTags(userCookie, Tags) {
  try {
    const { data } = await axios.post(`${baseUrl}/${postTagsUrl}`, Tags, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deletePostTag(userCookie, tagId, postId) {
  try {
    const { data } = await axios.delete(
      `${baseUrl}/${postTagUrl}/${tagId}-${postId}`,
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const TagService = {
  getTags,
  postSaveTags,
  postTags,
  deletePostTag
};

module.exports = TagService;
