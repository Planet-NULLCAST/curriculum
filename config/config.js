const baseUrl = process.env.BASE_URL || "http://localhost:8080";
const clientUrl = process.env.CLIENT_URL;
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = "/api/post";
const allPostsUrl = "/api/posts";
const subscribeUrl = "api/subscribe";

export {
  baseUrl,
  clientUrl,
  authUrl,
  enrolUrl,
  postUrl,
  allPostsUrl,
  subscribeUrl
};
