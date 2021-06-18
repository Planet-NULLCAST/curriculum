import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
// import Select from "react-select";
import PostService from "../../services/PostService";
import TagService from "../../services/TagService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatableSelect from "react-select/creatable";
import { clientUrl } from "../../config/config";
// import tagOptions from "../../utils/tags";
import UserState from "../../context/user/UserState";
import ModalConfirm from "../../component/popup/ModalConfirm";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const axios = require("axios");
import { getCookieValue } from "../../lib/cookie";

export default function WriteNav({
  saveToDraft,
  submitForReview,
  getSettings,
  post
}) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [openSettings, setOpenSettings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagOptions, setTagOptions] = useState([]);
  const [newTags, setNewTags] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // const userState = useContext(UserState);
  // console.log(userState);

  const [currentPost, setCurrentPost] = useState({
    _id: "",
    bannerImage: "",
    canonicalUrl: "",
    tags: [],
    shortDescription: "",
    metaTitle: "",
    metaDescription: "",
    slug: ""
  });

  useEffect(() => {
    console.log("writenavprop", { post });

    setCurrentPost({ ...post });
    // userState.setTags();
  }, [post]);

  useEffect(() => {
    getSettingsTags();
    getIsAdmin();
  }, []);

  const getIsAdmin = async () => {
    const res = await PostService.isAdmin(
      userCookie.id,
      userCookie.accessToken
    );
    if (res.data) setIsAdmin(true);
  };
  /**
   * gets tags from db and sets the tags
   * options in label and value format
   * @author akhilalekha
   */
  async function getSettingsTags() {
    const res = await TagService.getTags();
    // console.log("get tags response", res);
    if (res && res.length) {
      const resTagOptions = res.map((tag) => {
        return {
          label: `${tag.name.toUpperCase()}`,
          value: `${tag.name}`
        };
      });
      // setTagOptions;
      // console.log({ resTagOptions });
      setTagOptions(resTagOptions);
    }
  }

  /**
   * posts tags to db and sets state for user tags
   * @param e react select handle change event
   * @author akhilalekha
   */
  const handleTags = async (e) => {
    console.log("handle tags", e);
    const newTag = e
      .filter((tag) => {
        if (tag.__isNew__ === true) {
          // console.log(tag);
          return tag;
        }
      })
      .map((fTag) => fTag.value);
    console.log(newTag);

    const res = await TagService.postTags(userCookie, newTag);
    console.log({ res });

    setCurrentPost((prevValue) => {
      return {
        ...prevValue,
        tags: e.map((i) => i.value)
      };
    });
  };

  /**
   * gets form data and passes to parent getsettings function
   * @param e form submit event
   * @author akhilalekha
   */
  async function formSubmit(e) {
    //get form settings data - imageUpload canonicalUrl tags shortDescription metaTitle metaDescription
    e.preventDefault();
    // console.log(e.target);

    const postUrl = e.target.slug.value || "";
    // console.log({ postUrl });
    // console.log(`${baseUrl}/${postUrl}`);
    let tags = Array.from(e.target.tags) || "";
    // console.log("tags length: ", tags.length);
    if (tags.length > 0) {
      tags = tags.map((tag) => tag.value);
      // console.log("multiple tags", tags);
    } else {
      tags = e.target.tags.value;
      // console.log("single tag", tags);
    }

    const shortDes = e.target.shortDescription.value || "";
    const metaTitle = e.target.metaTitle.value || "";
    const metaDes = e.target.metaDescription.value || "";
    // console.log(imageName, postUrl, tags, shortDescription, metaTitle, metaDescription);
    const settingsData = {
      tags: tags,
      url: `p/${currentPost._id}`,
      canonicalUrl: postUrl ? `${clientUrl}/${postUrl}` : "",
      bannerImage: currentPost.bannerImage ? currentPost.bannerImage : null,
      shortDescription: shortDes,
      metaTitle: metaTitle,
      metaDescription: metaDes,
      slug: postUrl
    };

    // send prop
    // console.log(
    //   Object.values(settingsData).some((k) => k !== "" || k !== null)
    // );
    getSettings(settingsData);
  }

  /**
   * gets form data and passes to parent getsettings function
   * @param e handle change event for other fields
   * except tags and image
   * @author akhilalekha
   */

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);

    setCurrentPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  /**
   * gets img data and uploads to s3 bucket
   * @param e handle change event for file upload field
   * @author akhilalekha
   */
  const handleImageUpload = async (e) => {
    // console.log(e.target.files[0]);
    // const imageUrl = URL.createObjectURL(e.target.files[0]);
    // console.log(imageUrl);
    // setImageSrc(imageUrl);

    console.log(e.target.files[0]);
    const imageFile = e.target.files[0] || "";
    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      id: currentPost._id,
      category: "posts",
      ContentType: imageFile.type
    };
    setLoading(true);
    const s3ImageUrl = await PostService.uploadImage(imageFile, imageData);
    console.log(s3ImageUrl);

    setCurrentPost((prevValue) => {
      return {
        ...prevValue,
        bannerImage: s3ImageUrl
      };
    });
    setLoading(false);
  };

  const imgRef = useRef(null);
  /**
   * resets banner image state when user clicks on delete
   * @param e handle change event for img delete button
   * @author akhilalekha
   */
  const handleImageDelete = async (e) => {
    // console.log(imgRef);
    // imgRef.current.value = null;
    // setImageSrc("");
    setCurrentPost((prevValue) => {
      return {
        ...prevValue,
        bannerImage: ""
      };
    });
  };

  /**
   * deletes post by id
   * @author akhilalekha
   */
  async function deletePost() {
    // console.log({ currentPost });
    const { msg, data } = await PostService.deletePostById(
      userCookie,
      currentPost._id
    );
    // console.log(msg);
    notify("Post deleted successfully");
    router.push("/posts");
  }

  const notify = (msg) =>
    toast(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  return (
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full px-5">
        <div className="cursor-pointer h-16 flex items-center">
          <Link href={`/posts`}>
            <div className="flex items-center">
              <Image
                src="/images/svgs/left-arrow.svg"
                alt="edit"
                width={5}
                height={15}
                layout="fixed"
                margin={0}
              />
              <span className="ml-2 text-gray-900">Posts</span>
            </div>
          </Link>
          <span className="text-gray-500 ml-1">
            {router.query.post_id ? "/ Edits" : "/ Create"}
          </span>
        </div>
        <div className="items-center py-3 md:flex">
          {!isAdmin && (
            <div
              onClick={submitForReview}
              className="bg-green-710 hover:bg-white border border-green-710 text-white hover-green-pink-710 flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
            >
              <p>Submit For Review</p>
            </div>
          )}

          <div
            onClick={saveToDraft}
            className="bg-black hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
          >
            <p>Save</p>
          </div>
          {/* {post && <div className="flex flex-row"></div>} */}
          <div
            className="bg-black hover:bg-white border border-black text-white hover:text-black text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
            onClick={() => setOpenSettings(true)}
          >
            <p>Settings</p>
          </div>
          <div className="bg-blue-500 border border-blue-500 text-white hover:text-blue-500 hover:bg-white text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700">
            {/* <Link href={`/p/${currentPost._id}`}></Link> */}
            <a href={`/p/${currentPost._id}`} target="_blank">
              Preview
            </a>
          </div>
        </div>
      </div>
      {openSettings && (
        <Slide right duration={500}>
          <div className="fixed right-0 bottom-0 w-72 z-50 pr-0 pb-0">
            <div className="w-full h-screen bg-white relative">
              <form
                className="w-full border flex flex-col justify-between"
                onSubmit={(e) => formSubmit(e)}
              >
                <div
                  className="absolute right-0 top-0 w-6 h-6 z-10 flex justify-center items-center mr-2 mt-2 cursor-pointer hover:opacity-50"
                  onClick={() => setOpenSettings(false)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.69101 6.51168L12.753 1.44959C13.0824 1.12032 13.0824 0.587938 12.753 0.25867C12.4237 -0.0705983 11.8913 -0.0705983 11.562 0.25867L6.49993 5.32077L1.43799 0.25867C1.10856 -0.0705983 0.576336 -0.0705983 0.247067 0.25867C-0.0823557 0.587938 -0.0823557 1.12032 0.247067 1.44959L5.30901 6.51168L0.247067 11.5738C-0.0823557 11.903 -0.0823557 12.4354 0.247067 12.7647C0.411162 12.9289 0.626921 13.0115 0.842527 13.0115C1.05813 13.0115 1.27374 12.9289 1.43799 12.7647L6.49993 7.7026L11.562 12.7647C11.7263 12.9289 11.9419 13.0115 12.1575 13.0115C12.3731 13.0115 12.5887 12.9289 12.753 12.7647C13.0824 12.4354 13.0824 11.903 12.753 11.5738L7.69101 6.51168Z"
                      fill="#717171"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-16 border-b flex justify-center items-center absolute top-0 w-full">
                    <span className="font-bold text-lg">Settings</span>
                  </div>
                  <div className="flex flex-col p-5 mt-16 mb-24 h-calcSettings">
                    <div
                      className={`h-24 min-h-24 border border-dashed border-gray-400 rounded overflow-hidden relative ${
                        !currentPost.bannerImage && "cursor-pointer"
                      }`}
                    >
                      {currentPost.bannerImage ? (
                        <div className="w-full h-full flex justify-center items-center overflow-hidden relative hoverPreview">
                          {loading ? (
                            <div>Loading...</div>
                          ) : (
                            <img
                              src={currentPost.bannerImage}
                              alt="banner"
                              width="100%"
                            />
                          )}

                          <div className="w-full h-full absolute z-10 top-0 left-0 justify-center items-center bg-black opacity-60 bgshadow"></div>
                          <div className="w-full h-full absolute z-20 top-0 left-0 justify-center items-center bgshadow">
                            <ModalConfirm
                              trigger={
                                <div
                                  className="w-10 h-10 flex items-center justify-center bg-red-500 cursor-pointer rounded"
                                  // onClick={handleImageDelete}
                                >
                                  <Image
                                    src="/images/svgs/delwhite.svg"
                                    alt="edit"
                                    width={22}
                                    height={22}
                                    layout="fixed"
                                    margin={0}
                                  />
                                </div>
                              }
                              handleSubmit={handleImageDelete}
                              purpose={"delete"}
                              buttonColor={"red"}
                              heading={"Are you sure"}
                              text="Are you sure you want to delete this image?"
                              // secondaryText="This cannot be undone"
                            />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <input
                            type="file"
                            className="cursor-pointer block opacity-0 w-full h-full z-50 absolute"
                            name="imageUpload"
                            onChange={handleImageUpload}
                            ref={imgRef}
                            // value={imageSrc}
                          />

                          <div className="absolute cursor-pointer top-0 w-full h-full bg-gray-100 flex justify-center items-center z-40">
                            {loading ? (
                              <div>
                                <span className="ml-2 text-sm">
                                  Uploading...
                                </span>
                              </div>
                            ) : (
                              <div>
                                <Image
                                  src="/images/image-up.svg"
                                  alt="edit"
                                  width={15}
                                  height={15}
                                  layout="fixed"
                                  margin={0}
                                />
                                <span className="ml-2 text-sm">
                                  Upload Image
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* 
                  <div
                    className="cursor-pointer border border-black"
                    onClick={handleImageDelete}
                  >
                    Delete Image
                  </div> */}
                    <div className="w-full mt-4">
                      <div className="flex w-full border rounded">
                        <div className="w-4/12 border rounded-l border-black text-white bg-black h-10 flex justify-center items-center text-xs font-semibold">
                          nullcast.io/
                        </div>
                        <div className="floating_form w-8/12">
                          <div className="floating-label">
                            <input
                              type="text"
                              placeholder=" "
                              className="floating-input urlInput w-full m-0 h-10 outline-none focus:outline-none focus:bg-white focus:text-black focus:border-black px-2 text-sm bg-gray-100 border rounded-r"
                              name="slug"
                              value={currentPost.slug}
                              onChange={handleChange}
                            />
                            <label className="flex items-center top-0 h-full left-0 ml-3 text-sm">
                              <span>Enter post URL</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* one here */}
                    </div>
                    <div className="w-full mt-4 relative">
                      <CreatableSelect
                        options={tagOptions}
                        isMulti
                        className="basic-multi-select w-full m-0 outline-none focus:outline-none focus:bg-white focus:text-black focus:border-black text-sm bg-gray-100 border rounded px-0 cursor-pointer"
                        classNamePrefix="Tags"
                        clearValue={() => undefined}
                        placeholder="Tags"
                        closeMenuOnSelect={false}
                        name="tags"
                        value={currentPost?.tags?.map((tag) => {
                          return {
                            label: `${tag.toUpperCase()}`,
                            value: `${tag}`
                          };
                        })}
                        onChange={(e) => handleTags(e)}
                      />
                      {currentPost?.tags?.length > 0 && (
                        <Fade duration={1000}>
                          <label className="absolute -mt-3 selectFloat flex items-center top-0 h-6 left-0 ml-3 text-sm longPlaceholder">
                            <span className="">Tags</span>
                          </label>
                        </Fade>
                      )}
                    </div>
                    <div className="w-full mt-4 relative h-20 mb-0">
                      <div className="floating_form w-full h-full">
                        <div className="floating-label h-full">
                          <textarea
                            maxLength="160"
                            className="floating-input w-full m-0 outline-none focus:outline-none focus:bg-white focus:text-black focus:border-black p-2 text-sm bg-gray-100 border rounded h-full"
                            placeholder=" "
                            name="shortDescription"
                            value={currentPost.shortDescription}
                            onChange={handleChange}
                          />
                          <label className="flex items-center top-0 h-10 left-0 ml-3 text-sm longPlaceholder">
                            <span>Excerpt - short description about post</span>
                          </label>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0 mb-1 mr-2 flex justify-center items-center">
                        <span className="text-gray-300 text-xs">160</span>
                      </div>
                    </div>
                    <div className="w-full mt-4">
                      <div className="floating_form w-full">
                        <div className="floating-label">
                          <input
                            type="text"
                            placeholder=" "
                            className="floating-input w-full m-0 h-10 outline-none focus:outline-none focus:bg-white focus:text-black focus:border-black px-2 text-sm bg-gray-100 border rounded"
                            name="metaTitle"
                            value={currentPost.metaTitle}
                            onChange={handleChange}
                          />
                          <label className="flex items-center top-0 h-full left-0 ml-3 text-sm">
                            <span>Meta Title</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-4 relative h-20 mb-0">
                      <div className="floating_form w-full h-full">
                        <div className="floating-label h-full">
                          <textarea
                            maxLength="160"
                            className="floating-input w-full m-0 outline-none focus:outline-none focus:bg-white focus:text-black focus:border-black p-2 text-sm bg-gray-100 border rounded h-full"
                            placeholder=" "
                            name="metaDescription"
                            value={currentPost.metaDescription}
                            onChange={handleChange}
                          />
                          <label className="flex items-center top-0 h-10 left-0 ml-3 text-sm">
                            <span>Description</span>
                          </label>
                        </div>
                      </div>
                      <div className="absolute right-0 bottom-0 mb-1 mr-2 flex justify-center items-center">
                        <span className="text-gray-300 text-xs">160</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 bg-white flex flex-col justify-center items-center h-24 absolute w-full border-l bottom-0 right-0">
                  <div className="w-full flex mb-3">
                    <div className="w-1/2 pr-1">
                      <button
                        className={`w-full border border-black text-white hover:text-black bg-black hover:bg-white flex justify-center items-center h-10 duration-700 rounded text-sm outline-none ${
                          loading ? "disabled:opacity-50" : ""
                        }`}
                        type="submit"
                        disabled={loading}
                      >
                        Save
                      </button>
                    </div>
                    <div className="w-1/2 pl-1">
                      <button
                        className="w-full border border-black text-black hover:text-white bg-white hover:bg-black flex justify-center items-center h-10 duration-700 rounded text-sm outline-none"
                        onClick={() => setOpenSettings(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <ModalConfirm
                      trigger={
                        <div className="text-sm text-red-500 hover:text-red-700 outline-none cursor-pointer">
                          Delete Post
                        </div>
                      }
                      handleSubmit={deletePost}
                      purpose={"delete"}
                      buttonColor={"red"}
                      heading={"Are you sure"}
                      text="Are you sure you want to delete this post?"
                      secondaryText="This cannot be undone"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Slide>
      )}
      <ToastContainer />
    </div>
  );
}
