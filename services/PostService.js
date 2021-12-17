const axios = require("axios");
import {
  baseUrl,
  allPostsUrl,
  postUrl,
  postsUrl,
  getVoteUrl,
  s3Url,
  postCount,
  setVoteUrl,
  postUser,
  getVoteTypeUrl,
  postBySlug,
  changeStatusUrl,
  adminReviewUrl,
  tagUrl,
  adminUrl,
  searchUrl
  // publishedPostsCountUrl
} from "../config/config";
import { getUrl } from "../lib/getUrl";

async function getPostsByUsers(reqData) {
  try {
    const response = await axios.get(`${baseUrl}/${postsUrl}`, {
      params: reqData
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

async function getPostById(postId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${postUrl}/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPostBySlug(slug) {
  try {
    const { data } = await axios.get(`${baseUrl}/${postBySlug}/${slug}`);
    return data;
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
  try {
    const { data } = await axios.get(`${baseUrl}/${postsUrl}`, {
      params: reqParams
    });
    return data;
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
    const { data } = await axios.put(
      `${baseUrl}/${postUrl}/${postId}`,
      postDetails
    );
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function adminReview(postId, postDetails) {
  try {
    const { data } = await axios.put(
      `${baseUrl}/${adminReviewUrl}/${postId}`,
      postDetails
    );
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

async function getPostByTags(tagName, status) {
  try {
    const { data } = await axios.get(`${baseUrl}/${postsUrl}/${tagName}`, {
      params: { status: status }
    });
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

const isAdmin = async (cookie) => {
  try {
    const data = await axios.get(`${baseUrl}/${adminUrl}/me`);
    console.log(data, "data");
    return data;
  } catch (err) {
    console.log(err, "admin check err");
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
 * Api call for fetching all posts of a user
 * @param {String} username
 * @returns {Promise}
 */

async function getUserPostsByUser(UserId, reqParams) {
  try {
    const res = await axios.get(`${baseUrl}/${postUser}/${UserId}`, {
      params: reqParams
    });
    return res.data;
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
 * @author JasirTp
 * @param {String} postId
 * @returns {Promise}
 */
async function getVotes(postId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${getVoteUrl}/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getVotesType(postId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${getVoteTypeUrl}/${postId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function setVotes(value, postId) {
  try {
    const { data } = await axios.post(`${baseUrl}/${setVoteUrl}/${postId}`, {
      value: value
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Service to call PostCount Api
 * @author JasirTp
 * @param {String} userId
 * @returns {Promise}
 */
async function getPostCount(userId, postDetails) {
  try {
    const { data } = await axios.get(`${baseUrl}/${postCount}/${userId}`, {
      params: postDetails
    });
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
  getVotesType,
  getPostsByUsers,
  getPostBySlug,
  adminReview,
  createPost,
  getPostCount,
  updatePostById,
  deletePostById,
  getLatestPosts,
  getPostByTags,
  getPostsByQuery,
  adminChangePostStatus,
  adminGetLatestPosts,
  isAdmin,
  getUserPostsByUser,
  // getPublishedPostsCountByUserId,
  setVotes,
  getVotes,
  getPostsByMultipleTags
};

module.exports = PostService;
