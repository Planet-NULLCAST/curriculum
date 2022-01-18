import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminEventSidebar = ({ eventData }) => {
  const router = useRouter();
  return (
    <nav className="h-screen overflow-auto w-60 fixed top-0 left-0 bg-gray-100 pt-4">
      <small className="text-gray-600 font-semibold pl-6 pb-6">
        Manage Events
      </small>
      <div className="h-px w-full bg-gray-200 mt-4" />
      <h1 className="p-4 font-bold text-lg">{eventData?.title}</h1>
      <small className="text-gray-600 font-semibold pl-4">
        {moment(eventData?.event_time).format("lll")}
      </small>
      <div className="h-px w-full bg-gray-200 mt-4" />
      <ul>
        <Link href={`/admin/events/${router.query.event_id}/attendees`}>
          <a>
            <li className="p-4 hover:bg-white">Attendies</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default AdminEventSidebar;
