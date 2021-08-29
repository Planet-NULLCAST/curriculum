import React from "react";
import styles from "./Profile.module.scss";
import Link from "next/link";

export default function Profile({ onLogout, username }) {

  // Retrieving userdata from session storage which is in string format
  const userData = JSON.parse(sessionStorage.getItem("userNullcast"))

  return (
    <div className={styles.userInfo}>
      <div className={styles.profile__icon}>
        <img
          src={userData.avatar || "/images/svgs/avatar.svg"}
          alt="avatar"
          width="32"
          height="32"
          className="rounded-full border"
        />
      </div>
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__details}>
          <h4>{userData.full_name}</h4>
          <p>
            <img
              src="/images/smallduck.svg"
              alt="coin"
              height="18rem"
              width="18rem"
            />
            0
          </p>
        </div>
        <ul>
          <li>
            <a href={`/u/${userData.username}`}>
              <button className="linkUnderline w-full font-semibold">
                Profile
                <svg
                  className="ml-3"
                  width="5"
                  height="7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.31 3.308L1.073.079A.271.271 0 00.69.463L3.735 3.5.689 6.537a.271.271 0 10.384.384L4.31 3.692a.271.271 0 000-.384z"
                    fill="#878787"
                  />
                </svg>
              </button>
            </a>
          </li>
          <li>
            <Link href="/settings">
              <a className="linkUnderline w-full font-semibold">Settings</a>
            </Link>
          </li>
          <li>
            <button
              onClick={onLogout}
              className="linkUnderline w-full font-semibold"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
