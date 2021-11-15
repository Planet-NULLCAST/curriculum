import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import UserService from "../services/UserService";
import PostService from "../services/PostService";
import Cookies from "universal-cookie";
import { getCookieValue } from "../lib/cookie";
import ImageCropper from "../component/popup/ImageCropper";
import { toast } from "react-toastify";
import styles from "../styles/Settings.module.scss";
import ModalConfirm from "../component/popup/ModalConfirm";
import CreatableSelect from "react-select/creatable";
import SkillService from "../services/SkillService";
import notify from "../lib/notify";

export async function getServerSideProps(context) {
  try {
    if (context.req.headers.cookie) {
      const contextCookie = getCookieValue(
        context.req.headers.cookie,
        "userNullcast"
      );
      if (contextCookie) {
        console.log('d');
        const cookie = JSON.parse(contextCookie);
        console.log('d');
        const username = cookie.user_name;
        const { data }  = await UserService.getUserByUsername(username);
        console.log(data ,'error')
        // const skillsRes = await SkillService.getSkills();
        return {
          props: {
            profileData: data,
            // _skills: skillsRes
          }
        };
      } else {
        return {
          redirect: {
            permanent: false,
            destination: "/"
          }
        };
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, 'error');
    return {
      props: {
        profileData: []
      },
      // redirect: {
      //   permanent: false,
      //   destination: "/"
      // }
    };
  }
}

export default function Settings({ profileData, _skills }) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [loading, setLoading] = useState(false);
  const [allSkills, setAllSkills] = useState(_skills);
  const [profile, setProfile] = useState({
    full_name: "",
    bio: "",
    avatar: "",
    skills: [],
    twitter: "",
    facebook: "",
    linkedin: "",
    github: "",
    website: ""
  });
  const [errors, setErrors] = useState({
    full_name: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    github: "",
    website: ""
  });
  const [image, setImage] = useState("");

  useEffect(() => {
    setProfile({ ...profileData });
    setImage(profileData.avatar);
    // console.log(profileData);
    // console.log(_skills);
    setAllSkills(_skills);
  }, []);

  const updateProfile = async (newProfile) => {
    try {
      const response = await UserService.updateProfileByUserId(
        userCookie,
        newProfile ? newProfile : profile
      );
      notify(response.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notify(err?.response?.data?.message, 'error');
    }
  };
  const handleSettings = (e) => {
    e.preventDefault();
    if (profile.full_name) {
      updateProfile();
    } else {
      setErrors((prevValue) => {
        return {
          ...prevValue,
          full_name: "Required"
        };
      });
    }
  };

  const handleSkills = (e) => {
    const newSkill = e
      .filter((skill) => {
        if (skill.__isNew__ === true) {
          return skill;
        }
      })
      .map((fSkill) => fSkill.value);

    SkillService.postSkills(userCookie, newSkill);
    setProfile((prevValue) => {
      return {
        ...prevValue,
        skills: e.map((i) => i.value)
      };
    });
  };

  const handleErrors = (e) => {
    const { name, value } = e.target;
    if (name === "full_name") {
      if (value === "") {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: "Required"
          };
        });
      } else if (value) {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: "valid"
          };
        });
      }
    } else if (name === "website") {
      if (value === "" || value.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: "valid"
          };
        });
      } else {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: "Please enter a valid URL"
          };
        });
      }
    } else if (
      name === "twitter" ||
      name === "facebook" ||
      name === "linkedin" ||
      name === "github"
    ) {
      if (
        value === "" ||
        (value.match(/^[a-zA-Z0-9]\S*$/) && value.length < 30)
      ) {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: "valid"
          };
        });
      } else {
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [name]: `Invalid ${name} username`
          };
        });
      }
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const uploadImage = async (image) => {
    if (image) {
      const imageData = {
        stage: "dev",
        fileName: userCookie.username + ".png",
        id: userCookie.id,
        category: "profiles",
        ContentType: "image/png"
      };
      setLoading(true);
      notify("Uploading image in progress");
      try {
        let s3ImageUrl = await PostService.uploadImage(image, imageData);
        s3ImageUrl += "?bustcache=" + new Date().getTime();
        setImage(s3ImageUrl);

        setProfile({ ...profile, avatar: s3ImageUrl });
        const cookies = new Cookies();
        const userCookie = cookies.get("userNullcast");
        userCookie.avatar = s3ImageUrl;
        document.cookie = `userNullcast=${JSON.stringify(userCookie)}`;
        updateProfile({ ...profile, avatar: s3ImageUrl });
      } catch (error) {
        setLoading(false);
        notify("Image upload failed", 'error');
      }
    }

    setLoading(false);
  };

  const closeTrigerred = () => {
    setImage(profile.avatar);
  };

  // const deletePhoto = () => {
  //   setProfile((prevValue) => {
  //     return {
  //       ...prevValue,
  //       avatar: ""
  //     };
  //   });
  //   const cookies = new Cookies();
  //   const userCookie = cookies.get("userNullcast");
  //   userCookie.avatar = "";
  //   document.cookie = `userNullcast=${JSON.stringify(userCookie)}`;
  // };

  const handleImage = (e) => {
    e.preventDefault();
    if (e.target.files.length) {
      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

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

          <div className="flex flex-wrap relative lg:justify-center max-w-panel">
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
                    <ImageCropper
                      image={image}
                      aspectRatio={1}
                      closeTrigerred={closeTrigerred}
                      trigger={
                        <input
                          type="file"
                          id="avatar"
                          name="avatar"
                          accept="image/png, image/jpeg"
                          onInput={handleImage}
                          className="cursor-pointer"
                        />
                      }
                      handleSubmit={uploadImage}
                    />
                    <img
                      src={profile.avatar || "/images/svgs/avatar.svg"}
                      alt="profile"
                    />
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

                {/* {profile.avatar && (
                  <div>
                    <ModalConfirm
                      trigger={
                        <div
                          className={`cursor-pointer hover:opacity-50 duration-500 ${styles.delete}`}
                        >
                          Delete Photo
                        </div>
                      }
                      handleSubmit={deletePhoto}
                      purpose={"delete"}
                      buttonColor={"red"}
                      heading={"Are you sure"}
                      text="Are you sure you want to delete this image?"
                      // secondaryText="This cannot be undone"
                    />
                  </div>
                )} */}
              </div>

              <form className="flex flex-wrap" onSubmit={handleSettings}>
                <div className="w-full mb-4">
                  <label htmlFor="full_name">Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    maxLength="30"
                    placeholder="Name"
                    onChange={(e) => {
                      if (errors.full_name) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.full_name}
                  />

                  {errors.full_name && errors.full_name !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.full_name}
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    cols="30"
                    rows="10"
                    onChange={handleOnChange}
                    placeholder="Enter bio"
                    value={profile.bio}
                  ></textarea>
                </div>
                <label htmlFor="skills">Skills</label>
                {/* <CreatableSelect
                  options={allSkills.map((a) => {
                    return {
                      label: `${a.name.toUpperCase()}`,
                      value: `${a.name}`
                    };
                  })}
                  isMulti
                  className="w-full mb-4"
                  classNamePrefix="Skills"
                  clearValue={() => undefined}
                  placeholder="Skills"
                  closeMenuOnSelect={false}
                  name="skills"
                  id="skills"
                  value={profile.skills.map((a) => {
                    return {
                      label: `${a.toUpperCase()}`,
                      value: `${a}`
                    };
                  })}
                  onChange={handleSkills}
                /> */}
                <div className="w-1/2 mb-4 pr-2">
                  <label htmlFor="twitter">Twitter Username</label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Enter username"
                    onChange={(e) => {
                      if (errors.twitter) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.twitter}
                  />
                  {errors.twitter && errors.twitter !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.twitter}
                    </p>
                  )}
                </div>
                <div className="w-1/2 mb-4 pl-2">
                  <label htmlFor="linkedin">Linkedin Username</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="Enter username"
                    onChange={(e) => {
                      if (errors.linkedin) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.linkedin}
                  />
                  {errors.linkedin && errors.linkedin !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.linkedin}
                    </p>
                  )}
                </div>
                <div className="w-1/2 mb-4 pr-2">
                  <label htmlFor="facebook">Facebook Username</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="Enter username"
                    onChange={(e) => {
                      if (errors.facebook) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.facebook}
                  />
                  {errors.facebook && errors.facebook !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.facebook}
                    </p>
                  )}
                </div>
                <div className="w-1/2 mb-4 pl-2">
                  <label htmlFor="github">Github Username</label>
                  <input
                    id="github"
                    name="github"
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => {
                      if (errors.github) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.github}
                  />
                  {errors.github && errors.github !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.github}
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    placeholder="Enter Website URL"
                    id="website"
                    name="website"
                    onChange={(e) => {
                      if (errors.website) {
                        handleErrors(e);
                      }
                      handleOnChange(e);
                    }}
                    onBlur={(e) => {
                      handleErrors(e);
                    }}
                    value={profile.website}
                  />
                  {errors.website && errors.website !== "valid" && (
                    <p className="flex items-center font-semibold tracking-wide text-red-danger text-xs mt-1">
                      {errors.website}
                    </p>
                  )}
                </div>
                <div className="text-right w-full">
                  <button
                    disabled={
                      loading ||
                      (errors.full_name !== "" && errors.full_name !== "valid") ||
                      (errors.twitter !== "" && errors.twitter !== "valid") ||
                      (errors.facebook !== "" && errors.facebook !== "valid") ||
                      (errors.linkedin !== "" && errors.linkedin !== "valid") ||
                      (errors.github !== "" && errors.github !== "valid") ||
                      (errors.website !== "" && errors.website !== "valid")
                      // !profile.fullName
                    }
                    className={`${
                      loading ||
                      (errors.full_name !== "" && errors.full_name !== "valid") ||
                      (errors.twitter !== "" && errors.twitter !== "valid") ||
                      (errors.facebook !== "" && errors.facebook !== "valid") ||
                      (errors.linkedin !== "" && errors.linkedin !== "valid") ||
                      (errors.github !== "" && errors.github !== "valid") ||
                      (errors.website !== "" && errors.website !== "valid")
                        ? "opacity-50 hover:bg-black cursor-not-allowed"
                        : ""
                    } ${1 === 1 && ""}`}
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
