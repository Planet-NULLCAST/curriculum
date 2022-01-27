import styles from "./SectionVideos.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useState, } from "react";
import { exit } from "process";

export default function SectionVideos() {

  const [firstPlay, setFirstPlay] = useState(false);
  const [secondPlay, setSecondPlay] = useState(false);
  const [thirdPlay, setThirdPlay] = useState(false);


  return (
    <section className={styles.section}>
      <div className="container">
        <Fade cascade>
          <div className={styles.videoList}>
            <div className={styles.videoItem}
              onClick={() => {
                setFirstPlay(true);
              }}
            >
              <figure
              >
                <iframe
                  allowfullscreen="true"
                  frameborder="0"
                  scrolling="no"

                  type="text/html"
                  width="500"
                  height="586"
                  src={firstPlay
                    ? "https://www.youtube.com/embed/EL6F9h7UgUA?autoplay=1"
                    : "https://www.youtube.com/embed/EL6F9h7UgUA?autoplay=0"}
                  frameborder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>
                {/* <figcaption >
                  <div className={`${styles.caption1} ${firstPlay ? "invisible" : "visible"}`} >

                    <h3>
                      What is (Simple Notification Service) SNS? | Nullcast
                    </h3>
                  </div>
                </figcaption> */}


              </figure>
            </div>

            <div className={styles.videoItem}
              onClick={() => {
                setSecondPlay(true);
              }}
            >
              <figure>
                <iframe
                  width="500"
                  allowFullScreen="true"
                  height="586"
                  src={secondPlay
                    ? "https://www.youtube.com/embed/YP48OZtsOpU?autoplay=1"
                    : "https://www.youtube.com/embed/YP48OZtsOpU?"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                >
                </iframe>
                <button
                  className={styles.play}>
                  {/* <svg
                    onClick={() => {
                      setPlay(!play);
                    }}
                    width="151"
                    height="104"
                    viewBox="0 0 151 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  > */}

                  {/* <path
                    d="M68.765 76.031a2.944 2.944 0 01-2.942-2.943V30.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L70.65 75.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L89.476 52 71.71 37.194z"
                    fill="#fff"
                  />
                  <path
                    className={styles.circleWhite}
                    d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                    fill="#fff"
                  />
                  <path
                    className={styles.circleYellow}
                    d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.944 2.944 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                    fill="#FDB500"
                  />
                </svg> */}
                </button>
                {/* <figcaption>
                  <h3>
                    <a href="https://www.youtube.com/watch?v=YP48OZtsOpU">IoT Communication Protocol | Nullcast
                    </a>
                  </h3>
                </figcaption> */}
              </figure>
            </div>
            <div className={styles.videoItem}
              onClick={() => {
                setThirdPlay(true);
              }}
            >
              <figure>
                <iframe
                  allowFullScreen="true"
                  width="500"
                  height="586"
                  src={thirdPlay
                    ? "https://www.youtube.com/embed/XcSKzYaBV3c?autoplay=1"
                    : "https://www.youtube.com/embed/XcSKzYaBV3c?autoplay=0"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
                >
                </iframe>
                <button
                  className={styles.play}>
                  {/* <svg
                    onClick={() => {
                      setPlay(!play);
                    }}
                    width="151"
                    height="104"
                    viewBox="0 0 151 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  > */}

                  {/* <path
                    d="M68.765 76.031a2.944 2.944 0 01-2.942-2.943V30.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L70.65 75.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L89.476 52 71.71 37.194z"
                    fill="#fff"
                  />
                  <path
                    className={styles.circleWhite}
                    d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                    fill="#fff"
                  />
                  <path
                    className={styles.circleYellow}
                    d="M75.913 102a49.727 49.727 0 01-24.437-6.386 2.942 2.942 0 112.888-5.128c17.168 9.664 38.9 6.676 52.846-7.276 17.21-17.21 17.21-45.21 0-62.419-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.944 2.944 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C101.765 96.98 88.897 102 75.913 102z"
                    fill="#FDB500"
                  />
                </svg> */}
                </button>
                {/* <figcaption>
                  <h3>
                    <a href="https://www.youtube.com/watch?v=XcSKzYaBV3c">What is Zapier?
                      | Nullcast</a>
                  </h3>
                </figcaption> */}
              </figure>
            </div>
          </div>
        </Fade>
      </div >
    </section >
  );
}
