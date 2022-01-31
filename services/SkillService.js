const axios = require("axios");
import { baseUrl, skillUrl, postSkillsUrl, postSkillUrl } from "../config/config";
import { getUrl } from "../lib/getUrl";

const getSkills = async () => {
  let url = getUrl();

  try {
    const { data } = await axios.get(`${url}/${skillUrl}`);
    return data.skills;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

async function postSaveSkills(userCookie, Tags) {
  try {
    const { data } = await axios.post(`${baseUrl}/${postSkillsUrl}`, Tags, {
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

async function deletePostSkill(userCookie, tagId) {
  try {
    const { data } = await axios.delete(
      `${baseUrl}/${postSkillUrl}/${tagId}`,
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

async function deletePostSkills(userCookie) {
  try {
    const { data } = await axios.delete(
      `${baseUrl}/${postSkillsUrl}`,
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

const SkillService = {
  getSkills,
  postSaveSkills,
  deletePostSkill,
  deletePostSkills
  
};

module.exports = SkillService;
