import styles from "./CourseJourney.module.scss";
import Image from "next/image";
import { useEffect } from "react";

export default function CourseJourney() {
  useEffect(function mount() {
    const onScroll = () => {
      anim();
    };

    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <section className={styles.path}>
      <div className="container container--small">
        <div className={styles.row}>
          <div className="md:w-8/12">
            <h3>Start with HTML</h3>
            <p>
              A step-by-step guide to understanding the how-to's of HTML rather
              than hovering around the why's. Learn the practical skills needed
              to master the basics of HTML and start building your website.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/html5.svg"
              alt="HTML5"
              width={143}
              height={199}
              margin={0}
            />
          </div>
          <svg
            className={styles.svgpath}
            width="969"
            height="379"
            viewBox="0 0 969 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path_1"
              d="M19.5 15v175.5h936V396"
              stroke="#63717A"
              strokeDasharray="10 10"
            />
            <path
              d="M19.5 15v175.5h936V396"
              stroke="#178cf3"
              strokeDasharray="10 10"
              clipPath="url(#box_1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <clipPath id="box_1">
                <path fill="#62D32C" d="M0 0h58v53H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.row}>
          <div className="md:w-8/12">
            <h3>CSS</h3>
            <p>
              Add life, colours and style to the contents of the website you
              created by practising alongside the best way to learn CSS. This
              guide is suitable for anyone eager to pave a path towards
              maintaining complex web pages with ease.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/css3.svg"
              alt="HTML5"
              width={143}
              height={199}
              margin={0}
            />
          </div>
          <svg
            className={styles.svgpath}
            width="969"
            height="379"
            viewBox="0 0 969 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path_2"
              d="M19.5 15v175.5h936V396"
              stroke="#63717A"
              strokeDasharray="10 10"
            />
            <path
              d="M19.5 15v175.5h936V396"
              stroke="#20d034"
              strokeDasharray="10 10"
              clipPath="url(#box_2)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <clipPath id="box_2">
                <path fill="#62D32C" d="M0 0h58v53H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.row}>
          <div className="md:w-8/12">
            <h3>Create Sample Projects</h3>
            <p>
              Practice makes perfect, isn’t it? Get started with the sample
              projects to test yourself and show off your newly learned skills.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/browser.svg"
              alt="HTML5"
              width={143}
              height={199}
              margin={0}
            />
          </div>
          <svg
            className={styles.svgpath}
            width="969"
            height="379"
            viewBox="0 0 969 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path_3"
              d="M19.5 15v175.5h936V396"
              stroke="#63717A"
              strokeDasharray="10 10"
            />
            <path
              d="M19.5 15v175.5h936V396"
              stroke="#d8c00f"
              strokeDasharray="10 10"
              clipPath="url(#box_3)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <defs>
              <clipPath id="box_3">
                <path fill="#62D32C" d="M0 0h58v53H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.row}>
          <div className="md:w-8/12">
            <h3>Javascript</h3>
            <p>
              Once the foundation is set, it’s time to step up your game and
              create the interactive side of your website. Kick things off with
              Javascript to learn the basic fundamentals of programming and
              achieve advanced JS mastery.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/js.svg"
              alt="HTML5"
              width={143}
              height={199}
              margin={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const anim = () => {
  const screen_height = document.documentElement.clientHeight;
  const svg1 = document.getElementById("path_1");
  const mask1 = document.getElementById("box_1");

  const pathLength = svg1 ? svg1.getTotalLength() : "";

  const svg2 = document.getElementById("path_2");
  const mask2 = document.getElementById("box_2");

  const svg3 = document.getElementById("path_3");
  const mask3 = document.getElementById("box_3");

  animatepath(svg1, mask1, pathLength, screen_height, 80, 550);
  animatepath(svg2, mask2, pathLength, screen_height, 80, 550);
  animatepath(svg3, mask3, pathLength, screen_height, 80, 550);
};

const findScrollPercent = (container, screen_height, distance1, distance2) => {
  let block_bounds = container ? container.getBoundingClientRect() : "";

  let scroll1percent =
    ((document.documentElement.clientHeight - block_bounds.y - distance1) /
      (block_bounds.height + screen_height - distance2)) *
    100;

  return scroll1percent;
};

const animatepath = (
  svgElement,
  maskElent,
  pathLength,
  screen_height,
  distance1,
  distance2
) => {
  let u = findScrollPercent(svgElement, screen_height, distance1, distance2);
  if (u < 0) {
    u = 0;
  } else if (u > 100) {
    u = 1;
  } else {
    u /= 100;
  }

  let p = svgElement ? svgElement.getPointAtLength(u * pathLength) : "";
  let x = p.x - 10,
    y = p.y - 10;
  if (maskElent) maskElent.setAttribute("transform", `translate(${x}, ${y})`);
};
