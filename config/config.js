const baseUrl = process.env.BASE_URL;
const clientUrl = process.env.CLIENT_URL;
const editorUrl = process.env.EDITOR_URL;
const s3Url = process.env.BUCKET_URL;
const serverUrl = process.env.SERVER_URL;
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = "api/post";
const allPostsUrl = "api/posts";
const changeStatusUrl = "api/user/post";
const subscribeUrl = "api/subscribe";
const userUrl = "api/user";
const usersUrl = "api/users";
const adminUrl = "api/admin";
const tagUrl = "api/tags";
const skillUrl = "api/skills";
const searchUrl = "api/search";
const forgotPasswordUrl = "api/auth/reset-password";
const resetPasswordUrl = "api/auth/reset-password-confirmation";
const changePasswordUrl = "api/auth/change-password";
const publishedPostsUrl = "api/posts/published";
const publishedPostsCountUrl = "api/posts/published/count";

const configVars = {
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
  adminUrl,
  tagUrl,
  serverUrl,
  searchUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  usersUrl,
  changePasswordUrl,
  skillUrl,
  publishedPostsUrl,
  publishedPostsCountUrl
};

module.exports = configVars;
