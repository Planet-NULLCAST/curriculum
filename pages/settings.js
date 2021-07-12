import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import UserService from "../services/UserService";
import PostService from "../services/PostService";
import Cookies from "universal-cookie";
import { getCookieValue } from "../lib/cookie";

import { toast } from "react-toastify";
import styles from "../styles/Settings.module.scss";

export async function getServerSideProps(context) {
  // console.log(context.req.headers.cookie);
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        const cookie = JSON.parse(contextCookie);
        // console.log(cookie);
        const response = await UserService.getProfileByUserId(cookie);
        // console.log(response);
        return {
          props: {
            profileData: response.data
          }
        };
      } else {
        console.log("User not logged in");
        return {
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    } else {
      console.log("User not logged in");
      return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      };
    }
  } catch (err) {
    console.log("User not logged in");
    return {
      props: {
        profileData: []
      },
      redirect: {
        permanent: false,
        destination: "/"
      }
    };
  }
}

export default function Settings({ profileData }) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [profile, setProfile] = useState({
    fullName: "",
    bio: "",
    avatar: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    github: "",
    website: ""
  });

  useEffect(() => {
    // console.log({ profileData });
    setProfile({ ...profileData });
  }, []);

  const updateProfile = async () => {
    try {
      const response = await UserService.updateProfileByUserId(
        userCookie,
        profile
      );

      // if (profile.avatar) {
      document.cookie = `userNullcast=${JSON.stringify({
        ...userCookie,
        avatar: profile.avatar
      })}`;
      // console.log(cookies.get("userNullcast"));
      // }
      notify(response.message);
    } catch (err) {
      // console.log(err.response.data.message);
      // notify(err.response.data.message);
    }
  };
  const handleSettings = (e) => {
    e.preventDefault();
    updateProfile();
  };

  const handleOnChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name, value);

    setProfile((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const uploadImage = async (imageFile, imageData) => {
    // setLoading(true);
    const s3ImageUrl = await PostService.uploadImage(imageFile, imageData);
    // console.log(s3ImageUrl);

    setProfile((prevValue) => {
      return {
        ...prevValue,
        avatar: s3ImageUrl
      };
    });
    // setLoading(false);
  };

  const deletePhoto = () => {
    setProfile((prevValue) => {
      return {
        ...prevValue,
        avatar: ""
      };
    });
  };
  const handleImage = (e) => {
    // console.log(e.target.files[0]);
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageData = {
        stage: "dev",
        fileName: imageFile.name,
        id: userCookie.id,
        category: "profiles",
        ContentType: imageFile.type
      };

      uploadImage(imageFile, imageData);
    }
  };

  const notify = (msg) =>
    toast(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  return (
    <>
      <SiteHeader />
      <Head>
        <title>Settings</title>
      </Head>
      <section>
        <div className="bg-gray-100 py-2 pb-6 px-6">
          <div className="bg-white h-12 my-3 flex flex-row items-center rounded shadow-sm max-w-panel">
            <ul className="flex flex-row justify-start items-center font-semibold h-full">
              <li className="mx-4 cursor-pointer border-b-4 h-full flex justify-center items-center border-gray-600">
                <span className="mt-1 text-gray-600">Settings</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap relative lg:justify-center">
            <div className={`${styles.aside} bg-white md:mr-4`}>
              <ul>
                <Link href="/settings">
                  <a>
                    <li>
                      <span>Edit Profile</span>
                    </li>
                  </a>
                </Link>
                <Link href="/change-password">
                  <a>
                    <li>
                      <span>Change Password</span>
                    </li>
                  </a>
                </Link>

                {/* <li>
                  <span>Notifications</span>
                </li>
                <li>
                  <span>Sessions</span>
                </li> */}
              </ul>
            </div>

            <div className={`${styles.formWrap} bg-white p-4 md:px-10`}>
              <div className="text-center mb-8">
                <div>
                  <figure>
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onInput={handleImage}
                      className="cursor-pointer"
                    />
                    <img src={profile.avatar} alt="profile" />
                    <figcaption className="z-40">
                      <div className={styles.icon}>
                        <svg
                          width="32"
                          height="26"
                          viewBox="0 0 32 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.015 4.526h-3.32L22.862 1.79C22.17.763 20.959.147 19.714.147h-7.609C10.86.147 9.65.763 8.958 1.79L7.125 4.526h-3.32C1.695 4.526 0 6.202 0 8.29v13.273c0 2.086 1.695 3.763 3.804 3.763h24.21c2.11 0 3.805-1.677 3.805-3.763V8.289c0-2.087-1.694-3.763-3.804-3.763zM15.91 22.246c-4.739 0-8.578-3.797-8.578-8.484 0-4.686 3.84-8.45 8.578-8.45 4.738 0 8.577 3.798 8.577 8.485 0 4.652-3.839 8.449-8.577 8.449zM27.53 9.828H26.01c-.623-.034-1.107-.547-1.072-1.163a1.12 1.12 0 011.072-1.06h1.383a1.118 1.118 0 011.176 1.06 1.087 1.087 0 01-1.037 1.163z"
                            fill="#fff"
                          />
                          <path
                            d="M15.91 9.076c-2.629 0-4.773 2.121-4.773 4.72 0 2.6 2.144 4.687 4.773 4.687 2.628 0 4.773-2.12 4.773-4.72 0-2.6-2.145-4.687-4.773-4.687z"
                            fill="#fff"
                          />
                        </svg>
                        Change Photo
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <button onClick={deletePhoto} className={`${styles.delete}`}>
                    Delete Photo
                  </button>
                </div>
              </div>

              <form className="flex flex-wrap" onSubmit={handleSettings}>
                <div className="w-full mb-4">
                  <label htmlFor="fullName">Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={profile.fullName}
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    cols="30"
                    rows="10"
                    onChange={handleOnChange}
                    value={profile.bio}
                  ></textarea>
                </div>
                <div className="w-1/2 mb-4 pr-2">
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Enter URL"
                    onChange={handleOnChange}
                    value={profile.twitter}
                  />
                </div>
                <div className="w-1/2 mb-4 pl-2">
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="Enter URL"
                    onChange={handleOnChange}
                    value={profile.linkedin}
                  />
                </div>
                <div className="w-1/2 mb-4 pr-2">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Enter URL"
                    onChange={handleOnChange}
                    value={profile.facebook}
                  />
                </div>
                <div className="w-1/2 mb-4 pl-2">
                  <label htmlFor="github">Github</label>
                  <input
                    id="github"
                    name="github"
                    type="text"
                    placeholder="Enter URL"
                    onChange={handleOnChange}
                    value={profile.github}
                  />
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    id="website"
                    name="website"
                    onChange={handleOnChange}
                    value={profile.website}
                  />
                </div>
                <div className="text-right w-full">
                  <button type="submit">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
