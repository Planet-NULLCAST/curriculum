import AdminEventSidebar from "../../../../component/admin/AdminEventSidebar";

const attendees = [
  {
    firstName: "Liam",
    lastName: "Anna",
    email: "dummy@gmail.com",
    id: 1,
    image: "/images/pic1.png"
  },
  {
    firstName: "Noah",
    lastName: "Emma",
    email: "dummy@gmail.com",
    id: 2,
    image: "/images/pic2.png"
  },
  {
    firstName: "Oliver",
    lastName: "Ava",
    email: "dummy@gmail.com",
    id: 3,
    image: "/images/pic1.png"
  },
  {
    firstName: "William",
    lastName: "Sophia",
    email: "dummy@gmail.com",
    id: 4,
    image: ""
  },
  {
    firstName: "James",
    lastName: "Charlotte",
    email: "dummy@gmail.com",
    id: 5,
    image: "/images/pic1.png"
  },
  {
    firstName: "Benjamin",
    lastName: "Amel",
    email: "dummy@gmail.com",
    id: 6,
    image: ""
  },
  {
    firstName: "William",
    lastName: "Sophi",
    email: "dummy@gmail.com",
    id: 7,
    image: "/images/pic2.png"
  },
  {
    firstName: "James",
    lastName: "Charlotte",
    email: "dummy@gmail.com",
    id: 8,
    image: ""
  },
  {
    firstName: "Benjamin",
    lastName: "Amelia",
    email: "dummy@gmail.com",
    id: 9,
    image: ""
  },
  {
    firstName: "Oliver",
    lastName: "Eva",
    email: "dummy@gmail.com",
    id: 10,
    image: "/images/pic1.png"
  }
];

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

const EventAttendies = ({ eventData }) => {
  return (
    <div>
      <AdminEventSidebar eventData={eventData} />
      <main className="ml-64">
        <div className="max-w-4xl mx-auto my-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border text-left px-8 py-4">Image</th>
                <th className="border text-left px-8 py-4">FirstName</th>
                <th className="border text-left px-8 py-4">LastName</th>
                <th className="border text-left px-8 py-4">Email</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((each) => {
                return (
                  <tr key={each?.id}>
                    <td className="border px-8 py-4">
                      {each?.image ? (
                        <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center text-white mr-3">
                          <img
                            src={each?.image}
                            alt="img"
                            className="w-full h-full"
                          ></img>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                          {`${each?.firstName[0]}${each?.lastName[0]}`}
                        </div>
                      )}
                    </td>
                    <td className="border px-8 py-4">{each?.firstName}</td>
                    <td className="border px-8 py-4">{each?.lastName}</td>
                    <td className="border px-8 py-4">{each?.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EventAttendies;
