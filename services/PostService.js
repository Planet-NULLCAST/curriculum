const axios = require("axios");
import {
  baseUrl,
  allPostsUrl,
  postUrl,
  s3Url,
  userUrl,
  changeStatusUrl,
  adminUrl
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
  try {
    // console.log(postId);
    const { data } = await axios.get(`${baseUrl}/${postUrl}/${postId}`, {
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
  try {
    const response = await axios.get(`${baseUrl}/${postUrl}/blog/${slug}`);
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
  try {
    const { order, fieldName, limit, skip } = reqParams;
    const response = await axios.get(`${baseUrl}/${userUrl}/getPosts`, {
      params: {
        order,
        fieldName,
        limit,
        skip
      }
    });
    return response;
  } catch (err) {
    console.log(err);
    return;
  }
}
async function adminGetLatestPosts(reqParams) {
  try {
    const { order, fieldName, limit, skip, optionsCategory, optionsStatus } =
      reqParams;
    const response = await axios.get(`${baseUrl}/${adminUrl}/getPosts`, {
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

const isAdmin = async(id,token)=>{
  try {
    const { data } = await axios.get(
      `${baseUrl}/${adminUrl}/me`,
      {
        headers: {
          "x-access-token": `${token}`
        }
      }
    );
    console.log(data);
    // console.log(data.message);
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
  adminChangePostStatus,
  adminGetLatestPosts,
  isAdmin
};

module.exports = PostService;
