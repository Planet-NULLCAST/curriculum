import React, { useRef, useEffect, useState } from "react";
import moment from "moment";
import MyBlogsstyles from "../../styles/MyBlogs.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const data = [
    {
      name: "Active Tab Animation using HTML, CSS and JS",
      date: "2021-05-04T03:59:48.157Z",
      status: "pending",
      id: "blog1"
    },
    {
      name:
        "Social Meta Tags & Validators (Facebook debugger, Twitter card validator, LinkedIn post inspector)",
      date: "2021-05-04T03:59:48.157Z",
      status: "rejected",
      id: "blog2"
    },
    {
      name:
        "Autocomplete Google places in an input field on Angular 9 using Google Maps.",
      date: "2021-05-04T03:59:48.157Z",
      status: "approved",
      id: "blog3"
    }
  ];
  return (
    <div className="w-full mt-4 bg-white py-5 rounded  shadow-sm">
      {data?.map((item, index) => (
        <div
          className={`flex items-center justify-between p-4 ${MyBlogsstyles.oddBg}`}
        >
          <div className="">
            <div
              className={`text-15 font-semibold mb-1 ${MyBlogsstyles.color_blue_910}`}
            >
              {item.name}
            </div>
            <div className={`text-xs text-gray-400`}>
              {moment(item?.date).format("LL")}
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={`flex items-center w-28  flex items-center justify-center rounded-full h-8 mr-3 ${
                item.status === "approved" && MyBlogsstyles.successBg
              } ${item.status === "pending" && MyBlogsstyles.warningBg} ${
                item.status === "rejected" && MyBlogsstyles.dangerBg
              }`}
            >
              <div
                className={`w-2 h-2 mr-2 rounded-full  ${
                  item.status === "approved" && MyBlogsstyles.successDot
                } ${item.status === "pending" && MyBlogsstyles.warningDot} ${
                  item.status === "rejected" && MyBlogsstyles.dangerDot
                }`}
              ></div>
              <span
                className={`capitalize  ${
                  item.status === "approved" && MyBlogsstyles.successText
                } ${item.status === "pending" && MyBlogsstyles.warningText} ${
                  item.status === "rejected" && MyBlogsstyles.dangerText
                }`}
              >
                {item.status}
              </span>
            </div>
            <Link href={`/myblogs/write?blog_id=${item.id}`}>
              <div
                className={`flex items-center px-4 flex items-center justify-center rounded-full h-8 cursor-pointer hover:opacity-50 duration-700 ${MyBlogsstyles.linkBg}`}
              >
                <div className="mr-1 mt-1 rounded-full">
                  <Image
                    src="/images/edit.svg"
                    alt="edit"
                    width={15}
                    height={15}
                    layout="fixed"
                    margin={0}
                  />
                </div>
                <span className={`capitalize  ${MyBlogsstyles.linkText}`}>
                  Edit
                </span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
