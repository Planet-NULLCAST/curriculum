import styles from "./HomeSpotlight.module.scss";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeSpotlight() {
  useEffect(function mount() {
    const title1 = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    const title3 = document.getElementById("title3");

    const onScroll = () => {
      anim(title1, title2, title3);
    };

    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <section className={styles.spotlight}>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      {/* <div className={styles.mainSnow}>
        <div className={styles.snow}></div>
        {Array.from({ length: 300 }, (_, i) => (
          <div className={styles.snow}></div>
        ))}
      </div> */}
      <div className="">
        <h2>
          <span className={styles.spotlight__title} id="title1">
            Planet Nullcast
          </span>
          <span className={styles.spotlight__title} id="title2">
            A Place where
          </span>
          <span className={styles.spotlight__title} id="title3">
            code-crazy devs chill!
          </span>
        </h2>
        <div className={styles.btnWrap}>
          <Link href="https://discord.com/invite/5byDDp2qbK">
            <a
              className="btn btn--whiteBorder"
              target="_blank"
              rel="noopener noreferer"
            >
              <span className="btn__text">Join Discord</span>
            </a>
          </Link>
          <Link href="/curriculum">
            <a className="btn btn--whiteBorder">
              <span className="btn__text">School of Ducks</span>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.scroll}>
        <svg
          width="42"
          height="88"
          viewBox="0 0 42 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="44" r="20" stroke="#626262" strokeWidth="2" />
          <path
            d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z"
            fill="#626262"
          />
          <path
            d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z"
            fill="#626262"
          />
        </svg>
      </div>
    </section>
  );
}

const anim = (title1, title2, title3) => {
  const scrollValue = document.documentElement.scrollTop;

  title1.style.transform =
    "rotate(" +
    scrollValue / -40 +
    "deg) translateY(" +
    scrollValue / 30 +
    "px)";
  title2.style.transform = "translateY(" + scrollValue / 10 + "px)";
  title3.style.transform =
    "rotate(" +
    (scrollValue / 50 - 4.58) +
    "deg) scale(" +
    (1 + scrollValue / 5000) +
    ") translateY(" +
    scrollValue / 20 +
    "px)";
};
