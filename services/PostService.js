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
  serverUrl,
  searchUrl
} from "../config/config";

async function getPostsByUserId(userCookie, reqData) {
  try {
    const { data } = await axios.post(`${baseUrl}/${allPostsUrl}`, reqData, {
      headers: {
        "x-access-token": `${userCookie.accessToken}`
      }
    });
    return data;
  } catch (err) {
    return;
  }
}

async function getPostById(userCookie, postId) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
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
    return;
  }
}

async function getPostBySlug(slug) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  try {
    const response = await axios.get(`${url}/${postUrl}/blog/${slug}`);
    return response;
  } catch (err) {
    console.log(err);
    return;
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
    return;
  }
}

async function getLatestPosts(reqParams) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;

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
    return;
  }
}
async function adminGetLatestPosts(reqParams) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
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
    return;
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
    return;
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
    return;
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
    return;
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
    return;
  }
}

async function getPostByTags(tagName, clickNo) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;

  const item = {
    clickNo: clickNo
  };
  try {
    const { data } = await axios.post(`${url}/${tagUrl}/${tagName}`, item);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return;
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
    return;
  }
}

const isAdmin = async (id, token) => {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;

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
    return;
  }
};

async function getPostsByQuery(query, clickNo) {
  // set URL from where this function is executing
  // like server and client
  // if in server serverURL is applied else clientURL
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;

  try {
    const { data } = await axios.get(`${url}/${searchUrl}`, {
      params: { q: query, clickNo: clickNo }
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
}

async function getPostCountByUserName(username) {
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  try {
    const { data } = await axios.get(`${url}/${allPostsUrl}/count`, {
      params: { username: username }
    });
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
}

async function getAllPostsByUsername(username) {
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  try {
    const { data } = await axios.get(`${url}/${allPostsUrl}/all`, {
      params: { username: username }
    });
    return data;
  } catch (err) {
    console.log(err);
    return;
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
