const axios = require("axios");
import {
  baseUrl,
  eventsUrl,
  eventIdUrl,
  createEventUrl,
  eventSlugUrl
} from "../config/config";
import { getImageUrl } from "../pages/admin/events/create-event";
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

async function getAllEvents() {
  try {
    const { data } = await axios.get(`${baseUrl}/api/v1/events`);
    return data;
  } catch (err) {
    throw err;
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

async function getEventBySlug(slug) {
  try {
    const { data } = await axios.get(`${baseUrl}/${eventSlugUrl}/${slug}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function createNewEvent(userCookie, eventData) {
  try {
    let response = await axios.post(`${baseUrl}/${createEventUrl}`, {
      guest_name: eventData.guest_name,
      guest_designation: eventData.guest_designation,
      title: eventData.title,
      location: eventData.location,
      registration_link: eventData.registration_link,
      description: eventData.description,
      event_time: eventData.event_time
    });
    if (response) {
      const res = await getImageUrl(eventData, response.data.data.id);
      response = await updateEvent(response.data.data.id, {
        guest_image: res[0],
        banner_image: res[1]
      });
      return response;
    }
  } catch (err) {
    throw err;
  }
}

async function deleteEvent(eventId) {
  try {
    const { data } = await axios.delete(
      `${baseUrl}/api/v1/admin/event/${eventId}`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

async function getEventByStatus(req) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/v1/events?status=${req.status}`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

async function updateEvent(eventId, updatedData) {
  console.log(updatedData);
  if (updatedData?.guest_name) {
    try {
      const res = await getImageUrl(updatedData, eventId);
      if (res) {
        console.log(res);
        if (typeof res === "object" && !res.url) {
          const response = await axios.put(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, guest_image: res[0], banner_image: res[1] }
          );
          if (response) {
            return response;
          }
        } else if (res.type === "guest") {
          const response = await axios.put(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, guest_image: res.url }
          );
          if (response) {
            return response;
          }
        } else if (res.type === "banner") {
          const response = await axios.put(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, banner_image: res.url }
          );
          if (response) {
            return response;
          }
        }
      } else {
        try {
          const response = await axios.put(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            updatedData
          );
          console.log(response);
          if (response) {
            return response;
          }
        } catch (error) {
          throw error;
        }
      }
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const response = await axios.put(
        `${baseUrl}/${createEventUrl}/${eventId}`,
        updatedData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      throw error;
    }
  }
}

const EventService = {
  getLatestEvents,
  getEventById,
  getEventBySlug,
  createNewEvent,
  getAllEvents,
  deleteEvent,
  getEventByStatus,
  updateEvent
};

export default EventService;
