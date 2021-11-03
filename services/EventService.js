const axios = require("axios");
import {
  baseUrl,
  eventsUrl
} from "../config/config";
import { getUrl } from "../lib/getUrl";

async function getLatestEvents(reqParams) {
  let url = getUrl();
  try {
    const res = await axios.get(`${url}/${eventsUrl}`, {
      params: reqParams
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const EventService = {
  getLatestEvents
};

module.exports = EventService;