const axios = require("axios");
import { baseUrl } from "../config/config";
import Cookies from "universal-cookie";

async function enrollCourse(courseName) {
  let cookies = new Cookies();
  let userCookie = cookies.get("userNullcast");
  const {
    data: {
      data: { id }
    }
  } = await axios.get(`${baseUrl}/api/v1/course/${courseName}`);
  console.log(id);
  if (id) {
    try {
      const resp = await axios.post(
        `${baseUrl}/api/v1/user-course`,
        {
          course_id: Number(id)
        },
        {
          headers: {
            "x-access-token": `${userCookie.accesToken}`
          }
        }
      );
      if (resp) {
        console.log(resp);
        return resp.data;
      }
    } catch (error) {
      throw error;
    }
  }
}

async function chapterFinished(courseName, chapterName) {
  let cookies = new Cookies();
  let userCookie = cookies.get("userNullcast");
  const {
    data: {
      data: { id }
    }
  } = await axios.get(`${baseUrl}/api/v1/course/${courseName}`);
  const resp = await axios.get(
    `${baseUrl}/api/v1/chapter/${
      chapterName !== "naming-standard-bem"
        ? chapterName.split("-").join(" ").toLowerCase()
        : "naming standard-bem"
    }`
  );
  console.log(resp);
  if (userCookie && id && resp) {
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/v1/user-chapter`,
        {
          user_id: userCookie.id,
          course_id: Number(id),
          chapter_id: Number(resp.data.data.id)
        },
        {
          headers: {
            "x-access-token": `${userCookie.accesToken}`
          }
        }
      );
      return data;
    } catch (err) {
      throw err;
    }
  }
}

const CurriculamService = {
  enrollCourse,
  chapterFinished
};

module.exports = CurriculamService;
