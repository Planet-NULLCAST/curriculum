const axios = require("axios");
import {s3Url} from '../config/config'

async function uploadImage(imageFile, imageData) {
  // get url from s3url and send imagefile to that url
  // console.log(imageData);
  // console.log(s3Url);
  try {
    const credLessAxios = axios.create({ withCredentials: false });
    const response = await credLessAxios.post(
      `${s3Url}/dev/s3-presigned-url`,
      imageData
    );
    // console.log(response.data);
    //put with imageFile
    const uploadUrl = response.data;
    const uploadResponse = await credLessAxios.put(uploadUrl, imageFile);
    // console.log({ uploadResponse });
    const imageUrl = uploadResponse.config.url.split("?")[0];
    // console.log({ imageUrl });
    return imageUrl;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

const SharedService = {
  uploadImage
}

module.exports = SharedService