import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Profilestyles from "../../styles/Profile.module.css";
import Select from "react-select";
import ActivityService from "../../services/ActivityService";
import axios from "axios";
// import styles from './blogs.module.scss'

function getYearAgo(getTodayDate) {
  var lastYear = new Date();
  var dd = lastYear.getDate();
  var mm = lastYear.getMonth() + 1; //January is not 0!
  var yyyy = lastYear.getFullYear(getTodayDate) - 1;
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  lastYear = yyyy + "-" + mm + "-" + dd;
  return lastYear;
}

export default function Activity({ userId }) {
  const optionsCategory = [
    { label: new Date().getFullYear(), value: new Date().getFullYear() },
    {
      label: new Date().getFullYear() - 1,
      value: new Date().getFullYear() - 1
    },
    { label: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 }
  ];

  const [selectedYear, setSelectedYear] = React.useState(null);
  const [values, setValues] = useState(null);

  React.useEffect(() => {
    (async () => {
      const { data } = await ActivityService.getYearlyActivity(
        userId,
        selectedYear
      );
      if (data) {
        setValues(
          data.map((each) => ({ ...each, date: each.date.split("T")[0] }))
        );
      }
    })();
  }, [selectedYear]);

  const handleChange = (item) => {
    setSelectedYear(item.value);
  };

  return (
    <div className="bg-white shadow-sm rounded p-4 mt-4 h-72 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">Activity</span>
        {/* <div className="bg-gray-200 flex items-center text-sm font-semibold px-3 py-2">
          <p>2021</p>
          <img src="/images/arrowDown.svg" className="ml-2"></img>
        </div> */}
        <Select
          options={optionsCategory}
          value={selectedYear ? { label: selectedYear } : ""}
          isMulti={false}
          className={`basic-single postFilter m-0 outline-none focus:outline-none text-sm bg-gray-200 border rounded px-0 cursor-pointer mr-4 ${Profilestyles.min_w_6rem}`}
          classNamePrefix="Year"
          clearValue={() => undefined}
          onChange={handleChange}
          placeholder="Year"
          // closeMenuOnSelect={false}
        />
      </div>
      <div className="overflow-x-auto pb-3">
        <CalendarHeatmap
          startDate={
            !selectedYear
              ? getYearAgo(new Date().toISOString().split("T")[0])
              : `${selectedYear}-01-01`
          }
          endDate={
            !selectedYear
              ? new Date().toISOString().split("T")[0]
              : `${selectedYear}-12-31`
          }
          values={values || []}
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
