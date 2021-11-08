import EventInfo from "../../component/admin/EventInfo";
import OrganizerInfo from "../../component/admin/OrganizerInfo";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";

const CreateEvent = () => {
  return (
    <div className="bg-gray-100 min-h-screen-top">
      <SiteHeader />
      <div className="bg-white max-w-4xl m-auto mt-5 rounded border ">
        <div>
          <h1>Create New Event</h1>
        </div>
        <OrganizerInfo />
        <EventInfo />
      </div>
    </div>
  );
};

export default CreateEvent;
