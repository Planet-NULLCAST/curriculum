import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Profilestyles from "../../styles/Profile.module.css";

export default function Activity() {
  return (
    <div className="bg-white shadow-sm rounded p-4 mt-4 h-72 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">Activity</span>
        <div className="bg-gray-200 flex items-center text-sm font-semibold px-3 py-2">
          <p>2021</p>
          <img src="/images/arrowDown.svg" className="ml-2"></img>
        </div>
      </div>
      <div className="overflow-auto pb-3">
        <CalendarHeatmap
          startDate={new Date("2020-12-31")}
          endDate={new Date("2021-12-31")}
          values={[
            { date: "2021-01-01", count: 1 },
            { date: "2021-01-03", count: 2 },
            { date: "2021-01-31", count: 3 },
            { date: "2021-02-12", count: 4 },
            { date: "2021-02-23", count: 5 },
            { date: "2021-02-28", count: 4 },
            { date: "2021-03-06", count: 2 },
            { date: "2021-03-12", count: 3 },
            { date: "2021-04-01", count: 1 },
            { date: "2021-05-03", count: 4 },
            { date: "2021-05-06", count: 5 },
            { date: "2021-05-12", count: 2 },
            { date: "2021-05-01", count: 3 },
            { date: "2021-06-03", count: 4 },
            { date: "2021-06-06", count: 5 },
            { date: "2021-07-12", count: 2 },
            { date: "2021-08-01", count: 1 },
            { date: "2021-09-03", count: 4 },
            { date: "2021-09-06", count: 3 },
            { date: "2021-10-12", count: 2 }
          ]}
          gutterSize={4}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="font-semibold">
          <span className="font-extrabold">212</span> Contributions in the last
          year
        </span>
        <div className="flex items-center text-sm justify-end">
          <p className="mr-2 text-gray-500">Less</p>
          <div
            className={`w-4 h-4 rounded-sm mr-1 ${Profilestyles.color_scale_1}`}
          ></div>
          <div
            className={`w-4 h-4 rounded-sm mr-1 ${Profilestyles.color_scale_2}`}
          ></div>
          <div
            className={`w-4 h-4 rounded-sm mr-1 ${Profilestyles.color_scale_3}`}
          ></div>
          <div
            className={`w-4 h-4 rounded-sm mr-1 ${Profilestyles.color_scale_4}`}
          ></div>
          <div
            className={`w-4 h-4 rounded-sm mr-1 ${Profilestyles.color_scale_5}`}
          ></div>
          <p className="text-gray-500">More</p>
        </div>
      </div>
    </div>
  );
}
