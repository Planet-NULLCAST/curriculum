import styles from "./GuestDetails.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function GuestDetails({ name, avatar, desig }) {
  return (
    <>
      <div className={styles.guestDetails}>
        <div className={styles.guestDetails__icon}>
          <img
            src={avatar ? avatar : "/images/svgs/avatar.svg"}
            alt="guest"
            width={100}
            height={100}
          />
          <svg
            width="140"
            height="140"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35" cy="35" r="33.5" stroke="#F13E5D" strokeWidth="3" />
          </svg>
        </div>
        <h3 className={styles.guestDetails__title}>{name}</h3>
        <span className={styles.guestDetails__designation}>{desig}</span>
      </div>
    </>
  );
}
