import { useRef, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';

export default function EventInfo({ eventDetails, setEventDetails, eventDetailsError, setEventDetailsError }) {
  const [fileName, setFileName] = useState("");
  const ref = useRef();
  const [pimg, setPimg] = useState('')
  const imageUploadHandler = async (e) => {
    const imageFile = e.target.files[0];
    setPimg(imageFile)
    setFileName(imageFile.name);
    setEventDetails((prev) => ({ ...prev, eventImage: imageFile }));
  };

  const QuillModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      // [{ list: 'ordered' }, { list: 'bullet' }],
      // ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  };
  const QuillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'code-block'
  ];

  const eventNameValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventNameError: "Enter Event Name" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventNameError: "" }))
    }
  }

  const eventLocationValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventLocationError: "Enter Event Details" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventLocationError: "" }))
    }
  }

  const eventDescriptionValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventDescriptionError: "Enter Event Description" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventDescriptionError: "" }))
    }
  }

  const eventLinkValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventLinkError: "Enter Event Link" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventLinkError: "" }))
    }
  }

  const eventDateValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventDateError: "Enter Event Date" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventDateError: "" }))
    }
  }
  const eventTimeValidation = (e) => {
    if (e.target.value === "") {
      setEventDetailsError(prev => ({ ...prev, eventTimeError: "Enter Event Time" }))
    } else {
      setEventDetailsError(prev => ({ ...prev, eventTimeError: "" }))
    }
  }

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
            onBlur={(e) => eventNameValidation(e)}
          />
          {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
            {eventDetailsError.eventNameError}
          </span>}
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
            onBlur={(e) => eventLocationValidation(e)}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventLocation: e.target.value
              }))
            }
          />
          {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
            {eventDetailsError.eventLocationError}
          </span>}
        </div>
      </div>
      <div className="flex flex-col w-full mb-4">
        <ReactQuill
          modules={QuillModules}
          formats={QuillFormats}
          placeholder="Write something amazing..."
          onChange={(e) => {
            setEventDetails((prev) => ({
              ...prev,
              eventDescription: e
            }))

          }

          }
          value={eventDetails.eventDescription}
        />
        {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
          {eventDetailsError.eventDescriptionError}
        </span>}
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
          onBlur={(e) => eventLinkValidation(e)}
          onChange={(e) =>
            setEventDetails((prev) => ({ ...prev, eventLink: e.target.value }))
          }
        />
        {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
          {eventDetailsError.eventLinkError}
        </span>}
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
            onBlur={(e) => eventDateValidation(e)}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventDate: e.target.value
              }))
            }
          />
          {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
            {eventDetailsError.eventDateError}
          </span>}
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
            onBlur={(e) => eventTimeValidation(e)}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventTime: e.target.value
              }))
            }
          />
          {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
            {eventDetailsError.eventTimeError}
          </span>}
        </div>
      </div>
      <div
        className="border-dashed border-2 border-grayBorder p-10 rounded text-center flex flex-col"
        onClick={() => ref.current.click()}
      >
        <label htmlFor="inputFiles" className="font-bold relative">
          {eventDetails?.eventImage === "" ? "Upload Image" : eventDetails?.eventImage?.name ? eventDetails?.eventImage?.name : eventDetails?.eventImage?.split('/')[6]}
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
      {<span className="flex items-center font-bold tracking-wide text-red-danger text-xs mt-1 ml-0">
        {eventDetailsError.eventImageError}
      </span>}
    </div>
  );
};
