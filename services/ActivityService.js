const axios = require("axios");
import { baseUrl, getYearlyActivities } from "../config/config";

async function getYearlyActivity(userId, year) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/${getYearlyActivities}/${userId}?year=${
        year ? year : new Date().getFullYear()
      }`
    );
    if (data) {
      return data;
    }
  } catch (error) {
    if (error.response.data.message === "No activities found for this user") {
      return {
        data: []
      };
    } else {
      throw error;
    }
  }
}

const ActivityService = {
  getYearlyActivity
};

module.exports = ActivityService;
