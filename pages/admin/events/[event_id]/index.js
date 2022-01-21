import AdminEventSidebar from "../../../../component/admin/AdminEventSidebar";
import AdminEventData from "../../../../component/admin/AdminEventData";
import { getCookieValue } from "../../../../lib/cookie";
import notify from "../../../../lib/notify";
import EventService from "../../../../services/EventService";
import UserService from "../../../../services/UserService";

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
        const eventData = await EventService.getEventById(
          context.params.event_id
        );
        // removed roles from user data
        // const skillsRes = await SkillService.getSkills();
        if (data.roles[0] === "admin") {
          return {
            props: {
              profileData: {},
              eventData: eventData.data
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

const AdminEventDetails = ({ eventData }) => {
  return (
    <div>
      <AdminEventSidebar eventData={eventData} />
      <main className="ml-64">
        <div className="max-w-4xl mx-auto my-4">
          <AdminEventData eventData={eventData} />
        </div>
      </main>
    </div>
  );
};

export default AdminEventDetails;
