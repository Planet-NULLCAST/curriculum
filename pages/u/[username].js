import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../component/profile/Navbar";
import { getCookieValue } from "../../lib/cookie";
import Activity from "../../component/profile/Activity";
import ProfileDetails from "../../component/profile/ProfileDetails";
import Count from "../../component/profile/Count";
import FollowersList from "../../component/profile/FollowersList";
import BlogList from "../../component/profile/BlogList";
import LuckEgg from "../../component/profile/LuckEgg";
import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import UserService from "../../services/UserService";
import PostService from "../../services/PostService";
import Profilestyles from "../../styles/Profile.module.css";
import SkillSet from "../../component/profile/SkillSet";
import { homePageSchema, logoPath, url } from "../../seoschema/schema";

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        const userId = cookie.id;
        const username = context.params.username;

        const data = await UserService.getUserByUsername(username);
        return {
          props: {
            userData: data.data,
            userCurrentLogin: userId,
          }
        };
      } else {
        //user logout from user profile
        const data = await UserService.getUserByUsername(
          context.params.username
        );
        return {
          props: {
            userData: data?.data,
            userCurrentLogin: 0
          }
        };
      }
    } else {
      const data = await UserService.getUserByUsername(context.params.username);
      return {
        props: {
          userData: data?.data,
          userCurrentLogin: data.data.id
        }
      };
    }
  } catch (err) {
    //Redirect to 404 page if there is any kind of error
    // console.log(err);
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    };
  }
}

export default function Username({ userData, userCurrentLogin }) {
  const [currentNav, setCurrentNav] = useState("profile");
  const [newBlogs, setNewBlogs] = useState();
  const [postsCount, setPostsCount] = useState();
  const [postsLimit, setPostsLimit] = useState();
  const [followDetails , setFollowDetails] = useState();
  const[isFollowing , setIsFollowing] = useState(null)


  useEffect(() => {
    getPublishedUserPosts();
    getUserPostCount();
    getFollowerList();
    checkIfFollowed(userData?.id)
  }, []);

  const changeNav = (data) => {
    setCurrentNav(data);
  };

  const checkIfFollowed = async (id) => {
    const resp = await UserService.isFollwed(id)
    if(resp?.is_follower){
      setIsFollowing(resp.is_follower)
    } 
    else{
      setIsFollowing(false)
    }
  }

  const getFollowerList = async (page = 0) => {
    const params = {
      page : page+1,
    }
    const response = await UserService.getUserFollowers(userData.id , params)
    if(response){
      if(followDetails?.followers){
        console.log(response)
        setFollowDetails(prev => ({...prev , followers : [...prev.followers , ...response?.followers]}))
      }
      else {
        setFollowDetails(response)
      }
    }
  }
  const getPublishedUserPosts = async () => {
    const UserId = userData.id;
    const postParams = {
      status: "published"
    };
    const response = await PostService.getUserPostsByUser(UserId, postParams);
    console.log(response.data.posts);
    setNewBlogs(response.data.posts);
    setPostsLimit(response.data.limit);
  };

  const getUserPostCount = async () => {
    const UserId = userData.id;
    const postParams = {
      status: "published"
    };
    const response = await PostService.getPostCount(UserId, postParams);
    setPostsCount(response.data.count);
  };

  const getNewPostsWithCount = (postsCount) => {
    getNewPosts(postsCount);
  };

  const getNewPosts = async (count) => {
    const postParams = {
      status: "published",
      count: count,
      order: "DESC"
    };
    const responsePost = await PostService.getUserPostsByUser(postParams);

    setNewBlogs((prevValue) => {
      return [...prevValue, ...responsePost.posts];
    });
  };

  return (
    <div>
      <Head>
        <title> @{userData.user_name} | Nullcast</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...homePageSchema,
              url: `${url}/${userData.user_name}`,
              description: userData.meta_description
            })
          }}
        ></script>
        <meta
          name="description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <link rel="canonical" href={`${url}/${userData.meta_title}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${userData.meta_title}`} />
        <meta
          property="og:description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <meta property="og:url" content={`${url}/${userData.meta_title}`} />
        <meta property="og:image" content={logoPath} />

        <meta name="twitter:data2" content="Userpage" />
        <meta name="twitter:site" content="@nullcast_io" />
        <meta name="twitter:card" content={`${userData.avatar}`} />
        <meta name="twitter:title" content={`${userData.meta_title}`} />
        <meta
          name="twitter:description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <meta name="twitter:url" content={`${url}/${userData.meta_title}`} />
        <meta name="twitter:image" content={logoPath} />
        <meta property="og:image:width" content="352" />
        <meta property="og:image:height" content="212" />
      </Head>
      <SiteHeader />
      <div className="bg-gray-100 py-2 pb-6 px-6">
        <Navbar changeNav={changeNav} currentNav={currentNav} />
        <div className="flex lg:flex-row flex-col max-w-panel min-h-screen">
          <div className="flex flex-col lg:w-3/4 w-full">
            <ProfileDetails
              userData={userData}
              userCurrentLogin={userCurrentLogin}
              isFollowing={isFollowing}
              setIsFollowing={setIsFollowing}
              getFollowerList = {getFollowerList}
            />
            <SkillSet userData={userData} />
            {currentNav === "profile" && (
              <>
                {/* <Activity /> */}
                <BlogList
                  posts={newBlogs}
                  getNewPostsWithCount={getNewPostsWithCount}
                  postsCount={postsCount}
                />
              </>
            )}
            {currentNav === "store" && <LuckEgg />}
          </div>
          <div
            className={`bg-white shadow-sm rounded lg:w-1/4 w-full mt-3 lg:mt-0 lg:ml-4 p-3 overflow-auto ${Profilestyles.h_max_40rem}`}
          >
            {followDetails && <Count postsCount={postsCount} followDetails = {followDetails} />}
            {followDetails && <FollowersList followDetails = {followDetails} getFollowerList = {getFollowerList}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
