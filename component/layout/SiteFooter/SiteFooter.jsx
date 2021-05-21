import Link from "next/link";
import styles from "./SiteFooter.module.scss";

export default function HomeSpotlight() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-7/12 lg:w-1/2">
            <h2 className="font-darker font-black text-3xl lg:text-44 xl:text-64 leading-none mb-12">
              Subscribe Our Newsletter
            </h2>
            <form className={styles.form}>
              <input
                type="text"
                className={styles.email}
                placeholder="Enter your mail"
              />
              <button className="btn btn--subscribe">
                <span className="btn__text">Subscribe</span>
              </button>
            </form>
            <ul className={styles.nevFooter}>
              <li>
                <Link href="/">
                  <a>What the Ducks?</a>
                </Link>
              </li>
              <li>
                <Link href="/curriculum">
                  <a>School of Ducks</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Leaderboard</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-5/12 md:pl-4 lg:w-1/2">
            <div className={styles.socialWrap}>
              <a
                href="https://twitter.com/nullcast_io?lang=en"
                className={styles.twitter}
              >
                <img src="/images/twitter-large.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/nullcast/?originalSubdomain=in"
                className={styles.linkedin}
              >
                <img src="/images/linkedin-large.svg" alt="linkedin" />
              </a>
              <a
                href="https://discord.com/invite/5byDDp2qbK"
                className={styles.discord}
              >
                <img src="/images/discord-large.svg" alt="discord" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Made with <span className={styles.red}>❤️</span> by Neoito Ducks
          </p>
        </div>
      </div>
    </footer>
  );
}
