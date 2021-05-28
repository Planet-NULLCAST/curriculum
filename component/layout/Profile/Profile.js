import styles from "./Profile.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Profile({ onLogout }) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.profile__icon}>
        <Image src="/images/dummy.svg" alt="Profile" width={32} height={32} />
      </div>
      <div className={styles.profile__dropdown}>
        <div className={styles.profile__details}>
          <h4>DataTurks</h4>
          <p>
            <img src="/images/smallduck.svg" alt="" />
            22000
          </p>
        </div>
        <ul>
          <li>
            <Link href="/u/abc">
              <a>
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
          <li>
            {/* <a onClick={onLogout}>Logout</a> */}
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
