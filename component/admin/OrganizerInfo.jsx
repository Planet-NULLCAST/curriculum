import { useRef } from "react";
import PostService from "../../services/PostService";
const OrganizerInfo = ({ eventDetails, setEventDetails }) => {
  const ref = useRef();
  const imageUploadHandler = async (e) => {
    const imageFile = e.target.files[0];

    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      category: "events",
      ContentType: imageFile.type
    };

    try {
      const s3ImageUrl = await PostService.uploadImage(imageFile, imageData);

      if (s3ImageUrl) {
        console.log(s3ImageUrl);
        setEventDetails((prev) => ({ ...prev, organizerImage: s3ImageUrl }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-10 mb-8">
      <div className="flex mb-6 items-center justify-center">
        <p className="text-sm font-semibold pr-3 flex-end">Organizer Info</p>
        <div
          className="h-px w-6/7 flex-grow"
          style={{ backgroundColor: "#A7A7A7" }}
        ></div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <img
            src={`${
              eventDetails.organizerImage
                ? eventDetails.organizerImage
                : "/images/svgs/avatar.svg"
            }`}
            alt="profile image"
            height={180}
            width={180}
            className="cursor-pointer rounded-full"
          />
          <div onClick={() => ref.current.click()}>
            <label htmlFor="inputFiles" className="font-bold relative pl-8">
              Change Photo
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
              value={eventDetails.organizerName}
              onChange={(e) =>
                setEventDetails((prev) => ({
                  ...prev,
                  organizerName: e.target.value
                }))
              }
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
              value={eventDetails.tagLine}
              onChange={(e) =>
                setEventDetails((prev) => ({
                  ...prev,
                  tagLine: e.target.value
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerInfo;