const axios = require("axios");
import {
  baseUrl,
  allPostsUrl,
  postUrl,
  s3Url,
  userUrl,
  changeStatusUrl,
  tagUrl,
  adminUrl,
  searchUrl
} from "../config/config";
import {getUrl} from "../lib/getUrl"

async function getPostsByUserId(userCookie, reqData) {
  try {
    const { data } = await axios.post(`${baseUrl}/${allPostsUrl}`, reqData, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    return err.message;
  }
}

async function getPostById(userCookie, postId) {
  let url = getUrl();

  try {
    // console.log(postId);
    const { data } = await axios.get(`${url}/${postUrl}/${postId}`, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function getPostBySlug(slug) {
  let url = getUrl();

  try {
    const response = await axios.get(`${url}/${postUrl}/blog/${slug}`);
    return response;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function createPost(userCookie, post) {
  try {
    const response = await axios.post(`${baseUrl}/${postUrl}`, post, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return response;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function getLatestPosts(reqParams) {
  let url = getUrl();

  try {
    const { order, fieldName, limit, skip } = reqParams;
    const response = await axios.get(`${url}/${userUrl}/getPosts`, {
      params: {
        order,
        fieldName,
        limit,
        skip
      }
    });
    // console.log(response.data);
    return response;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}
async function adminGetLatestPosts(reqParams) {
  let url = getUrl();

  try {
    const { order, fieldName, limit, skip, optionsCategory, optionsStatus } =
      reqParams;
    const response = await axios.get(`${url}/${adminUrl}/getPosts`, {
      params: {
        order,
        fieldName,
        limit,
        skip,
        optionsCategory,
        optionsStatus
      }
    });
    return response;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function updatePostById(userCookie, post, postId) {
  try {
    const { data } = await axios.put(`${baseUrl}/${postUrl}/${postId}`, post, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function deletePostById(userCookie, postId) {
  try {
    const { data } = await axios.delete(`${baseUrl}/${postUrl}/${postId}`, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function uploadImage(imageFile, imageData) {
  // get url from s3url and send imagefile to that url
  console.log(imageData);
  // console.log(s3Url);
  try {
    const response = await axios.post(
      `${s3Url}/dev/s3-presigned-url`,
      imageData
    );
    // console.log(response.data);
    //put with imageFile
    const uploadUrl = response.data;
    const uploadResponse = await axios.put(uploadUrl, imageFile);
    // console.log({ uploadResponse });
    const imageUrl = uploadResponse.config.url.split("?")[0];
    // console.log({ imageUrl });
    return imageUrl;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function changePostStatus(userCookie, postId, statusUpdate) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${changeStatusUrl}/${postId}`,
      statusUpdate,
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    // console.log(data.message);
    return data.message;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function getPostByTags(tagName, clickNo) {
  let url = getUrl();

  const item = {
    clickNo: clickNo
  };
  try {
    const { data } = await axios.post(`${url}/${tagUrl}/${tagName}`, item);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function adminChangePostStatus(userCookie, postId, statusUpdate) {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${adminUrl}/post/${postId}`,
      { status: statusUpdate },
      {
        headers: {
          "x-access-token": `${userCookie.accessToken}`
        }
      }
    );
    // console.log(data.message);
    return data.message;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

const isAdmin = async (id, token) => {
  let url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${adminUrl}/me`, {
      headers: {
        "x-access-token": `${token}`
      }
    });
    return data;
  } catch (err) {
    console.log("admin check err");
    // console.log(err);
    return err.message;
  }
};

async function getPostsByQuery(query, clickNo) {
  let url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${searchUrl}`, {
      params: { q: query, clickNo: clickNo }
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

async function getPostCountByUserName(username) {
  let url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${allPostsUrl}/count`, {
      params: { username: username }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

/**
 * Api call for fetching all publlished posts related to a user
 * 
 * @param {String} username 
 * @returns {Promise}
 */
async function getAllPostsByUsername(username) {
  const url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${allPostsUrl}/all`, {
      params: { username: username }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

const PostService = {
  getPostById,
  getPostsByUserId,
  getPostBySlug,
  createPost,
  updatePostById,
  deletePostById,
  uploadImage,
  getLatestPosts,
  changePostStatus,
  getPostByTags,
  getPostsByQuery,
  adminChangePostStatus,
  adminGetLatestPosts,
  isAdmin,
  getPostCountByUserName,
  getAllPostsByUsername
};

module.exports = PostService;
