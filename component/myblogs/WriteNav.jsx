import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import {
//   baseUrl,
//   clientUrl,
//   authUrl,
//   enrolUrl,
//   postUrl,
//   allPostsUrl
// } from "../../config/config";
const axios = require("axios");
import Select from "react-select";

export default function WriteNav({
  saveToDraft,
  submitForReview,
  getSettings,
  post
}) {
  // const  = props;
  const [openSettings, setOpenSettings] = useState(false);
  // const [tagData, setTagData] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [currentPost, setCurrentPost] = useState({
    bannerImage: "",
    canonicalUrl: "",
    tags: [],
    shortDescription: "",
    metaTitle: "",
    metaDescription: ""
  });
  const router = useRouter();

  useEffect(() => {
    console.log(post);
    setCurrentPost({ ...post });
  }, [post]);

  //get tag data from db with same structure - and value should be the id
  const options = [
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JS", value: "js" }
  ];

  function handleSelectTag(e) {
    // console.log(e);
    setTagData(e);
  }

  function handleImageUpload(e) {
    console.log(e.target.files[0]);
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    // console.log(imageUrl);
    setImageSrc(imageUrl);
  }

  const imgRef = useRef(null);
  function handleImageDelete(e) {
    // console.log(imgRef);
    imgRef.current.value = null;
    setImageSrc("");
  }

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
        <div className="flex items-center py-3">
          <div
            onClick={submitForReview}
            className="bg-green-710 hover:bg-white border border-green-710 text-white hover-green-pink-710 flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
          >
            <p>Submit For Review</p>
          </div>
          <div
            onClick={saveToDraft}
            className="bg-black hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
          >
            <p>Save</p>
          </div>
          <div
            className="bg-black hover:bg-white border border-black text-white hover:text-black flex items-center text-sm font-semibold px-4 py-2 mr-3 rounded-sm cursor-pointer duration-700"
            onClick={() => setOpenSettings(true)}
          >
            <p>Settings</p>
          </div>
        </div>
      </div>
      {openSettings && (
        <div className="fixed right-0 bottom-0 w-72 z-50">
          <div className="w-full h-screen">
            <form
              className="w-full h-full bg-white relative border flex flex-col justify-between"
              onSubmit={(e) => getSettings(e)}
            >
              <div
                className="absolute right-0 top-0 w-6 h-6 flex justify-center items-center mr-2 mt-2 cursor-pointer hover:opacity-50"
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
                <div className="h-16 border-b flex justify-center items-center">
                  <span className="font-bold text-lg">Settings</span>
                </div>
                <div className="flex flex-col p-5">
                  <div
                    className={`h-24 min-h-24 border border-dashed border-gray-400 rounded overflow-hidden relative ${
                      !imageSrc && "cursor-pointer"
                    }`}
                  >
                    {imageSrc ? (
                      <div className="w-full h-full flex justify-center items-center overflow-hidden relative hoverPreview">
                        <img src={imageSrc} alt="banner" width="100%" />
                        <div className="w-full h-full absolute z-10 top-0 left-0 justify-center items-center bg-black opacity-60 bgshadow"></div>
                        <div className="w-full h-full absolute z-20 top-0 left-0 justify-center items-center bgshadow">
                          <div
                            className="w-10 h-10 flex items-center justify-center bg-red-500 cursor-pointer rounded"
                            onClick={handleImageDelete}
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
                        </div>
                      </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          className="cursor-pointer relative block opacity-0 w-full h-full z-50"
                          name="imageUpload"
                          onChange={handleImageUpload}
                          ref={imgRef}
                          // value={imgFile}
                        />

                        <div className="absolute cursor-pointer top-0 w-full h-full bg-gray-100 flex justify-center items-center">
                          <div>
                            <Image
                              src="/images/image-up.svg"
                              alt="edit"
                              width={15}
                              height={15}
                              layout="fixed"
                              margin={0}
                            />
                            <span className="ml-2 text-sm">Upload Image</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* 
                  <div
                    className="cursor-pointer border border-black"
                    onClick={handleImageDelete}
                  >
                    Delete Image
                  </div> */}
                  <div className="w-full mt-3">
                    <div className="flex w-full border rounded overflow-hidden">
                      <div className="w-4/12 border border-black text-white bg-black h-10 flex justify-center items-center text-xs font-semibold">
                        nullcast.io/
                      </div>
                      <input
                        type="text"
                        className="w-8/12 m-0 outline-none focus:outline-none px-2 text-sm bg-gray-100"
                        placeholder="Enter post URL"
                        name="url"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <Select
                      options={options}
                      isMulti
                      className="basic-multi-select w-full m-0 outline-none focus:outline-none text-sm bg-gray-100 border rounded px-0 cursor-pointer"
                      classNamePrefix="Tags"
                      clearValue={() => undefined}
                      placeholder="Tags"
                      closeMenuOnSelect={false}
                      name="tags"
                      onChange={handleSelectTag}
                      // defaultInputValue={}
                    />
                  </div>
                  <div className="w-full mt-3 relative h-20 mb-0">
                    <textarea
                      maxLength="160"
                      className="w-full m-0 outline-none focus:outline-none p-2 text-sm bg-gray-100 border rounded h-full"
                      placeholder="Excerpt - short description about post"
                      name="shortDes"
                    />
                    <div className="absolute right-0 bottom-0 mb-1 mr-2 flex justify-center items-center">
                      <span className="text-gray-300 text-xs">160</span>
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <input
                      type="text"
                      className="w-full m-0 h-10 outline-none focus:outline-none px-2 text-sm bg-gray-100 border rounded"
                      placeholder="Meta Title"
                      name="metaTitle"
                    />
                  </div>
                  <div className="w-full mt-3 relative h-20 mb-0">
                    <textarea
                      maxLength="160"
                      className="w-full m-0 outline-none focus:outline-none p-2 text-sm bg-gray-100 border rounded h-full"
                      placeholder="Description"
                      name="metaDes"
                    />
                    <div className="absolute right-0 bottom-0 mb-1 mr-2 flex justify-center items-center">
                      <span className="text-gray-300 text-xs">160</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-5 bg-white pt-3">
                <div className="w-full flex mb-3">
                  <div className="w-1/2 pr-1">
                    <button
                      className="w-full border border-black text-white hover:text-black bg-black hover:bg-white flex justify-center items-center h-10 duration-700 rounded text-sm outline-none"
                      // onClick={() => setOpenSettings(false)}
                      type="submit"
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
                <div className="w-full flex justify-center mb-3">
                  <button className="text-sm text-red-500 outline-none">
                    Delete Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
