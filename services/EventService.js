const axios = require("axios");
import {
  baseUrl,
  eventsUrl,
  eventIdUrl,
  createEventUrl
} from "../config/config";
import { getUrl } from "../lib/getUrl";
import {getImageUrl} from '../pages/admin/create-event'
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
      response = await updateEvent({
        guest_image : res[0],
        banner_image : res[1]
      }, response.data.data.id)
      console.log(response.data)
      return response
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateEvent(updatedData , eventId) {
  try {
    const response = await axios.put(`${baseUrl}/${createEventUrl}/${eventId}`,updatedData)
    if(response){
      return response
    }
  } catch (error) {
    console.log(err);
    throw err;
  }
}

const EventService = {
  getLatestEvents,
  getEventById,
  createNewEvent,
  updateEvent
};

module.exports = EventService;
