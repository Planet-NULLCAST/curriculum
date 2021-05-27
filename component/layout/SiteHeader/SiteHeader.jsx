import styles from "./SiteHeader.module.scss";
import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function HomeSpotlight() {
  const router = useRouter();
  // console.log("aspath", router.asPath);
  const currentPath = router.asPath;
  const [cookies, setCookies] = useState("");
  useEffect(() => {
    let cook = document.cookie;
    cook = cook.split("=");
    cook[0] !== "" && setCookies(JSON.parse(cook[1]));
  }, []);

  function logout() {
    // console.log("logout");
    window.localStorage.removeItem("progress");
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookies("");
    router.reload();
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <nav>
          <ul className={styles.mainMenu}>
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
              <Link href="/write">
                <a>
                  Write <img src="/images/hand.png" className="ml-1" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                {/*TO DO: add some menu blog, events, leaderboard drop down*/}
                <a>Explore</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.wrapBtn}>
          {cookies ? (
            <div className="flex flex-row justify-center items-center">
              <Profile />
              <div>
                <button onClick={() => logout()}>Logout</button>
              </div>
            </div>
          ) : (
            <a
              href={`/login/?redirect=${currentPath}`}
              className="btn btn--black"
            >
              <span className="btn__text">Login</span>
              <svg
                className="btn__arrow"
                width="14"
                height="9"
                fill="none"
                viewBox="0 0 14 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z"
                  fill="#fff"
                />
              </svg>
            </a>
          )}

          {/* <a href="" className="btn btn--blackborder">
            <span className="btn__text">Donate</span>
          </a> */}
        </div>
      </div>
    </header>
  );
}
