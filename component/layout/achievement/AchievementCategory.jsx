import React from "react";

const AchievementCategory = () => {
  return (
    <>
      <div className="flex items-center py-3.5  px-4">
        <div>
          <p className="font-sans font-bold">All</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achOrange"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold">Contributer</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achBlue"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold">Competitor</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achGreen"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold">Learner</p>
        </div>
      </div>
      <div className="h-px bg-gray-200"></div>
    </>
  );
};

export default AchievementCategory;
