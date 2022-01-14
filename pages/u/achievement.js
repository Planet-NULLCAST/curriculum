import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import AchievementCategory from "../../component/layout/achievement/AchievementCategory";
import AchievementList from "../../component/layout/achievement/AchievementList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const achievements = [
  {
    id: 1,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "contributer",
    isProgress: false
  },
  {
    id: 2,
    title: "Prefect Profile",
    points: 22000,
    description: "Complete your basic profile information",
    date: "4 Jan 2022",
    type: "competitor",
    isProgress: true
  },
  {
    id: 3,
    title: "Even More Perfect Profile",
    points: 22000,
    description: "For connecting your social media links",
    date: "4 Jan 2022",
    type: "Learner",
    isProgress: false
  },
  {
    id: 4,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "pink",
    isProgress: false
  },
  {
    id: 5,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "contributer",
    isProgress: false
  },
  {
    id: 6,
    title: "Prefect Profile",
    points: 22000,
    description: "Complete your basic profile information",
    date: "4 Jan 2022",
    type: "competitor",
    isProgress: true
  },
  {
    id: 7,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "contributer",
    isProgress: false
  },
  {
    id: 8,
    title: "Prefect Profile",
    points: 22000,
    description: "Complete your basic profile information",
    date: "4 Jan 2022",
    type: "competitor",
    isProgress: true
  },
  {
    id: 9,
    title: "Even More Perfect Profile",
    points: 22000,
    description: "For connecting your social media links",
    date: "4 Jan 2022",
    type: "Learner",
    isProgress: false
  },
  {
    id: 10,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "pink",
    isProgress: false
  },
  {
    id: 11,
    title: "Acheivement unlocked",
    points: 22000,
    description: "View the acheivements page for the first time",
    date: "4 Jan 2022",
    type: "contributer",
    isProgress: false
  },
  {
    id: 12,
    title: "Prefect Profile",
    points: 22000,
    description: "Complete your basic profile information",
    date: "4 Jan 2022",
    type: "competitor",
    isProgress: true
  }
];

const Achievement = () => {
  const [achievement , setAchievement] = useState(achievements)

  const router = useRouter()

  useEffect(() => {
    console.log(router.query.type)
      setAchievement(achievements)
      if(router.query.type){
        const filtered = achievements.filter(each => each.type.toLowerCase() === router.query.type.toLowerCase())
        console.log(filtered , "f")
        console.log(achievement , "a")
        setAchievement(filtered)
      }
  },[router.query.type])
  return (
    <div className="bg-gray-100 min-h-screen pb-5">
       <Head>
         <title>Achievement | Nullcast</title>
       </Head>
      <SiteHeader />
      <div className="max-w-panel mx-auto lg:px-0 md:px-6 sm:px-3 mt-3.5">
        <div className="bg-white flex rounded border">
          <div className="px-4">
            <p className="font-bold text-sm rounded py-4">Acheivement</p>
            <div className="h-1 bg-black rounded-t"></div>
          </div>
        </div>
        <div className="bg-white mt-5 rounded border">
          <AchievementCategory />
          <AchievementList achievement={achievement}/>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
