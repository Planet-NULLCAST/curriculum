const baseUrl = process.env.BASE_URL;
const clientUrl = process.env.CLIENT_URL;
const editorUrl = process.env.EDITOR_URL;
const s3Url = process.env.BUCKET_URL;
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = "api/post";
const allPostsUrl = "api/posts";
const changeStatusUrl = "api/user/post";
const subscribeUrl = "api/subscribe";
const userUrl = "api/user";
const tagUrl = "api/tags";

export {
  baseUrl,
  clientUrl,
  s3Url,
  authUrl,
  enrolUrl,
  postUrl,
  allPostsUrl,
  changeStatusUrl,
  subscribeUrl,
  editorUrl,
  userUrl,
  tagUrl
};
