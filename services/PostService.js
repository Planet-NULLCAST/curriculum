const axios = require("axios");
import {
  baseUrl,
  allPostsUrl,
  postUrl,
  postsUrl,
  s3Url,
  postUser,
  postBySlug,
  changeStatusUrl,
  tagUrl,
  adminUrl,
  searchUrl,
  // publishedPostsCountUrl
} from "../config/config";
import { getUrl } from "../lib/getUrl";

async function getPostsByUserId(reqData) {
  try {
    const { data } = await axios.get(`${baseUrl}/${postsUrl}`, {
      params: reqData
    });
    console.log(data ,);
    return data;
  } catch (err) {
    throw err;
  }
}

async function getPostById(postId) {
  try {
    // console.log(postId);
    const { data } = await axios.get(`${baseUrl}/${postUrl}/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPostBySlug(slug) {
  try {
    const response = await axios.get(`${baseUrl}/${postBySlug}/${slug}`);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createPost(post) {
  try {
    const response = await axios.post(postUrl, post);
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getLatestPosts(reqParams) {
  let url = getUrl();
  try {
    const res = await axios.get(`${baseUrl}/${postsUrl}`, {
      params: reqParams
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    throw err;
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
    throw err;
  }
}

async function updatePostById(postId, postDetails) {
  
  try {
    const { data } = await axios.put(`${baseUrl}/${postUrl}/${postId}`, postDetails);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
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
    throw err;
  }
}

async function uploadImage(imageFile, imageData) {
  // get url from s3url and send imagefile to that url
  // console.log(imageData);
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
    throw err;
  }
}

// async function changePostStatus(userCookie, postId, statusUpdate) {
//   try {
//     const { data } = await axios.post(
//       `${baseUrl}/${changeStatusUrl}/${postId}`,
//       statusUpdate,
//       {
//         headers: {
//           "x-access-token": `${userCookie.accessToken}`
//         }
//       }
//     );
//     // console.log(data.message);
//     return data.message;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }

async function getPostByTags(tagName, clickNo) {

  const item = {
    clickNo: clickNo
  };
  try {
    const { data } = await axios.post(`${baseUrl}/${postUrl}/${tagName}`, item);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
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
    throw err;
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
    throw err;
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
    throw err;
  }
}

/**
 * Api call for fetching all publlished posts of a user
 * @param {String} username
 * @returns {Promise}
 */
async function getPublishedPostsByUserId(userId, limit, clickNo) {
  const url = getUrl();
  try {
    const { data } = await axios.get(`${baseUrl}/${postUser}/${userId}`, {
      params: {
        limit: limit,
        clickNo: clickNo
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// async function getPublishedPostsCountByUserId(userId) {
//   // console.log({ userId });
//   const url = getUrl();

//   try {
//     const { data } = await axios.get(
//       `${url}/${publishedPostsCountUrl}/${userId}`
//     );
//     return data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }

/**
 * Service to call updatePostVote Api
 * @author sNkr-10
 * @param {String} type
 * @param {String} postId
 * @param {String} token
 * @returns {Promise}
 */
async function setVotes(type, postId, token) {
  const url = getUrl();

  try {
    const { data } = await axios.put(
      `${url}/${postUrl}/vote/${postId}`,
      { type: type },
      {
        headers: {
          "x-access-token": `${token}`
        }
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Fetch posts having multiple tags
 * @author sNkr-10
 * @param {String} type
 * @param {String} postId
 * @param {String} token
 * @returns {Promise}
 */
async function getPostsByMultipleTags(tags, clickNo) {
  let url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${tagUrl}/tagnames`, {
      params: {
        tags: tags,
        clickNo: clickNo
      }
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
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
  getPostByTags,
  getPostsByQuery,
  adminChangePostStatus,
  adminGetLatestPosts,
  isAdmin,
  getPublishedPostsByUserId,
  // getPublishedPostsCountByUserId,
  setVotes,
  getPostsByMultipleTags
};

module.exports = PostService;
