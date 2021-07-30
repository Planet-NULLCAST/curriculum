import { clientUrl } from "../config/config";
export const url = clientUrl;
export const logoPath = "images/nullcast.png";
export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nullcast",
  "url": `${url}`,
  "logo": `${logoPath}`,
  "sameAs": [
    "https://www.facebook.com/nullcast",
    "https://twitter.com/nullcast_io",
    ""
  ],
  "description": "Thoughts, stories and ideas."
};
