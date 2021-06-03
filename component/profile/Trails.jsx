import React from "react";
import Profilestyles from "../../styles/Profile.module.css";

export default function Trails() {
  const trailItems = [
    {
      trailName: "Contributor",
      points: "1500",
      title: "Mega Expert",
      rank: "145",
      total: "37,222"
    },
    {
      trailName: "Competitor",
      points: "0",
      title: "Unranked",
      rank: "145",
      total: "37,222"
    },
    {
      trailName: "Learner",
      points: "1500",
      title: "Mega Expert",
      rank: "145",
      total: "37,222"
    }
  ];
  return (
    <>
      {trailItems.map((trail) => (
        <div
          key={trail.trailName}
          className={`w-1/5 px-1 h-auto py-1 ${Profilestyles.min_w_9}`}
        >
          <div
            className={`w-full p-4 h-full rounded ${
              trail.trailName === "Contributor" && Profilestyles?.bg_green_110
            } ${
              trail.trailName === "Competitor" && Profilestyles?.bg_blue_110
            } ${trail.trailName === "Learner" && Profilestyles?.bg_cyan_110}`}
          >
            <h3 className="font-semibold text-gray-900 mb-2">
              {trail.trailName}
            </h3>
            <div className="flex flex-row mt-2 mb-1">
              <img
                className="mr-2"
                src="/images/smallduck.svg"
                alt="small duck"
              />
              <h3 className="font-semibold text-lg">{trail.points}</h3>
            </div>

            <h2 className="text-red-500 font-semibold">{trail.title}</h2>
            {trail.title !== "Unranked" && (
              <>
                <h5 className="text-xs text-gray-600 mt-2">Current Rank</h5>
                <div>
                  <span className="text-gray-900 font-semibold text-xl">
                    {trail.rank}
                  </span>
                  <span className="text-sm text-gray-600">
                    {" "}
                    of {trail.total}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
