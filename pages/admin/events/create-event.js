import { useEffect, useState } from "react";
import EventInfo from "../../../component/admin/EventInfo";
import OrganizerInfo from "../../../component/admin/OrganizerInfo";
import UserService from "../../../services/UserService";
import SiteHeader from "../../../component/layout/SiteHeader/SiteHeader";
import EventService from "../../../services/EventService";
import moment from "moment";
import Cookies from "universal-cookie";
import notify from "../../../lib/notify";
import { useRouter } from "next/router";
import SharedService from "../../../services/SharedService";
import { getCookieValue } from "../../../lib/cookie";


export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        const username = cookie.user_name;
        const { data } = await UserService.getUserByUsername(username);
        // removed roles from user data
        // const skillsRes = await SkillService.getSkills();
        if (data.roles[0] === "admin") {
          return {
            props: {
              profileData: {}
            }
          };
        } else {
          return {
            props: {
              profileData: {}
            },
            redirect: {
              permanent: false,
              destination: "/"
            }
          };
        }
      } else {
        return {
          props: {
            profileData: {}
          },
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return {
      props: {
        profileData: {}
      },
      redirect: {
        permanent: false,
        destination: "/"
      }
    };
  }
}

export async function getImageUrl(eventData , response) {
  return Promise.all([SharedService.uploadImage(eventData.guest_image , {
    stage: "dev",
    fileName: eventData.guest_image.name,
    id: response.data.data.id,
    category: "events",
    ContentType: "image/png"
  }), SharedService.uploadImage(eventData.banner_image , {
    stage: "dev",
    fileName: eventData.banner_image.name,
    id: response.data.data.id,
    category: "events",
    ContentType: "image/png"
  })])
}

const CreateEvent = () => {
  const router = useRouter()
  const [eventID, setEventID] = useState(router.query.id);
  useEffect(() => {
    setTimeout(() => {
      eventID && getEvents(eventID);
    }, 100);
  }, []);
  async function getEvents(reqData) {
    try {
      const data = await EventService.getEventById(reqData);
      const finalData = data.data;
      const date = moment(finalData.event_time).format('YYYY-MM-DD')
      const time = moment(finalData.event_time).format('HH:SS')
      setEventDetails({
        organizerImage: finalData.guest_image,
        organizerName: finalData.guest_name,
        tagLine: finalData.guest_designation,
        eventName:finalData.title,
        eventLocation:finalData.location,
        eventDescription: finalData.description,
        eventLink: finalData.registration_link,
        eventDate: date,
        eventTime: time,
        eventImage: finalData.banner_image
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [eventDetails, setEventDetails] = useState({
    organizerImage: "",
    organizerName: "",
    tagLine: "",
    eventName: "",
    eventLocation: "",
    eventDescription: "",
    eventLink: "",
    eventDate: "",
    eventTime: "",
    eventImage: ""
  });

  const formatTime = () => {
    let isoDate = moment(
      `${eventDetails.eventDate} ${eventDetails.eventTime}`
    ).format();
    return isoDate;
  };

  const createEventHandler = async (e) => {
    const eventData = {
      guest_name: eventDetails.organizerName,
      guest_designation: eventDetails.tagLine,
      guest_image: eventDetails.organizerImage,
      title: eventDetails.eventName,
      location : eventDetails.eventLocation,
      registration_link: eventDetails.eventLink,
      banner_image: eventDetails.eventImage,
      description: eventDetails.eventDescription,
      event_time: formatTime()
    };
    try {
      const data = await EventService.createNewEvent(userCookie, eventData);
      notify(data.data.message);
      router.push('/admin/events')
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
    formatTime();
  };

  const createUpdateHandler = async (e) => {
    const eventData = {
      guest_name: eventDetails.organizerName,
      guest_designation: eventDetails.tagLine,
      guest_image: eventDetails.organizerImage,
      title: eventDetails.eventName,
      registration_link: eventDetails.eventLink,
      banner_image: eventDetails.eventImage,
      description: eventDetails.eventDescription,
      event_time: formatTime()
    };
    try {
      const data = await EventService.updateEvent(
        eventID,
        eventData,
      );
      notify(data.data.message);
      router.push('/admin/events')
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
    formatTime();
  };

  return (
    <div className="bg-gray-100 min-h-full pb-5">
      <SiteHeader />
      <div className="bg-white max-w-6xl mx-auto flex  mt-3.5">
        <div className="px-4">
          <p className="font-bold text-sm rounded py-4">Create Event</p>
          <div className="h-1 bg-black rounded-t"></div>
        </div>
      </div>
      <div className="bg-white max-w-4xl m-auto mt-5 rounded border ">
        <div>
          <h1 className="font-bold text-xl mx-10 pt-8 pb-5">
            Create New Event
          </h1>
        </div>
        <OrganizerInfo
          eventDetails={eventDetails}
          setEventDetails={setEventDetails}
        />
        <EventInfo
          eventDetails={eventDetails}
          setEventDetails={setEventDetails}
        />
        <div className="flex items-center justify-end mx-10 mb-6">
          <button className="border-2 border-black bg-white px-8 py-2 rounded mr-5">
            Cancel
          </button>
          <button
            className="border-2 border-black bg-black px-8 py-2 rounded text-white"
            onClick={(e) =>
              eventID ? createUpdateHandler(e) : createEventHandler(e)
            }
            type="button"
          >
            {eventID ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
