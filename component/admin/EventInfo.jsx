const EventInfo = () => {
  return (
    <div className="mx-10 mb-8">
      <div className="flex mb-6 items-center justify-center">
        <p className="text-sm font-semibold pr-3 flex-end">Event Info</p>
        <div className="h-px bg-black w-6/7 flex-grow"></div>
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
            placeholder="paste location here"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-4">
        <label className="mb-2 text-sm font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          type="text"
          className="bg-gray-100 rounded border-grayBorder border-2 resize-none"
          name="description"
          rows="4"
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
            name="event date"
            placeholder="choose"
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
          />
        </div>
      </div>
      <div className="border-dashed border-2 border-grayBorder p-8 rounded text-center">
        <input
          type="file"
          className="my-3 bg-tarnsparent"
          placeholder="uplaod image"
        />
      </div>
    </div>
  );
};

export default EventInfo;
