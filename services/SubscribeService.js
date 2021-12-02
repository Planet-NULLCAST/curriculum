const axios = require("axios");
import {baseUrl} from '../config/config'
async function addSubscription(email){
  try{
    const response = await axios.post(`${baseUrl}/api/v1/subscribe`,{
      "email":email
    })
    return response
  }catch(err){
    throw err
  }
}
const SubscribeService = {
  addSubscription
}
module.exports = SubscribeService;