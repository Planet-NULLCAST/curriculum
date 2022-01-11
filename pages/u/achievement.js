import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import AchievementCategory from "../../component/layout/achievement/AchievementCategory";
import AchievementList from "../../component/layout/achievement/AchievementList";

const achievements = [
  {
    id : 1,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "contributer",
    isProgress : false
  },
  {
    id : 2,
    title : "Prefect Profile",
    points : 22000,
    description : "Complete your basic profile information",
    date : "4 January 2022",
    type : "competitor",
    isProgress : true
  },
  {
    id : 3,
    title : "Even More Perfect Profile",
    points : 22000,
    description : "For connecting your social media links",
    date : "4 January 2022",
    type : "Learner",
    isProgress : false
  },
  {
    id : 4,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "pink",
    isProgress : false
  },
  {
    id : 5,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "contributer",
    isProgress : false
  },
  {
    id : 6,
    title : "Prefect Profile",
    points : 22000,
    description : "Complete your basic profile information",
    date : "4 January 2022",
    type : "competitor",
    isProgress : true
  },
  {
    id : 7,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "contributer",
    isProgress : false
  },
  {
    id : 8,
    title : "Prefect Profile",
    points : 22000,
    description : "Complete your basic profile information",
    date : "4 January 2022",
    type : "competitor",
    isProgress : true
  },
  {
    id : 9,
    title : "Even More Perfect Profile",
    points : 22000,
    description : "For connecting your social media links",
    date : "4 January 2022",
    type : "Learner",
    isProgress : false
  },
  {
    id : 10,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "pink",
    isProgress : false
  },
  {
    id : 11,
    title : "Acheivement unlocked",
    points : 22000,
    description : "View the acheivements page for the first time",
    date : "4 January 2022",
    type : "contributer",
    isProgress : false
  },
  {
    id : 12,
    title : "Prefect Profile",
    points : 22000,
    description : "Complete your basic profile information",
    date : "4 January 2022",
    type : "competitor",
    isProgress : true
  }
]

const Achievement = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-5">
      <SiteHeader />
      <div className="bg-white md:max-w-6xl mx-auto flex  mt-3.5">
        <div className="px-4">
          <p className="font-bold text-sm rounded py-4">Acheivement</p>
          <div className="h-1 bg-black rounded-t"></div>
        </div>
      </div>
      <div className="bg-white max-w-6xl m-auto mt-5 rounded border">
        <AchievementCategory />
        <AchievementList achievements={achievements}/>
      </div>
    </div>
  )
}

export default Achievement