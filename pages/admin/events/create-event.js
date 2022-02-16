import { useEffect, useState } from "react";
import Head from "next/head";
import Link from 'next/link'
import EventInfo from "../../../component/admin/EventInfo";
import OrganizerInfo from "../../../component/admin/OrganizerInfo";
import { LoadIcon } from "../../../component/ButtonLoader/LoadIcon";
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
              profileData: {},
              referer: context.req.headers.referer
                ? context.req.headers.referer
                : ""
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

export async function getImageUrl(eventData, eventId) {
  if (eventData?.banner_image?.name && eventData?.guest_image?.name) {
    return Promise.all([
      SharedService.uploadImage(eventData.guest_image, {
        stage: "dev",
        fileName: eventData.guest_image.name,
        id: eventId,
        category: "events",
        ContentType: "image/png"
      }),
      SharedService.uploadImage(eventData.banner_image, {
        stage: "dev",
        fileName: eventData.banner_image.name,
        id: eventId,
        category: "events",
        ContentType: "image/png"
      })
    ]);
  } else if (eventData?.banner_image?.name) {
    try {
      const resp = await SharedService.uploadImage(eventData.banner_image, {
        stage: "dev",
        fileName: eventData.banner_image.name,
        id: eventId,
        category: "events",
        ContentType: "image/png"
      });
      if (resp) {
        return { url: resp, type: "banner" };
      }
    } catch (error) {
      throw error;
    }
  } else if (eventData?.guest_image?.name) {
    try {
      const resp = await SharedService.uploadImage(eventData.guest_image, {
        stage: "dev",
        fileName: eventData.guest_image.name,
        id: eventId,
        category: "events",
        ContentType: "image/png"
      });
      if (resp) {
        return { url: resp, type: "guest" };
      }
    } catch (error) {
      throw error;
    }
  }
}

const validateForm = (eventDetails, setEventDetailsError) => {
  let isValid = true;
  if (eventDetails.organizerName.trim()) {
    setEventDetailsError((prev) => ({ ...prev, organizerNameError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      organizerNameError: "Enter Organizer's Name"
    }));
  }
  if (eventDetails.organizerImage) {
    setEventDetailsError((prev) => ({ ...prev, organizerImageError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      organizerImageError: "Choose Organizer's Image"
    }));
  }
  if (eventDetails.tagLine.trim()) {
    setEventDetailsError((prev) => ({ ...prev, tagLineError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      tagLineError: "Enter Organizer's Tag"
    }));
  }
  if (eventDetails.eventName.trim()) {
    setEventDetailsError((prev) => ({ ...prev, eventNameError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventNameError: "Enter Event Name"
    }));
  }
  if (eventDetails.eventLocation.trim()) {
    setEventDetailsError((prev) => ({ ...prev, eventLocationError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventLocationError: "Enter Event Location"
    }));
  }
  if (eventDetails.eventDescription.trim()) {
    setEventDetailsError((prev) => ({ ...prev, eventDescriptionError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventDescriptionError: "Enter Event Description"
    }));
  }
  if (eventDetails.eventLink.trim()) {
    setEventDetailsError((prev) => ({ ...prev, eventLinkError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventLinkError: "Enter Event Link"
    }));
  }
  if (eventDetails.eventDate.trim()) {
    setEventDetailsError((prev) => ({ ...prev, eventDateError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventDateError: "Enter Event Date"
    }));
  }
  if (eventDetails.eventTime.trim()) {
    if (
      eventDetails.eventDate &&
      eventDetails.eventDate === new Date().toISOString().split("T")[0]
    ) {
      if (
        new Date().getHours() + ":" + new Date().getMinutes() >
        eventDetails.eventTime
      ) {
        isValid = false;
        setEventDetailsError((prev) => ({
          ...prev,
          eventTimeError: "Time has already passed"
        }));
      } else {
        setEventDetailsError((prev) => ({ ...prev, eventTimeError: "" }));
      }
    } else {
      setEventDetailsError((prev) => ({ ...prev, eventTimeError: "" }));
    }
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventTimeError: "Enter Event Time"
    }));
  }
  if (eventDetails.eventImage) {
    setEventDetailsError((prev) => ({ ...prev, eventImageError: "" }));
  } else {
    isValid = false;
    setEventDetailsError((prev) => ({
      ...prev,
      eventImageError: "Choose a Banner Image"
    }));
  }
  return isValid;
};

const CreateEvent = ({ referer }) => {
  const router = useRouter();
  const [eventID, setEventID] = useState(router.query.id);
  const [isLoading, setIsLoading] = useState(false);
  const [eSlug , setEslug] = useState("")
  useEffect(() => {
    (() => {
      eventID && getEvents(eventID);
    })();
  }, []);
  async function getEvents(reqData) {
    try {
      const data = await EventService.getEventById(reqData);
      const finalData = data.data;
      const date = moment(finalData.event_time).format("YYYY-MM-DD");
      const time = moment(finalData?.event_time).format("LT").split(" ")[0]
      setEventDetails({
        organizerImage: finalData.guest_image,
        organizerName: finalData.guest_name,
        tagLine: finalData.guest_designation,
        eventName: finalData.title,
        eventLocation: finalData.location,
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
  const [eventDetailsError, setEventDetailsError] = useState({
    organizerImageError: "",
    organizerNameError: "",
    tagLineError: "",
    eventNameError: "",
    eventLocationError: "",
    eventDescriptionError: "",
    eventLinkError: "",
    eventDateError: "",
    eventTimeError: "",
    eventImageError: ""
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
      meta_title: eventDetails.eventName,
      location: eventDetails.eventLocation,
      registration_link: eventDetails.eventLink,
      banner_image: eventDetails.eventImage,
      description: eventDetails.eventDescription,
      meta_description: eventDetails.eventDescription,
      event_time: formatTime()
    };
    if (validateForm(eventDetails, setEventDetailsError)) {
      try {
        setIsLoading(true);
        const data = await EventService.createNewEvent(userCookie, eventData);
        if (data) {
          setIsLoading(false);
          notify("Event Cretated Successfully");
          router.push("/admin/events");
        }
      } catch (err) {
        setIsLoading(false);
        notify(err?.response?.data?.message ?? err?.message, "error");
      }
    }
  };

  const createUpdateHandler = async (e) => {
    const eventData = {
      guest_name: eventDetails.organizerName,
      guest_designation: eventDetails.tagLine,
      guest_image: eventDetails.organizerImage,
      title: eventDetails.eventName,
      meta_title: eventDetails.eventName,
      location: eventDetails.eventLocation,
      registration_link: eventDetails.eventLink,
      banner_image: eventDetails.eventImage,
      description: eventDetails.eventDescription,
      meta_description: eventDetails.eventDescription,
      event_time: formatTime()
    };
    if (validateForm(eventDetails, setEventDetailsError)) {
    try {
      setIsLoading(true);
      const data = await EventService.updateEvent(eventID, eventData);
      if (data) {
        setIsLoading(false);
        setEslug(data.data.data.slug)
        notify(data.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }
  };

  const clearEventHandler = (e) => {
    const clearEventDetails = {
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
    };
    setEventDetails(clearEventDetails);
    if (referer) {
      router.back();
    } else {
      router.push("/admin/events");
    }
  };

  return (
    <div className="bg-gray-100 min-h-full pb-5">
      <Head>
        <title>Admin | Create Event | Nullcast</title>
      </Head>
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
          eventDetailsError={eventDetailsError}
          setEventDetailsError={setEventDetailsError}
        />
        <EventInfo
          eventDetails={eventDetails}
          setEventDetails={setEventDetails}
          eventDetailsError={eventDetailsError}
          setEventDetailsError={setEventDetailsError}
        />
        <div className="flex items-center justify-end mx-10 mb-6">
          <button
            className="border-2 border-black bg-white px-8 py-2 rounded mr-5"
            onClick={(e) => clearEventHandler(e)}
          >
            Cancel
          </button>
          <Link href={`/e/${eSlug}`}>
          {eSlug && <button
            className={`border-2 flex items-center border-black bg-black px-8 py-2 rounded text-white mr-5 ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            Preview
          </button>}
          </Link>
          <button
            className={`border-2 flex items-center border-black bg-black px-8 py-2 rounded text-white ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) =>
              eventID ? createUpdateHandler(e) : createEventHandler(e)
            }
            type="button"
          >
            {isLoading && <LoadIcon color="#fff" height="23px" />}
            {eventID ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
