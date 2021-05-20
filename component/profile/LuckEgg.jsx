import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Profilestyles from "../../styles/Profile.module.css";

export default function LuckEgg() {
  const eggs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const incubators = [1];
  return (
    <div className="bg-white shadow-sm rounded mt-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 px-4 pt-4">
        <span className="font-bold">Luck Egg</span>
      </div>
      <div className="flex flex-wrap px-4 pt-2 border-b pb-4">
        {eggs?.map((data) => (
          <div className="bg-gray-200 p-3 mr-3 mb-3 rounded w-20 flex flex-col justify-center items-center">
            <img src="/images/egg.svg" alt="egg"></img>
            <p className="text-sm mt-1">Day {data}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-1 px-4 pt-4">
        <span className="font-bold">Incubator</span>
      </div>
      <div className="flex flex-wrap px-4 pt-2 pb-4">
        {incubators?.map((data) => (
          <div className="mr-3 mb-3 rounded flex flex-col justify-center items-center">
            <img src="/images/incubator.svg" alt="egg"></img>
          </div>
        ))}
      </div>
    </div>
  );
}
