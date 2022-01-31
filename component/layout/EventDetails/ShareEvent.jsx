import React from "react";
import styles from "./ShareEvent.module.scss";
import notify from "../../../lib/notify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from "react-share";
function ShareEvent({ hideWindow, location }) {
  const url = location;
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(url);
    notify("Copied to clipboard", "success");
  };
  return (
    <div className={styles.cover} >
      <div className={styles.card} >
        <div className={styles.topbar}>
          <div>Share</div>
          <div onClick={hideWindow} className={styles.close}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4.66688L10.6669 0L12 1.33312L7.33312 6L12 10.6669L10.6669 12L6 7.33312L1.33312 12L0 10.6669L4.66688 6L0 1.33312L1.33312 0L6 4.66688Z"
                fill="#C6C6C6"
              />
            </svg>
          </div>
        </div>
        <div className={styles.iconset}>
          <FacebookShareButton url={url} className={styles.icons}>
            <FacebookIcon className={styles.iconimage} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton url={url} className={styles.icons}>
            <WhatsappIcon className={styles.iconimage} round={true} />
          </WhatsappShareButton>
          <TwitterShareButton url={url} className={styles.icons}>
            <TwitterIcon className={styles.iconimage} round={true} />
          </TwitterShareButton>
          <EmailShareButton url={url} className={styles.icons}>
            <EmailIcon className={styles.iconimage} round={true} />
          </EmailShareButton>
          <LinkedinShareButton url={url} className={styles.icons}>
            <LinkedinIcon className={styles.iconimage} round={true} />
          </LinkedinShareButton>
       
        
        </div>
        <div className={styles.linkbox}>
          <input
            
            type="text"
            name="link"
            id="link"
            readOnly={true}
            value={url}
            className={styles.link}
          />
          <div className={styles.copy} onClick={copyToClipBoard}>
            copy
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareEvent;
