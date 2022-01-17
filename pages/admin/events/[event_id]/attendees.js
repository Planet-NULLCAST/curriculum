import SiteHeader from "../../../../component/layout/SiteHeader/SiteHeader";

const followers = [
  {
    name: "Liam Olivia Anna",
    image: "/images/pic1.png"
  },
  {
    name: "Noah Emma",
    image: "/images/pic2.png"
  },
  {
    name: "Oliver Ava",
    image: "/images/pic1.png"
  },
  {
    name: "William Sophia",
    image: ""
  },
  {
    name: "James Charlotte",
    image: "/images/pic1.png"
  },
  {
    name: "Benjamin Amel",
    image: ""
  },
  {
    name: "William Sophi",
    image: "/images/pic2.png"
  },
  {
    name: "James Charlotte",
    image: ""
  },
  {
    name: "Benjamin Amelia",
    image: ""
  },
  {
    name: "Oliver Eva",
    image: "/images/pic1.png"
  }
];

const EventAttendies = () => {
  const shortName = (e) => {
    var matches = e.match(/\b(\w)/g);
    var acronym = matches.join("");
    return acronym.substring(0, 2);
  };
  return (
    <div className="bg-gray-100 min-h-screen pb-5">
      <SiteHeader />
      <div className="max-w-panel mx-auto lg:px-0 md:px-6 sm:px-3 mt-3.5 ">
        <h1 className="text-center">Event Attendies</h1>
        <div className="mt-4  max-w-sm mx-auto">
          {followers?.map((data) => (
            <div
              className="flex items-center py-2 md:px-16"
              key={data.name + data.image}
            >
              {data?.image ? (
                <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center text-white mr-3">
                  <img
                    src={data?.image}
                    alt="img"
                    className="w-full h-full"
                  ></img>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-3">
                  {shortName(data?.name)}
                </div>
              )}
              <span className="text-sm font-semibold">{data?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAttendies;
