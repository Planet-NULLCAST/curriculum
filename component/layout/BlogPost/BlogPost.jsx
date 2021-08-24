import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from "react-share";

import hljs from "highlight.js";

import PostService from "../../../services/PostService";
import { clientUrl } from "../../../config/config";

import "highlight.js/styles/tomorrow-night-blue.css";
import styles from "./BlogPost.module.scss";

export default function BlogPost(props) {
  const createMarkup = (value) => {
    return { __html: value };
  };

  /**
   * To call setVotes on every change in votetypes by a user
   * @author sNkr-10
   */
  //posts having no votes field will have null as initial state for voteType and votes are created during createPost
  const [voteType, setVoteType] = useState("");
  useEffect(() => {
    const votes = props.blog.votes?.find((item) => item.userId == props.userId);
    if (votes) {
      setVoteType(votes.type);
    }
  }, [props.blog]);
  const [voteCount, setVoteCount] = useState(
    props.blog.votes.filter((item) => item.type == "up").length -
      props.blog.votes.filter((item) => item.type == "down").length
  );

  /**
   * function triggered during upvotes/downvotes
   * @author sNkr-10
   * @returns {Promise}
   */
  const setVotes = async (type) => {
    try {
      if (props.userId) {
        const response = await PostService.setVotes(
          type,
          props.blog._id,
          props.token
        );
        if (response.posts != null) {
          setVoteCount(
            response.posts.votes.filter((item) => item.type == "up").length -
              response.posts.votes.filter((item) => item.type == "down").length
          );

          setVoteType(
            response.posts.votes.find((item) => item.userId == props.userId)
              .type
          );
        }
        return response;
      }
    } catch (err) {
      return err;
    }
  };

  const handleClick = (value) => {
    // Prevents users to vote their own posts.
    if (props.userId != props.blog.primaryAuthor._id) {
      setVotes(value);
    }
    !props.userId && notify("Please login for further actions");
  };

  const [headings, setHeadings] = useState();
  useEffect(() => {
    const hTags = Array.from(
      document.getElementById("component").querySelectorAll("h2, h3, h4")
    ).map((item) => {
      return {
        id: item.id,
        text: item.innerText
      };
    });
    // console.log({ h2Tags });
    setHeadings(hTags);
    hljs.highlightAll();
  }, []);

  //Function definition for toast
  const notify = (err) => {
    console.log(err);
    toast.dark(err, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <style jsx>{`
        .bg1 {
          background: #282828;
          color: #fff;
          padding: 80px 0;
          position: relative;
        }
        .bg1:before,
        .bg1:after {
          background: #282828;
          content: "";
          position: absolute;
          z-index: -1;
          width: 100vw;
          height: 100%;
          top: 0;
        }
        .bg1:before {
          right: 0;
        }
        .bg1:after {
          left: 0;
        }
        .twitter-tweet {
          margin: auto;
        }
      `}</style>
      <section className={styles.post}>
        <div className={styles.postWrap}>
          <div className="container container--post">
            <div className={styles.postHeader}>
              <div className={styles.wrapVote}>
                <div className={styles.vote}>
                  <a onClick={() => handleClick("up")} className="uo">
                    <svg
                      width="37"
                      height="28"
                      viewBox="0 0 37 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.805 2.013L.977 22.21C.338 23.144 0 24.084 0 24.865c0 1.51 1.212 2.445 3.241 2.445h29.886c2.027 0 3.237-.933 3.237-2.44 0-.783-.339-1.707-.98-2.642L21.557 2.02C20.666.72 19.467 0 18.18 0c-1.286 0-2.484.712-3.375 2.013z"
                        fill={voteType == "up" ? "#ff590f" : "#CFCFCF"}
                      />
                    </svg>
                  </a>
                  <span className="count">{voteCount}</span>
                  <a onClick={() => handleClick("down")} className="down">
                    <svg
                      width="37"
                      height="28"
                      viewBox="0 0 37 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.805 25.751L.977 5.553C.338 4.62 0 3.68 0 2.899 0 1.389 1.212.454 3.241.454h29.886c2.027 0 3.237.933 3.237 2.44 0 .782-.339 1.707-.98 2.642L21.557 25.744c-.891 1.3-2.09 2.02-3.377 2.02-1.286 0-2.484-.712-3.375-2.013z"
                        fill={voteType == "down" ? "#ff590f" : "#CFCFCF"}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.widget}>
                <div className={styles.index}>
                  <h3>Page Index</h3>
                  <ol>
                    {headings &&
                      headings.map((heading) => (
                        <li key={heading.id}>
                          <a href={`#${heading.id}`}>
                            <p className="linkUnderline">{heading.text}</p>
                          </a>
                        </li>
                      ))}
                  </ol>
                </div>
                <div className={styles.social}>
                  <h3>Share</h3>
                  <ul>
                    <li className={styles.facebook}>
                      <FacebookShareButton
                        url={`${clientUrl}/${props.blog.slug}`}
                      >
                        <a rel="noopener">
                          <svg
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.722 2.657H7V.113C6.78.078 6.021 0 5.138 0 3.296 0 2.033 1.325 2.033 3.76V6H0v2.844h2.033V16h2.493V8.845h1.951L6.787 6H4.526V4.04c0-.822.194-1.384 1.196-1.384z" />
                          </svg>
                        </a>
                      </FacebookShareButton>
                    </li>
                    <li className={styles.linkedin}>
                      <LinkedinShareButton
                        url={`${clientUrl}/${props.blog.slug}`}
                      >
                        <a rel="noopener">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.535 15.627h.004V9.896c0-2.804-.604-4.964-3.882-4.964-1.575 0-2.633.865-3.065 1.684h-.045V5.194H6.439v10.433h3.236V10.46c0-1.36.258-2.676 1.942-2.676 1.66 0 1.685 1.553 1.685 2.763v5.08h3.233zM1.17 5.194h3.24v10.433H1.17V5.194zM2.788 0C1.752 0 .911.84.911 1.877c0 1.036.841 1.894 1.877 1.894s1.877-.858 1.877-1.894A1.878 1.878 0 002.788 0z" />
                          </svg>
                        </a>
                      </LinkedinShareButton>
                    </li>
                    <li className={styles.twitter}>
                      <TwitterShareButton
                        url={`${clientUrl}/${props.blog.slug}`}
                      >
                        <a rel="noopener">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18.413 2.589c-.685.3-1.414.5-2.175.596a3.752 3.752 0 001.66-2.086 7.541 7.541 0 01-2.392.914 3.772 3.772 0 00-6.528 2.58c0 .3.025.587.087.86a10.681 10.681 0 01-7.778-3.947 3.8 3.8 0 00-.516 1.908A3.78 3.78 0 002.447 6.55a3.727 3.727 0 01-1.705-.465v.042a3.791 3.791 0 003.023 3.707 3.766 3.766 0 01-.99.125c-.24 0-.485-.014-.714-.065a3.81 3.81 0 003.527 2.629 7.582 7.582 0 01-4.68 1.61 7.08 7.08 0 01-.902-.052 10.624 10.624 0 005.789 1.693c6.944 0 10.74-5.752 10.74-10.738a9.69 9.69 0 00-.014-.488 7.529 7.529 0 001.892-1.96z" />
                          </svg>
                        </a>
                      </TwitterShareButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.postContent}>
              <div
                dangerouslySetInnerHTML={createMarkup(props.html)}
                id="component"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
