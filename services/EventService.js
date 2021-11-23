const axios = require("axios");
import {
  baseUrl,
  eventsUrl,
  eventIdUrl,
  createEventUrl
} from "../config/config";
import PostService from './PostService'
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

async function getEventById(eventId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${eventIdUrl}/${eventId}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getImageUrl(eventData , response) {
  return Promise.all([PostService.uploadImage(eventData.guest_image , {
    stage: "dev",
    fileName: eventData.guest_image.name,
    id: response.data.data.id,
    category: "events",
    ContentType: "image/png"
  }), PostService.uploadImage(eventData.banner_image , {
    stage: "dev",
    fileName: eventData.banner_image.name,
    id: response.data.data.id,
    category: "events",
    ContentType: "image/png"
  })])
}

async function createNewEvent(userCookie, eventData) {
  try {
    let response = await axios.post(`${baseUrl}/${createEventUrl}` , {
      guest_name: eventData.guest_name,
      guest_designation: eventData.guest_designation,
      title: eventData.title,
      location : eventData.location,
      registration_link: eventData.registration_link,
      description: eventData.description,
      event_time: eventData.event_time
    })
    if(response){
      const res = await getImageUrl(eventData , response)
      console.log(res)
      response = await axios.put(`${baseUrl}/${createEventUrl}/${response.data.data.id}`,{
        guest_image : res[0],
        banner_image : res[1]
      })
      console.log(response.data)
      return response
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const EventService = {
  getLatestEvents,
  getEventById,
  createNewEvent
};

module.exports = EventService;
