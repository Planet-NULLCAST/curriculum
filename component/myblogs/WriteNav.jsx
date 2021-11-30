import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCropper from "../../component/popup/ImageCropper";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import PostService from "../../services/PostService";
import TagService from "../../services/TagService";
import CreatableSelect from "react-select/creatable";
import ModalConfirm from "../../component/popup/ModalConfirm";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import InfoPopup from "../modal/InfoPopup";
import Modal from "../modal/Modal";
import notify from "../../lib/notify";
import SharedService from "../../services/SharedService";

export default function WriteNav({
  saveToDraft,
  submitForReview,
  getSettings,
  post,
  previousUrl
}) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [openSettings, setOpenSettings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagOptions, setTagOptions] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [image, setImage] = useState("");
  const newPostTags = useRef(null);
  const router = useRouter();

  const [currentPost, setCurrentPost] = useState({
    id: 0,
    banner_image: "",
    tags: [],
    tagsId: [],
    shortDescription: "",
    metaTitle: "",
    metaDescription: "",
    slug: ""
  });
  useEffect(() => {
    setCurrentPost(prevValue => ({ ...prevValue, ...post }));
    // userState.setTags();
  }, [post]);

  useEffect(() => {
    getSettingsTags();
    if (userCookie.roles === "admin") {
      getIsAdmin();
    }
  }, []);

  const getIsAdmin = async () => {
    try {
      const res = await PostService.isAdmin(
        userCookie.id,
        userCookie.accessToken
      );
      if (res.data) setIsAdmin(true);
    } catch (err) {
      return err;
    }
  };
  /**
   * gets tags from db and sets the tags
   * options in label and value format
   * @author jasir
   */
  async function getSettingsTags() {
    try {
      const res = await TagService.getTags();
      // console.log("get tags response", res);
      if (res && res.length) {
        const resTagOptions = res.map((tag) => {
          return {
            label: `${tag.name.toUpperCase()}`,
            value: `${tag.name}`,
            id: tag.id,
            name: `${tag.name}`,
          };
        });
        // setTagOptions;
        // console.log({ resTagOptions });
        setTagOptions(resTagOptions);
      }
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  }
  /**
   * posts tags to db and sets state for user tags
   * @param e react select handle change event
   * @author jasir
   */
  const handleTags = async (e) => {
    // console.log("handle tags", e);

    const newTag = e
      .filter((tag) => {
        if (tag.__isNew__ === true) {
          // console.log(tag);
          return tag;
        }
      })
      .map((fTag) => fTag.value);
    try {
      if (newTag.length > 0) {
        const res = await TagService.postTags(userCookie, newTag);
        const arr = [{ tag_id: res.id, post_id: currentPost.id }];
        const response = await TagService.postSaveTags(userCookie, arr);
        e.splice(-1, 1);
        setCurrentPost((prevValue) => {
          return {
            ...prevValue,
            tags: [...e, { value: res.name, id: res.id, name: res.name, label: res.name }],
          };
        });
      }
      else {
        // gets new added tag and closed tag using filter
        const addTag = e.filter(({ id: id1 }) => !currentPost.tags.some(({ id: id2 }) => id2 === id1));
        const removeTag = currentPost.tags.filter(({ id: id1 }) => !e.some(({ id: id2 }) => id2 === id1));
        if (addTag.length) {
          const arr = addTag.map(({ id }) => { return { tag_id: id, post_id: currentPost.id } })
          const res = await TagService.postSaveTags(userCookie, arr);
        }
        if (removeTag.length) {
          const res = await TagService.deletePostTag(userCookie, removeTag[0].id, currentPost.id);
        }
        setCurrentPost((prevValue) => {
          return {
            ...prevValue,
            tags: [...e],
          };
        });
      }

    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  };

  /**
   * gets form data and passes to parent getsettings function
   * @param e form submit event
   * @author jasir
   */
  const formSubmit = async (e) => {
    //get form settings data - imageUpload canonicalUrl tags shortDescription metaTitle metaDescription
    e.preventDefault();
    const postUrl = e.target.slug.value || "";
    const shortDes = e.target.shortDescription.value || "";
    const metaTitle = e.target.metaTitle.value || "";
    const metaDes = e.target.metaDescription.value || "";
    const settingsData = {
      banner_image: currentPost.banner_image ? currentPost.banner_image : null,
      og_description: shortDes,
      meta_title: metaTitle,
      meta_description: metaDes,
      slug: postUrl,
      mobiledoc: currentPost.mobiledoc,
    };
    if (settingsData.slug === "") {
      delete settingsData.slug;
      getSettings(settingsData);
    }
    else {
      getSettings(settingsData);
    }
  };

  /**
   * gets form data and passes to parent getsettings function
   * @param e handle change event for other fields
   * except tags and image
   * @author jasir
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
   * @author jasir
   */
  const handleImageUpload = async (image) => {
    const imageFile = image;
    const imageData = {
      stage: "dev",
      fileName: imageFile.name,
      id: currentPost.id,
      category: "posts",
      ContentType: imageFile.type
    };
    setLoading(true);
    try {
      const s3ImageUrl = await SharedService.uploadImage(imageFile, imageData);

      setCurrentPost((prevValue) => {
        return {
          ...prevValue,
          bannerImage: s3ImageUrl
        };
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
    setLoading(false);
  };

  const imgRef = useRef(null);
  /**
   * resets banner image state when user clicks on delete
   * @param e handle change event for img delete button
   * @author jasir
   */
  const handleImageDelete = async (e) => {
    setCurrentPost((prevValue) => {
      return {
        ...prevValue,
        bannerImage: "",
        imageUrl: "",
        image: "",
      };
    });
  };

  /**
   * deletes post by id
   * @author jasir
   */
  async function deletePost() {
    try {
      const { message } = await PostService.deletePostById(
        userCookie,
        currentPost.id
      );
      notify(message);
      router.push({
        pathname: "/posts",
        query: {
          page: 1,
          tag: "",
          status: ""
        }
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  }

  const handleBackOption = () => {
    router.push(previousUrl);
  };

  const handlePublish = () => {
    const res = submitForReview();
    res.then((message) => {
      handlePopup();
    });
  };
  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

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
    <div className="bg-white flex flex-row items-center rounded shadow-sm h-sub-nav">
      <div className="flex flex-row justify-between items-center font-semibold h-full w-full px-5">
        <div className="cursor-pointer h-16 flex items-center">
          <div onClick={handleBackOption}>
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
          </div>
          <span className="text-gray-500 ml-1">{"/ Edit"}</span>
        </div>
        <div className="items-center py-3 md:flex hidden">
          <ModalConfirm
            trigger={
              <div

                className="bg-green-710 hover:bg-white border border-green-710 text-white hover-green-pink-710 flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
              >
                <p>Publish</p>
              </div>
            }
            handleSubmit={handlePublish}
            purpose={"publish"}
            buttonColor={"green"}
            heading={"Are you sure"}
            text=" you want to publish this post?"
            secondaryText="This cannot be undone"
          />

          <div
            onClick={saveToDraft}
            className="bg-black hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
          >
            <p>Save to draft</p>
          </div>
          <div
            className="bg-black hover:bg-white border border-black text-white hover:text-black text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
            onClick={() => setOpenSettings(true)}
          >
            <p>Settings</p>
          </div>
          <Link href={`/p/${router.query.post_id}`}>
            <a target="_blank">
              <div className="bg-blue-500 border border-blue-500 text-white hover:text-blue-500 hover:bg-white text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700">
                Preview
              </div>
            </a>
          </Link>
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
                      className={`h-24 min-h-24 border border-dashed border-gray-400 rounded overflow-hidden relative ${!currentPost.bannerImage && "cursor-pointer"
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
                          <ImageCropper
                            image={image}
                            aspectRatio={2}
                            trigger={
                              <input
                                type="file"
                                className="cursor-pointer block opacity-0 w-full h-full z-50 absolute"
                                name="imageUpload"
                                onInput={handleImage}
                                ref={imgRef}
                              // value={imageSrc}
                              />
                            }
                            handleSubmit={handleImageUpload}
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
                            label: `${tag.name.toUpperCase()}`,
                            value: `${tag.name}`,
                            id: tag.id,
                            name: `${tag.name}`,
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
                            value={currentPost.meta_title}
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
                        className={`w-full border border-black text-white hover:text-black bg-black hover:bg-white flex justify-center items-center h-10 duration-700 rounded text-sm outline-none ${loading ? "disabled:opacity-50" : ""
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
      {openPopup && (
        <Modal>
          <InfoPopup togglePopup={handlePopup} />
        </Modal>
      )}
    </div>
  );
}
