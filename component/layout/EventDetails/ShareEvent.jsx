import React from "react";
import styles from "./ShareEvent.module.scss";
import notify from "../../../lib/notify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from "react-share";
function ShareEvent({ hidewindow, location }) {
  const url = location;
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(url);
    notify("Copied to clipboard", "success");
  };
  return (
    <div className={styles.cover}>
      <div className={styles.card}>
        <div className={styles.topbar}>
          <div>Share</div>
          <div onClick={hidewindow} className={styles.close}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4.66688L10.6669 0L12 1.33312L7.33312 6L12 10.6669L10.6669 12L6 7.33312L1.33312 12L0 10.6669L4.66688 6L0 1.33312L1.33312 0L6 4.66688Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
        <div>
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} />
          </WhatsappShareButton>
        </div>
        <div>
          <input
            onClick={copyToClipBoard}
            type="text"
            name="link"
            id="link"
            readOnly={true}
            value={url}
            className={styles.link}
          />
        </div>
      </div>
    </div>
  );
}

export default ShareEvent;
