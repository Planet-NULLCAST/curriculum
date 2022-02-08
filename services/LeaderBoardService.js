const axios = require("axios");
import { baseUrl, leaderBoardUrl } from "../config/config";
async function getLeaderBoard(reqData) {
  try {
    const response = await axios.get(`${baseUrl}/${leaderBoardUrl}`, {
      params: reqData
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

const LeaderBoardService = {
  getLeaderBoard
};

module.exports = LeaderBoardService;
