import EventInfo from "../../component/admin/EventInfo";
import OrganizerInfo from "../../component/admin/OrganizerInfo";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";

const CreateEvent = () => {
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
        <OrganizerInfo />
        <EventInfo />
        <div className="flex items-center justify-end mx-10 mb-6">
          <button className="border-2 border-black bg-white px-8 py-2 rounded mr-5">
            Cancel
          </button>
          <button className="border-2 border-black bg-black px-8 py-2 rounded text-white">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
