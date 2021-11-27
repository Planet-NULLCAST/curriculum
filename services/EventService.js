const axios = require("axios");
import {
  baseUrl,
  eventsUrl,
  eventIdUrl,
  createEventUrl
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
async function getallevents(){
  try{
    const {data} = await axios.get(`${baseUrl}/api/v1/events`);
    return data;
  }
  catch(err){
    console.log(err)
  }
}
async function getEventById(eventId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${eventIdUrl}/${eventId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createNewEvent(userCookie, eventData) {
  try {
    const response = await axios.post(`${baseUrl}/${createEventUrl}` , eventData)
    console.log(response);
    return response
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const EventService = {
  getLatestEvents,
  getEventById,
  createNewEvent,
  getallevents
};

module.exports = EventService;
