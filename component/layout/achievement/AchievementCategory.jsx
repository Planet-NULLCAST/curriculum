import {useRouter} from 'next/router'

const AchievementCategory = () => {

  const router = useRouter()

  const achievementFilter = (e) => {
    console.log(e.target)
    if(e.target.innerText === "All"){
      router.push(`${router.pathname}`, undefined, { shallow: true })
    }
    else{
      router.push(`${router.pathname}/?type=${e.target.innerText}`, undefined, { shallow: true })
     }
   }

  return (
    <>
      <div className="flex items-center py-3.5  px-4">
        <div>
          <p className="font-sans font-bold cursor-pointer" onClick={achievementFilter}>All</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achOrange"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold cursor-pointer" onClick={achievementFilter} >Contributer</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achBlue"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold cursor-pointer" onClick={achievementFilter} >Competitor</p>
        </div>
        <div className="flex items-center pl-8">
          <div className="h-2 w-2 rounded-full bg-achGreen"></div>
          <p className="pl-1 text-gray-500 font-sans font-bold cursor-pointer" onClick={achievementFilter} >Learner</p>
        </div>
      </div>
      <div className="h-px bg-gray-200"></div>
    </>
  );
};

export default AchievementCategory;
