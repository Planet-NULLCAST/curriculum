const axios = require("axios");
import {
  baseUrl,
  eventsUrl,
  eventIdUrl,
  createEventUrl,
  eventSlugUrl,
  bookEventUrl,
  getAllEventsUrl,
  eventRequestUrl
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

// get all events sitemap
async function getAllEventsSlug() {
  try {
    const { data } = await axios.get(`${baseUrl}/${getAllEventsUrl}`);
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
    return data;
  } catch (err) {
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
      event_time: eventData.event_time,
      status: eventData.status
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
          const response = await axios.patch(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, guest_image: res[0], banner_image: res[1] }
          );
          if (response) {
            return response;
          }
        } else if (res.type === "guest") {
          const response = await axios.patch(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, guest_image: res.url }
          );
          if (response) {
            return response;
          }
        } else if (res.type === "banner") {
          const response = await axios.patch(
            `${baseUrl}/${createEventUrl}/${eventId}`,
            { ...updatedData, banner_image: res.url }
          );
          if (response) {
            return response;
          }
        }
      } else {
        try {
          const response = await axios.patch(
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
      const response = await axios.patch(
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

//admin review event

async function adminReviewEvent(eventId, adminReviewdData) {
  try {
    const response = await axios.patch(
      `${baseUrl}/${adminEventReviewUrl}/${eventId}`,
      adminReviewdData
    );
    if (response) {
      return response.data;
    }
  } catch (error) {}
}

// book event
async function bookEvent(email, eventId, full_name, userId) {
  try {
    if (userId) {
      const { data } = await axios.post(
        `${baseUrl}/${bookEventUrl}/?user_id=${userId}`,
        {
          "event_id": eventId,
          "email": email,
          "full_name": full_name
        }
      );
      return data;
    } else {
      const { data } = await axios.post(`${baseUrl}/${bookEventUrl}/`, {
        "event_id": eventId,
        "email": email,
        "full_name": full_name
      });
      return data;
    }
  } catch (err) {
    throw err;
  }
}

async function getBookEventStatus(eventId) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/v1/event-attendee/${eventId}`
    );
    return data;
  } catch (err) {
    throw err;
  }
}

// request event
async function requestEvent(eventData) {
  try {
    let response = await axios.post(`${baseUrl}/${eventRequestUrl}`, {
      guest_name: eventData.guest_name,
      guest_designation: eventData.guest_designation,
      title: eventData.title,
      location: eventData.location,
      registration_link: eventData.registration_link,
      description: eventData.description,
      event_time: eventData.event_time,
      status: eventData.status
    });
    if (response) {
      const res = await getImageUrl(eventData, response.data.data.id);
      console.log(res);
      response = await axios.put(
        `${baseUrl}/api/v1/event/${response.data.data.id}`,
        {
          guest_image: res[0],
          banner_image: res[1]
        }
      );
      return response;
    }
  } catch (err) {
    throw err;
  }
}

const EventService = {
  getBookEventStatus,
  getLatestEvents,
  bookEvent,
  getEventById,
  getEventBySlug,
  createNewEvent,
  getAllEvents,
  getAllEventsSlug,
  adminReviewEvent,
  deleteEvent,
  getEventByStatus,
  updateEvent,
  requestEvent
};

export default EventService;
