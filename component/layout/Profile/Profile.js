import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import Link from "next/link";
import Image from "next/image";
import Cookies from "universal-cookie";
import PostService from "../../../services/PostService";

export default function Profile({ onLogout, username }) {
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");

  // State
  const [isAdmin, setIsAdmin] = useState(false);

  // Effects
  useEffect(() => {
    if (userCookie?.roles === "admin") {
      getIsAdmin();
    }
  }, []);

  // Functions
  /**
   * Function to get if a user is asn admin
   *
   * @author athulraj2002
   */
  const getIsAdmin = async () => {
    const res = await PostService.isAdmin(
      userCookie.id,
      userCookie.accessToken
    );
    if (res?.data) setIsAdmin(true);
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.profile__icon}>
        <img
          src={userCookie.avatar || "/images/svgs/avatar.svg"}
          alt="avatar"
          width="32"
          height="32"
          className="rounded-full border"
        />
      </div>
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__details}>
          <h4>{userCookie.username}</h4>
          <p>
            <img src="/images/smallduck.svg" alt="coin" />0
          </p>
        </div>
        <ul>
          <li>
            <Link href={`/u/${userCookie.username}`}>
              <a className="linkUnderline w-full">
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
              </a>
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin">
                <a className="linkUnderline w-full">Admin Console</a>
              </Link>
            </li>
          )}
          <li>
            <Link href="/settings">
              <a className="linkUnderline w-full">Settings</a>
            </Link>
          </li>
          <li>
            {/* <a onClick={onLogout}>Logout</a> */}
            <button onClick={onLogout} className="linkUnderline w-full">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
