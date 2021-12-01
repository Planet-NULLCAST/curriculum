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
    throw err;
  }
}
async function getAllEvents(){
  try{
    const {data} = await axios.get(`${baseUrl}/api/v1/events`);
    return data;
  }
  catch(err){
    throw err
  }
}
async function getEventById(eventId) {
  try {
    const { data } = await axios.get(`${baseUrl}/${eventIdUrl}/${eventId}`);
    return data;
  } catch (err) {
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
      response = await updateEvent({
        guest_image : res[0],
        banner_image : res[1]
      }, response.data.data.id)
      return response
    }
  } catch (err) {
    throw err;
  }
}

async function deleteEvent(eventId){
  try{
    const {data} = await axios.delete(`${baseUrl}/api/v1/admin/event/${eventId}`)
    return data
  }catch(err){
    throw err;
  }
}
async function getEventByStatus(req){
  try{
      const {data} = await axios.get(`${baseUrl}/v1/events?status=${req.status}`)
      return data
  }
  catch(err){
    throw err;
  }
}

async function updateEvent(eventId, updatedData) {
  try {
    const response = await axios.put(`${baseUrl}/${createEventUrl}/${eventId}`,updatedData)
    if(response){
      return response
    }
  } catch (error) {
    throw err;
  }
}

const EventService = {
  getLatestEvents,
  getEventById,
  createNewEvent,
  getAllEvents,
  deleteEvent,
  getEventByStatus,
  updateEvent
};

module.exports = EventService;
