import Link from "next/link";
import Image from "next/image";
import styles from "./SiteFooter.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseUrl, subscribeUrl } from "../../../config/config";

export default function SiteFooter() {
  const notify = (msg) => {
    // console.log(msg);
    toast(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  const addSubscriber = async (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;
    const emailData = {
      email: newEmail
    };
    const { data } = await axios.post(`${baseUrl}/${subscribeUrl}`, emailData);
    // console.log(data);
    notify(data.msg);
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ToastContainer />
        <div className="md:flex items-center">
          <div className="md:w-7/12 lg:w-1/2">
            <h2 className="font-darker font-black text-3xl lg:text-44 xl:text-64 leading-none mb-12">
              Subscribe Our Newsletter
            </h2>
            <form className={styles.form} onSubmit={addSubscriber}>
              <label htmlFor="email"></label>
              <input
                type="email"
                className={styles.email}
                placeholder="Enter your mail"
                id="#email"
                name="email"
              />
              <button className="btn btn--subscribe" type="submit">
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
                <Image
                  src="/images/twitter-large.svg"
                  alt="twitter"
                  width={268}
                  height={268}
                />
                <img />
              </a>
              <a
                href="https://www.linkedin.com/company/nullcast/?originalSubdomain=in"
                className={styles.linkedin}
              >
                <Image
                  src="/images/linkedin-large.svg"
                  alt="linkedin"
                  width={290}
                  height={213}
                />
              </a>
              <a
                href="https://discord.com/invite/5byDDp2qbK"
                className={styles.discord}
              >
                <Image
                  src="/images/discord-large.svg"
                  alt="discord"
                  width={315}
                  height={217}
                />
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
