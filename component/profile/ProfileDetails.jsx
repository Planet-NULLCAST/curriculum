import React,{useEffect} from "react";
import Trails from "../profile/Trails";
import Profilestyles from "../../styles/Profile.module.css";


export default function ProfileDetails({userData}) {
  
  return (
    <div className="bg-white shadow-sm rounded px-4 py-3">
      <div className="flex flex-wrap h-auto">
        <div className={`w-2/5 px-1 h-auto py-1 ${Profilestyles?.min_w_18}`}>
          <div
            className={`rounded p-4 h-full text-gray-700 relative ${Profilestyles?.bg_red_110}`}
          >
            <div className="flex">
              <img
                className="absolute top-4 right-4"
                src="/images/profileedit.svg"
                alt="edit profile"
              />
              {/* picture */}
              <div className="relative">
                <div className="rounded-full h-24 w-24 bg-red-600">
                  <img
                    src="/images/dummy.svg"
                    alt="default"
                    className="w-full h-full"
                  />
                </div>
                <img
                  className="absolute top-16 left-16"
                  src="/images/duckbadge.svg"
                  alt="duck badge"
                />
              </div>

              {/* details */}
              <div className="px-6">
                <h3 className="mb-1 font-semibold text-lg text-gray-900">
                  {userData.user.fullName}
                </h3>
                <h3 className="my-1 text-sm font-medium">{userData.user.username}</h3>
                <div className="flex flex-row my-1">
                  <img
                    className="mr-2"
                    src="/images/smallduck.svg"
                    alt="small duck"
                  />
                  <h3 className="font-semibold text-lg">22000</h3>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-3 text-sm">
              ML data annotations made super easy. Just upload data, invite your
              team and build training/evaluation dataset in hours.
            </div>
          </div>
        </div>
        <Trails />
      </div>
    </div>
  );
}
