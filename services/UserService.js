const axios = require("axios");
import { baseUrl, userUrl } from "../config/config";

async function getLatestUsers(reqParams) {
    try {
        const { fields, order, fieldName, limit, skip } = reqParams;
        const response = await axios.get(`${baseUrl}/${userUrl}/getUsers`, {
            params: {
                order,
                fieldName,
                limit,
                skip,
                fields
            }
        });
        return response;
    } catch (err) {
        console.log(err);
        return;
    }
}

const UserService = {
    getLatestUsers
};

module.exports = UserService;
