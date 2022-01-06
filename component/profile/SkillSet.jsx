import { useState } from "react";
import Profilestyles from "../../styles/Profile.module.css";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

export default function SkillSet({ userData }) {
  console.log(userData)
  const [showTenPlus, setShowTenPlus] = useState(false);

  return (
    <>
      <div className="bg-white shadow-sm rounded py-4 mt-3 px-4">
        <span className="font-bold">Skills</span>
        <div className="flex flex-wrap h-auto mt-2">
          {userData?.skills?.length > 0 ? (
            <>
              {userData?.skills?.sort((a, b) => (a.name > b.name) ? 1 : -1).map(
                (skill, index) =>
                  index < 10 && (
                    <div
                      className={`px-5 h-7 rounded flex justify-center items-center mr-2 text-sm mb-2 font-semibold	${Profilestyles?.skillCard}`}
                      key={skill?.id}
                    >
                      {skill?.name?.toUpperCase()}
                    </div>
                  )
              )}
              {showTenPlus &&
                userData?.skills &&
                userData?.skills?.length > 10 && (
                  <>
                    <Fade>
                      {userData?.skills?.sort((a, b) => (a.name > b.name) ? 1 : -1).map((skill, index) => (
                        <>
                          {index >= 10 && (
                            <div
                              className={`px-5 h-7 rounded flex justify-center items-center mr-2 text-sm mb-2 font-semibold	${Profilestyles?.skillCard}`}
                              key={skill}
                            >
                              {skill.name.toUpperCase()}
                            </div>
                          )}
                        </>
                      ))}
                    </Fade>
                  </>
                )}
              {!showTenPlus && userData?.skills?.length > 10 && (
                <button
                  className="text-blue-600 text-sm hover:text-blue-900 font-bold duration-700"
                  type="button"
                  onClick={() => setShowTenPlus(true)}
                >
                  {`+ ${userData?.skills?.length - 10} More`}
                </button>
              )}
              {showTenPlus && userData?.skills?.length > 10 && (
                <button
                  className="text-blue-600 text-sm hover:text-blue-900 font-bold duration-700"
                  type="button"
                  onClick={() => setShowTenPlus(false)}
                >
                  Show less
                </button>
              )}
            </>
          ) : (
            <div className="w-full h-12 flex justify-start items-center">
              <span className="text-gray-400 text-sm">
                Currently, you haven't added any skills
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
