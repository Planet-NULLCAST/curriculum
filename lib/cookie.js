export function getCookieValue(cookie, name) {
  let result = cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)");
  return result ? result.pop() : "";
}
