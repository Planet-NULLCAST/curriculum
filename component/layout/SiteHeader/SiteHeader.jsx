import styles from "./SiteHeader.module.scss";
import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function HomeSpotlight() {
  const [menuState, ToggleMenu] = useState(false);
  const ShowMenu = () => {
    ToggleMenu(!menuState);
  };
  useEffect(() => {
    document.body.classList.toggle('menuOpen', menuState);
  }, [menuState])
  const router = useRouter();
  // console.log("aspath", router.asPath);
  const currentPath = router.asPath;
  const [cookies, setCookies] = useState("");
  useEffect(() => {
    let cook = document.cookie;
    cook = cook.split("=");
    cook[0] !== "" && setCookies(JSON.parse(cook[1]));
  }, []);

  useEffect(() => {

    let header = document.getElementById("header");
    let sticky = header.offsetTop;
    let prevScrollpos = window.pageYOffset;

    function headerSticky() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    window.onscroll = function() {

      headerSticky();

      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          header.classList.add('show');
      } else {
          header.classList.remove('show');
      }
      prevScrollpos = currentScrollPos;

    };

  }, []);

  function logout() {
    // console.log("logout");
    window.localStorage.removeItem("progress");
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookies("");
    router.reload();
  }
  return (
    <header className={`${styles.header} ${ menuState ? "menu-open" : " " }`} id="header">
      <div className={styles.wrap}>
        <div className={styles.navFixed}>
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
                <Link href="/posts">
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
        </div>
          <a className={`${styles.btnMenu} hidden`} onClick={() => ShowMenu()}>
             <span></span>
             <span></span>
             <span></span>
         </a>
        <div className={styles.wrapBtn}>
          {cookies ? (
            <div className="flex flex-row justify-center items-center">
              <Profile onLogout={() => logout()} />
              {/* <div>
                <button onClick={() => logout()}>Logout</button>
              </div> */}
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
