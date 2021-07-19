import styles from "./SiteHeader.module.scss";
import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "universal-cookie";

export default function HomeSpotlight() {
  const _cookies = new Cookies();
  const userCookie = _cookies.get("userNullcast");
  const [menu, setMenu] = useState(false);
  // const ShowMenu = () => {
  //   setMenu(menu);
  // };
  // useEffect(() => {
  //   document.body.classList.toggle("menuOpen", menu);
  // }, [menu]);
  const router = useRouter();
  const [cookies, setCookies] = useState("");
  useEffect(() => {
    if (userCookie) {
      setCookies(userCookie);
    }
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

    window.onscroll = function () {
      headerSticky();

      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.classList.add("show");
      } else {
        header.classList.remove("show");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  function logout() {
    // console.log("logout");
    window.localStorage.removeItem("progress");
    document.cookie =
      "userNullcast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookies("");
    sessionStorage.setItem("userNullcast", null);
    // console.log(router);
    if (router.pathname === "/posts" || router.pathname === "/posts/write") {
      router.push("/");
    } else {
      router.reload();
    }
  }
  return (
    <header
      className={`${styles.header} ${menu ? "menu-open" : " "} w-full`}
      id="header"
    >
      <div
        className={`${styles.wrap} flex items-center justify-between w-full px-3 lg:px-0 max-w-panel`}
      >
        <div id="logo">
          <Link href="/">
            <a onClick={() => setMenu(true)}>
              <img src="/images/nullcast.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className="flex items-center flex-end">
          <div className={styles.navFixed}>
            <div className={styles.whiteBg}>
              <a
                className={`${styles.btnClose} hidden`}
                onClick={() => setMenu(false)}
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div className={styles.darkBg}>
              <nav>
                <ul className={styles.mainMenu}>
                  {/* <li>
                    <Link href="/">
                      <a onClick={() => setMenu(true)}>What the Ducks?</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/curriculum">
                      <a onClick={() => setMenu(true)}>School of Ducks</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/posts">
                      <a onClick={() => setMenu(true)}>
                        Write
                        <img
                          src="/images/hand.png"
                          className="ml-1"
                          alt="hand"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    {/*TO DO: add some menu blog, events, leaderboard drop down*/}
                    <a onClick={() => setMenu(true)} className="w-full font-semibold">
                      Explore
                      <span className={styles.downArrow}>
                        <svg
                          width="8"
                          height="5"
                          viewBox="0 0 8 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#1B1B1B"
                        >
                          <path d="M.149.148A.48.48 0 01.5 0h7a.48.48 0 01.352.148A.48.48 0 018 .5a.48.48 0 01-.148.352l-3.5 3.5A.48.48 0 014 4.5a.48.48 0 01-.352-.148l-3.5-3.5A.48.48 0 010 .5C0 .365.05.248.149.148z" />
                        </svg>
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link href="/blog">
                          <a onClick={() => setMenu(true)} className="w-full font-semibold">
                            Blog
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/code-of-conduct">
                          <a onClick={() => setMenu(true)} className="w-full font-semibold">
                            Code of conduct
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* <a href="" className="btn btn--whiteBorder">
                <span className="btn__text">Donate</span>
              </a> */}
            </div>
          </div>

          <div className={styles.wrapBtn}>
            {cookies ? (
              <div className="flex flex-row justify-center items-center">
                <Profile onLogout={() => logout()} />
              </div>
            ) : (
              <a href="/login" className="btn btn--black">
                <span className="btn__text">Login</span>
                <svg
                  className="btn__arrow"
                  width="14"
                  height="9"
                  fill="#fff"
                  viewBox="0 0 14 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z" />
                </svg>
              </a>
            )}

            {/* <a href="" className="btn btn--blackborder hidden lg:block">
            <span className="btn__text">Donate</span>
          </a> */}
          </div>
          <a
            className={`${styles.btnMenu} hidden`}
            onClick={() => setMenu(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </header>
  );
}
