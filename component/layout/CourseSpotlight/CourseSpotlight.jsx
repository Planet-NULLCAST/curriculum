import styles from "./CourseSpotlight.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CourseSpotlight({ contents }) {
  let bg = contents.bgimage;
  // console.log(bg);
  return (
    <section
      className={`${styles.spotlight} ${contents.bgimage}`}
      style={{ "--bgcolor": `${contents.bgcolor}` }}
    >
      <div className="container container--small">
        <div className="md:flex items-center justify-between">
          <div className="md:w-5/12 text-center md:text-left py-10 md:p-0 mb-5 md:m-0">
            <h2>{contents.title}</h2>
            <h3 className="mb-10 font-semibold text-lg">{contents.subtitle}</h3>
            <Link
              href={
                contents.type === "courses"
                  ? "#courses"
                  : "/curriculum/javascript/introduction"
              }
            >
              <a className="btn btn--purple">
                <span className="btn__text">{contents.buttonText}</span>
              </a>
            </Link>
          </div>
          <div className="w-1/2 m-auto md:w-5/12">
            <Image
              src={contents.image}
              alt={contents.alt}
              width={contents.imageWidth}
              height={contents.imageHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
