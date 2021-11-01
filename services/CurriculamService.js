const axios = require("axios");
import { baseUrl } from "../config/config";

async function enrollCourse(courseName, chapterName) {
  let cookies = new Cookies();
  let usercookie = cookies.get("userNullcast");

  if (usercookie) {
    try {
      const { data } = await axios.post(
        `${baseUrl}/api/enrol/${courseName}/${chapterName}`,
        null,
        {
          headers: {
            "x-access-token": `${usercookie.accesToken}`
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
  enrollCourse
};

module.exports = CurriculamService;
