import Image from "next/image";

const OrganizerInfo = () => {
  return (
    <div className="mx-10 mb-8">
      <div className="flex mb-6 items-center justify-center">
        <p className="text-sm font-semibold pr-3 flex-end">Organizer Info</p>
        <div className="h-px bg-black w-6/7 flex-grow"></div>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/svgs/avatar.svg"
          alt="profile image"
          height={180}
          width={180}
        />
        <div className="flex flex-col flex-grow ml-12">
          <div className="flex flex-col mb-3">
            <label
              className="mb-2 text-sm font-semibold"
              htmlFor="organizer name"
            >
              Name
            </label>
            <input
              type="text"
              className="bg-gray-100 p-4 rounded border-grayBorder border-2"
              name="organizer name"
              placeholder="Organizer Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold" htmlFor="Tag Line">
              Tag Line
            </label>
            <input
              type="text"
              className="bg-gray-100 p-4 rounded border-grayBorder border-2"
              name="Tag Line"
              placeholder="Tag here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerInfo;
