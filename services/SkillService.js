const axios = require("axios");
import { baseUrl, skillUrl } from "../config/config";
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

const postSkills = async (userCookie, newSkill) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/${skillUrl}`,
      { skills: newSkill },
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
};

const SkillService = {
  getSkills,
  postSkills
};

module.exports = SkillService;
