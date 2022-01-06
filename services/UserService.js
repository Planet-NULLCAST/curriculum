const axios = require("axios");
import { baseUrl, usersUrl, userUrl, getUsersUrl, getFollowersUrl, addorRemoveFollowers, isFollwing } from "../config/config";
// import { getUrl } from "../lib/getUrl";

async function getLatestUsers(reqParams) {
  try {
    const { data } = await axios.get(`${baseUrl}/${usersUrl}`, reqParams);
    return data;
  } catch (err) {
    throw err;
  }
}

//get all users
async function getAllUsers() {
  try {
    const { data } = await axios.get(`${baseUrl}/${getUsersUrl}`);
    return data;
  } catch (err) {
    throw err;
  }
}

//Api call for fetching userdetails
async function getUserByUsername(username) {
  try {
    const { data } = await axios.get(`${baseUrl}/${userUrl}/${username}`);
    return data;
  } catch (err) {
    throw err;
  }
}

//update user profile details by user Id
async function updateProfileByUserId(userCookie, reqData) {
  console.log({ reqData });
  try {
    const { data } = await axios.put(
      `${baseUrl}/${userUrl}/${userCookie.id}`,
      reqData
    );

    console.log(data, "update");

    return data;
  } catch (err) {
    throw err;
  }
}

async function getUserFollowers(userId){
    try {
      const {data} = await axios.get(`${baseUrl}/${getFollowersUrl}/${userId}`)
      return data.data
    } catch (error) {
      throw error
    }
}

async function followUser(follwedId){
   try {
     const {data} = await axios.post(`${baseUrl}/${addorRemoveFollowers}` , {
       following_id : follwedId
     })
     console.log(data)
     return data.data
   } catch (error) {
     throw error
   }
}

async function isFollwed(id){
  try {
    const {data} = await axios.get(`${baseUrl}/${isFollwing}/${id}`)
    return data?.data
  } catch (error) {
    console.log(error?.response?.data)
    if(error?.response?.data?.message === "You are neither following nor followed by this user"){
        return error?.response?.data
    }
    else{
    throw error
    }
  }
}

async function removeFollower(id){
  try {
    const {data} = await axios.delete(`${baseUrl}/${addorRemoveFollowers}/${id}`)
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

const UserService = {
  getLatestUsers,
  getUserByUsername,
  getAllUsers,
  updateProfileByUserId,
  getUserFollowers,
  followUser,
  removeFollower,
  isFollwed
};

module.exports = UserService;
