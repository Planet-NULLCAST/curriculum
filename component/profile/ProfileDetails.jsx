import Trails from "../profile/Trails";
import Profilestyles from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProfileDetails({ userData }) {
  return (
    <div className="bg-white shadow-sm rounded pt-3 pb-4">
      <div className="flex flex-wrap h-auto px-4">
        <div className={`w-2/5 px-1 h-auto py-1 ${Profilestyles?.min_w_18}`}>
          <div
            className={`rounded p-4 h-full text-gray-700 relative ${Profilestyles?.bg_red_110}`}
          >
            <div className="flex">
              {userData.isThisUserTheCurrentLogined && (
                <Link href="/settings">
                  <a>
                    <img
                      className="absolute top-4 right-4"
                      src="/images/profileedit.svg"
                      alt="edit profile"
                    />{" "}
                  </a>
                </Link>
              )}

              {/* picture */}
              <div className="relative">
                <div className="rounded-full h-24 w-24 bg-blue-200 overflow-hidden">
                  <img
                    src={userData.avatar || "/images/svgs/avatar.svg"}
                    alt="avatar"
                    className="rounded-full h-24 w-24"
                  />
                </div>
                {/* <img
                  className="absolute top-16 left-16"
                  src="/images/duckbadge.svg"
                  alt="duck badge"
                /> */}
              </div>

              {/* details */}
              <div className="px-6">
                <h3 className="mb-1 font-semibold text-lg text-gray-900">
                  {userData.fullName}
                </h3>
                <h3 className="my-1 text-sm font-medium">
                  @{userData.username}
                </h3>
                <div className="flex flex-row my-1">
                  <img
                    className="mr-2"
                    src="/images/smallduck.svg"
                    alt="small duck"
                  />
                  <h3 className="font-semibold text-lg">0</h3>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-3 text-sm">{userData.bio}</div>
          </div>
        </div>
        <Trails />
      </div>
      {(userData.facebook ||
        userData.twitter ||
        userData.github ||
        userData.website) && (
        <div className="bg-white w-full flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 px-4 mt-4">
          <div className="flex flex-wrap items-center">
            {userData.facebook && (
              <a
                href={userData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-9"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/svgs/fb.svg"
                    alt="edit"
                    width={7}
                    height={14}
                    layout="fixed"
                    margin={0}
                  />
                  <span
                    className={`font-medium text-base robotoFamily ml-1 underline ${Profilestyles?.a_green_210}`}
                  >{`/${userData.fullName}`}</span>
                </div>
              </a>
            )}
            {userData.twitter && (
              <a
                href={userData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-9"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/svgs/twitter.svg"
                    alt="edit"
                    width={17}
                    height={14}
                    layout="fixed"
                    margin={0}
                  />
                  <span
                    className={`font-medium text-base robotoFamily ml-1 underline ${Profilestyles?.a_green_210}`}
                  >{`/${userData.fullName}`}</span>
                </div>
              </a>
            )}
            {userData.github && (
              <a
                href={userData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-9"
              >
                <div className="flex items-center">
                  <Image
                    src="/images/svgs/git.svg"
                    alt="edit"
                    width={17}
                    height={16}
                    layout="fixed"
                    margin={0}
                  />
                  <span
                    className={`font-medium text-base robotoFamily ml-1 underline ${Profilestyles?.a_green_210}`}
                  >{`/${userData.fullName}`}</span>
                </div>
              </a>
            )}
          </div>
          <div className="flex items-center">
            {userData.website && (
              <a
                href={userData.website}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="flex items-center">
                  <Image
                    src="/images/svgs/www.svg"
                    alt="edit"
                    width={17}
                    height={16}
                    layout="fixed"
                    margin={0}
                  />
                  <span
                    className={`font-medium text-base robotoFamily ml-1 underline ${Profilestyles?.a_green_210}`}
                  >{`/${userData.fullName}`}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
