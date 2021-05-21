import styles from "./CourseItem.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CourseItem({ content, courses }) {
  return (
    <div className={styles.CourseItem}>
      <div className={styles.icon}>
        <Image
          src={content.image}
          alt={content.alt}
          width={content.imageWidth}
          height={content.imageHeight}
        />
      </div>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      {content.linktext ? (
        <Link href={content.url}>
          <a className="btn btn--small mt-auto">
            <span className="btn__text">Learn more</span>
          </a>
        </Link>
      ) : (
        <span className={styles.tempLabel}>Coming soon</span>
      )}
    </div>
  );
}
