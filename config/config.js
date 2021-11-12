const baseUrl = process.env.BASE_URL;
const clientUrl = process.env.CLIENT_URL;
const editorUrl = process.env.EDITOR_URL;
const s3Url = process.env.BUCKET_URL;
const serverUrl = process.env.SERVER_URL;
const apiVerUrl = "api/v1";
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = `${apiVerUrl}/post`;
const postBySlug = `${apiVerUrl}/post-by-slug`;
const postsUrl = `${apiVerUrl}/posts`;
const allPostsUrl = "api/posts";
const postUser = `${apiVerUrl}/posts-by-user`;
const eventsUrl = `${apiVerUrl}/events`;
const eventIdUrl = `${apiVerUrl}/event`;
const changeStatusUrl = "api/user/post";
const subscribeUrl = "api/subscribe";
const loginUrl = `${apiVerUrl}/signin`;
const signUpUrl = `${apiVerUrl}/user`;
const userUrl = `${apiVerUrl}/user`;
const usersUrl = `${apiVerUrl}/users`;
const adminUrl = "api/admin";
const tagUrl = `${apiVerUrl}/tags`;
const postTagUrl = `${apiVerUrl}/post-tag`;
const postTagsUrl = `${apiVerUrl}/post-tags`;
const CreateTagUrl = `${apiVerUrl}/tag`;
const skillUrl = "api/skills";
const searchUrl = "api/search";
const forgotPasswordUrl = "api/auth/reset-password";
const resetPasswordUrl = "api/auth/reset-password-confirmation";
const changePasswordUrl = `${apiVerUrl}/update-password`;
const publishedPostsUrl = "api/posts/published";
// const publishedPostsCountUrl = "api/posts/published/count";
const logoutUrl = `${apiVerUrl}/logout`;

const configVars = {
  baseUrl,
  postTagsUrl,
  postTagUrl,
  postUser,
  loginUrl,
  signUpUrl,
  clientUrl,
  s3Url,
  authUrl,
  enrolUrl,
  postUrl,
  postBySlug,
  postsUrl,
  allPostsUrl,
  eventsUrl,
  eventIdUrl,
  changeStatusUrl,
  subscribeUrl,
  editorUrl,
  userUrl,
  adminUrl,
  tagUrl,
  CreateTagUrl,
  serverUrl,
  searchUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  usersUrl,
  changePasswordUrl,
  skillUrl,
  publishedPostsUrl,
  // publishedPostsCountUrl,
  logoutUrl,
};

module.exports = configVars;
