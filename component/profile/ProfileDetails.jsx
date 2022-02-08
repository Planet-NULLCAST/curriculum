import Trails from "../profile/Trails";
import Profilestyles from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import UserService from '../../services/UserService'


export default function ProfileDetails({ userData, userCurrentLogin , isFollowing , setIsFollowing , getFollowerList }) {

  const followUser = async (id) => {
     const resp = await UserService.followUser(id)
     if(resp){
      const checkIfFollowed = await UserService.isFollwed(id)
      if(checkIfFollowed){
        setIsFollowing(checkIfFollowed.is_follower)
        getFollowerList()
      }
     }
  }

  const unFollowUser = async (id) => {
      const resp = await UserService.removeFollower(id)
      if(resp){
        console.log(resp)
        const checkIfFollowed = await UserService.isFollwed(id)
        if(checkIfFollowed){
          setIsFollowing(false)
          getFollowerList()
        }
      }
  }

  return (
    <div className="bg-white shadow-sm rounded pt-3 pb-4">
      <div className="flex flex-wrap h-auto px-4">
        <div className={`w-2/5 px-1 py-1 h-44 ${Profilestyles?.min_w_18}`}>
          <div
            className={`rounded p-4 h-full text-gray-700 relative ${Profilestyles?.bg_red_110} overflow-auto`}
          >
            <div className="flex">
              {`${userData.id}` === `${userCurrentLogin}` && (
                <Link href="/settings">
                  <a>
                    <img
                      className="absolute top-4 right-4"
                      src="/images/profileedit.svg"
                      alt="edit profile"
                      style = {{padding : "0.5rem"}}
                    />
                  </a>
                </Link>
              )}

              {/* picture */}
              <div className="relative">
                <div className="rounded-full h-24 w-24 bg-blue-200 overflow-hidden">
                  <img
                    src={userData?.avatar || '/images/dummy0.png' }
                    alt="avatar"
                    className="rounded-full max-h-24 max-w-24"
                    layout="fill"
                  />
                </div>
                {/* <img
                  className="absolute top-16 left-16"
                  src="/images/duckbadge.svg"
                  alt="duck badge"
                /> */}
              </div>

              {/* details */}
              <div className="px-6">
                <h3 className="mb-1 font-semibold text-lg text-gray-900">
                  {userData.full_name}
                </h3>
                <h3 className="my-1 text-sm font-medium">
                  @{userData.user_name}
                </h3>
                {isFollowing !== null && Number(userCurrentLogin) !== userData?.id && <button className="text-sm py-1.5 px-4 rounded" style={{backgroundColor : "#E8D3D3"}} onClick={!isFollowing ? () => followUser(userData?.id) : () => unFollowUser(userData?.id)}>
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>}
                <div className="flex flex-row my-1">
                  <img
                    className="mr-2"
                    src="/images/smallduck.svg"
                    alt="small duck"
                  />
                  <h3 className="font-semibold text-lg">0</h3>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-3 text-sm overflow-auto">{userData.bio}</div>
          </div>
        </div>
        <Trails />
      </div>
      {(userData.facebook ||
        userData.twitter ||
        userData.github ||
        userData.linkedin ||
        userData.website) && (
        <div className="bg-white w-full flex flex-wrap items-center justify-between border-t border-gray-100 pt-4 px-4 mt-4">
          <div className="flex flex-wrap items-center">
            {userData.facebook && (
              <Link href={`https://www.facebook.com/${userData.facebook}`}>
                <a target="_blank" rel="noopener noreferrer" className="mr-8">
                  <div className="flex items-center">
                    <Image
                      src="/images/svgs/fb.svg"
                      alt="edit"
                      width={7}
                      height={14}
                      layout="fixed"
                      margin={0}
                    />
                    <div
                      className={`font-medium truncate text-sm robotoFamily ml-1 underline ${Profilestyles?.a_green_210} ${Profilestyles?.urlWidth}`}
                    >{`/${userData.facebook}`}</div>
                  </div>
                </a>
              </Link>
            )}
            {userData.twitter && (
              <Link href={`https://twitter.com/${userData.twitter}`}>
                <a target="_blank" rel="noopener noreferrer" className="mr-8">
                  <div className="flex items-center">
                    <Image
                      src="/images/svgs/twitter.svg"
                      alt="edit"
                      width={17}
                      height={14}
                      layout="fixed"
                      margin={0}
                    />
                    <div
                      className={`font-medium truncate text-sm robotoFamily ml-1 underline ${Profilestyles?.a_green_210} ${Profilestyles?.urlWidth}`}
                    >{`/${userData.twitter}`}</div>
                  </div>
                </a>
              </Link>
            )}
            {userData.github && (
              <Link href={`https://github.com/${userData.github}`}>
                <a target="_blank" rel="noopener noreferrer" className="mr-8">
                  <div className="flex items-center">
                    <Image
                      src="/images/svgs/git.svg"
                      alt="edit"
                      width={17}
                      height={16}
                      layout="fixed"
                      margin={0}
                    />
                    <div
                      className={`font-medium truncate text-sm robotoFamily ml-1 underline ${Profilestyles?.a_green_210} ${Profilestyles?.urlWidth}`}
                    >{`/${userData.github}`}</div>
                  </div>
                </a>
              </Link>
            )}
            {userData.linkedin && (
              <Link href={`https://www.linkedin.com/in/${userData.linkedin}`}>
                <a target="_blank" rel="noopener noreferrer" className="mr-8">
                  <div className="flex items-center">
                    <Image
                      src="/images/svgs/linkedin.svg"
                      alt="edit"
                      width={14}
                      height={14}
                      layout="fixed"
                      margin={0}
                    />
                    <div
                      className={`font-medium truncate text-sm robotoFamily ml-1 underline ${Profilestyles?.a_green_210} ${Profilestyles?.urlWidth}`}
                    >{`/${userData.linkedin}`}</div>
                  </div>
                </a>
              </Link>
            )}
          </div>
          <div className="flex items-center">
            {userData.website && (
              <a
                href={userData.website}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="flex items-center">
                  <Image
                    src="/images/svgs/www.svg"
                    alt="edit"
                    width={17}
                    height={16}
                    layout="fixed"
                    margin={0}
                  />
                  <div
                    className={`font-medium truncate text-sm robotoFamily ml-1 underline ${Profilestyles?.a_green_210} ${Profilestyles?.urlWebWidth}`}
                  >
                    {userData.website}
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
