const baseUrl = process.env.BASE_URL;
const clientUrl = process.env.CLIENT_URL;
const editorUrl = process.env.EDITOR_URL;
const s3Url = process.env.BUCKET_URL;
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = "api/post";
const allPostsUrl = "api/posts";
const subscribeUrl = "api/subscribe";

export {
  baseUrl,
  clientUrl,
  s3Url,
  authUrl,
  enrolUrl,
  postUrl,
  allPostsUrl,
  subscribeUrl,
  editorUrl
};
