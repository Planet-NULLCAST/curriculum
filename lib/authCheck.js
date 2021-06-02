export function authCheck() {
  let allCooki = document.cookie;
  allCooki = allCooki.split("=");
  if (allCooki.includes("userNullcast")) {
    let index = allCooki.indexOf("userNullcast");
    if (allCooki[index + 1]) {
      return JSON.parse(allCooki[index + 1]).accessToken;
    }
  } else {
    return false;
  }
  return false;
}
