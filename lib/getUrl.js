import { baseUrl, serverUrl } from "../config/config";

// set URL from where this function is executing
// like server and client
// if in server serverURL is applied else clientURL
/**
 *
 * @author sNkr10
 * @returns {String}
 */
export const getUrl = () => {
  let url = "";
  if (typeof window == "undefined") url = serverUrl;
  else url = baseUrl;
  return url;
};
