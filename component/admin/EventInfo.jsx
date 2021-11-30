import { useRef, useState } from "react";


export default function EventInfo ({ eventDetails, setEventDetails }) {
  const [fileName, setFileName] = useState("");
  const ref = useRef();
  console.log(eventDetails?.eventImage);

  const imageUploadHandler = async (e) => {
    const imageFile = e.target.files[0];
        setFileName(imageFile.name);
        setEventDetails((prev) => ({ ...prev, eventImage: imageFile }));
  };

  return (
    <div className="mx-10 mb-8">
      <div className="flex mb-6 items-center justify-center">
        <p className="text-sm font-semibold pr-3 flex-end">Event Info</p>
        <div
          className="h-px w-6/7 flex-grow"
          style={{ backgroundColor: "#A7A7A7" }}
        ></div>
      </div>
      <div className="flex justify-center item-center mb-4">
        <div className="flex flex-col w-full mr-3">
          <label className="mb-2 text-sm font-semibold" htmlFor="even name">
            Event Name
          </label>
          <input
            type="text"
            className="bg-gray-100 p-4 rounded border-grayBorder border-2"
            name="event name"
            placeholder="Enter Event Name"
            value={eventDetails.eventName}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventName: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label
            className="mb-2 text-sm font-semibold"
            htmlFor="event location"
          >
            Event Location
          </label>
          <input
            type="text"
            className="bg-gray-100 p-4 rounded border-grayBorder border-2"
            name="event location"
            placeholder="Paste location here"
            value={eventDetails.eventLocation}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventLocation: e.target.value
              }))
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-2 text-sm font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          type="text"
          className="bg-gray-100 p-4 rounded border-grayBorder border-2 resize-none"
          name="description"
          placeholder = "Add description here"
          rows="4"
          value={eventDetails.eventDescription}
          onChange={(e) =>
            setEventDetails((prev) => ({
              ...prev,
              eventDescription: e.target.value
            }))
          }
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-2 text-sm font-semibold" htmlFor="event link">
          Event Link
        </label>
        <input
          type="text"
          className="bg-gray-100 p-4 rounded border-grayBorder border-2"
          name="event link"
          placeholder="Link Here"
          value={eventDetails.eventLink}
          onChange={(e) =>
            setEventDetails((prev) => ({ ...prev, eventLink: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-center item-center mb-5">
        <div className="flex flex-col w-full mr-3">
          <label className="mb-2 text-sm font-semibold" htmlFor="even date">
            Event Date
          </label>
          <input
            type="date"
            className="bg-gray-100 p-4 rounded border-grayBorder border-2"
            min={new Date().toISOString().split('T')[0]}
            name="event date"
            placeholder="choose"
            value={eventDetails.eventDate}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventDate: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label className="mb-2 text-sm font-semibold" htmlFor="event time">
            Event Time
          </label>
          <input
            type="time"
            className="bg-gray-100 p-4 rounded border-grayBorder border-2"
            name="event time"
            placeholder="choose"
            value={eventDetails.eventTime}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventTime: e.target.value
              }))
            }
          />
        </div>
      </div>
      <div
        className="border-dashed border-2 border-grayBorder p-10 rounded text-center flex flex-col"
        onClick={() => ref.current.click()}
      >
        <label htmlFor="inputFiles" className="font-bold relative">
          {eventDetails?.eventImage === "" ? "Upload Image" : eventDetails?.eventImage.name}
          <input
            type="file"
            className="hidden absolute top-0 left-0 w-full flex-grow"
            placeholder="uplaod image"
            id="inputFile"
            ref={ref}
            accept="image/*"
            onChange={imageUploadHandler}
          />
        </label>
      </div>
    </div>
  );
};
