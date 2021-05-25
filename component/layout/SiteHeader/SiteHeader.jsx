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
    router.push(currentPath);
    setCookies("");
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
                <a>Community</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.wrapBtn}>

          <div className={styles.userInfo}>
            <div className={styles.profile__icon}>
              <Image
                src='/images/dummy.svg'
                alt="Profile"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.profile__dropdown}>
              <div className={styles.profile__details}>
                <h4>DataTurks</h4>
                <p>
                  <img src='/images/smallduck.svg' alt=""/>
                   22000
                </p>
              </div>
              <ul>
                <li>
                  <Link href="/">
                  <a>
                    Profile
                    <svg className="ml-3" width="5" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.31 3.308L1.073.079A.271.271 0 00.69.463L3.735 3.5.689 6.537a.271.271 0 10.384.384L4.31 3.692a.271.271 0 000-.384z" fill="#878787"/></svg>
                  </a>
                </Link>
                </li>
                <li>
                  <Link href="/">
                  <a>Logout</a>
                </Link>
                </li>
              </ul>
            </div>
          </div>

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
