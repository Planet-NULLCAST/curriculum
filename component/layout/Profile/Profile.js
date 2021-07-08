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
        <Image src="/images/dummy.svg" alt="Profile" width={32} height={32} />
      </div>
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__details}>
          <h4>{username}</h4>
          <p>
            <img src="/images/smallduck.svg" alt="" />
            22000
          </p>
        </div>
        <ul>
          <li>
            <Link href={`/u/${userCookie.username}`}>
              <a className="linkUnderline">
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
                <button className="linkUnderline">Admin Console</button>
              </Link>
            </li>
          )}
          <li>
            <Link href="/settings">
              <button className="linkUnderline">Edit Profile</button>
            </Link>
          </li>
          <li>
            {/* <a onClick={onLogout}>Logout</a> */}
            <button onClick={onLogout} className="linkUnderline">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
