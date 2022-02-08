const baseUrl = process.env.BASE_URL;
const clientUrl = process.env.CLIENT_URL;
const editorUrl = process.env.EDITOR_URL;
const s3Url = process.env.BUCKET_URL;
const serverUrl = process.env.SERVER_URL;
const apiVerUrl = "api/v1";
const authUrl = "/api/auth";
const enrolUrl = "/api/enrol";
const postUrl = `${apiVerUrl}/post`;
const adminReviewUrl = `${apiVerUrl}/admin/post`;
const postBySlug = `${apiVerUrl}/post-by-slug`;
const postsUrl = `${apiVerUrl}/posts`;
const allPostsUrl = "api/posts";
const postUser = `${apiVerUrl}/posts-by-user`;
const eventsUrl = `${apiVerUrl}/events`;
const eventIdUrl = `${apiVerUrl}/event`;
const eventSlugUrl = `${apiVerUrl}/event-by-slug`;
const createEventUrl = `${apiVerUrl}/admin/event`;
const changeStatusUrl = "api/user/post";
const subscribeUrl = "api/subscribe";
const loginUrl = `${apiVerUrl}/signin`;
const userUrl = `${apiVerUrl}/user`;
const getUsersUrl = `${apiVerUrl}/users-username`;
const verificationMail = `${apiVerUrl}/send-verification-mail`;
const emailTokenUrl = `${apiVerUrl}/verify-user`;
const usersUrl = `${apiVerUrl}/users`;
const adminUrl = `${apiVerUrl}/admin`;
const tagUrl = `${apiVerUrl}/tags`;
const postTagUrl = `${apiVerUrl}/post-tag`;
const postTagsUrl = `${apiVerUrl}/post-tags`;
const postSkillUrl = `${apiVerUrl}/user-tag`;
const postSkillsUrl = `${apiVerUrl}/user-tags`;
const createTagUrl = `${apiVerUrl}/tag`;
const postCount = `${apiVerUrl}/posts-count`;
const allPostUrl = `${apiVerUrl}/posts-url`;
const getAllEventsUrl = `${apiVerUrl}/events-url`;
const bookEventUrl = `${apiVerUrl}/event-registration`;
const skillUrl = "api/skills";
const searchUrl = "api/search";
const forgotPasswordUrl = `${apiVerUrl}/recovery`;
const resetPasswordUrl = `${apiVerUrl}/reset-password`;
const changePasswordUrl = `${apiVerUrl}/update-password`;
const publishedPostsUrl = "api/posts/published";
//  const publishedPostsCountUrl = "api/posts/published/count";
const logoutUrl = `${apiVerUrl}/logout`;
const setVoteUrl = `${apiVerUrl}/post-vote`;
const getVoteUrl = `${apiVerUrl}/post-votes`;
const getVoteTypeUrl = `${apiVerUrl}/post-vote-by-user`;
const getFollowersUrl = `${apiVerUrl}/followers`
const addorRemoveFollowers = `${apiVerUrl}/follow`
const isFollwing = `${apiVerUrl}/follower`
const leaderBoardUrl = `${apiVerUrl}/leader-board`;

const configVars = {
  leaderBoardUrl,
  baseUrl,
  bookEventUrl,
  allPostUrl,
  getUsersUrl,
  getAllEventsUrl,
  eventSlugUrl,
  getVoteTypeUrl,
  emailTokenUrl,
  postCount,
  setVoteUrl,
  getVoteUrl,
  postTagsUrl,
  postSkillsUrl,
  postSkillUrl,
  postTagUrl,
  postUser,
  loginUrl,
  userUrl,
  verificationMail,
  clientUrl,
  s3Url,
  authUrl,
  enrolUrl,
  postUrl,
  adminReviewUrl,
  postBySlug,
  postsUrl,
  allPostsUrl,
  eventsUrl,
  createEventUrl,
  eventIdUrl,
  changeStatusUrl,
  createEventUrl,
  subscribeUrl,
  editorUrl,
  adminUrl,
  tagUrl,
  createTagUrl,
  serverUrl,
  searchUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
  usersUrl,
  changePasswordUrl,
  skillUrl,
  publishedPostsUrl,
  getFollowersUrl,
  addorRemoveFollowers,
  isFollwing,
  // publishedPostsCountUrl,
  logoutUrl
};

module.exports = configVars;
