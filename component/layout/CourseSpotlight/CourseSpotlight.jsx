import styles from "./CourseSpotlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import notify from "../../../lib/notify";
import {enrollCourse} from "../../../services/CurriculamService"

export default function CourseSpotlight({ contents }) {
  let bg = contents.bgimage;
  const {query : {courseName}} = useRouter()
  

  const enrollToCourse = async () => {
    try {
      await enrollCourse(courseName)
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }

  return (
    <section
      className={`${styles.spotlight} ${contents.bgimage}`}
      style={{ "--bgcolor": `${contents.bgcolor}` }}
    >
      <div className="container container--small">
        <div className="md:flex items-center justify-between">
          <div className="md:w-5/12 text-center md:text-left md:py-10 md:p-0 mb-5 md:m-0">
            <h2>{contents.title}</h2>
            <div className="mb-10">
              <h3 className="font-semibold text-lg mb-2">{contents.subtitle}</h3>
              <p className="text-lg">{contents.description}</p>
            </div>
            <Link
              href={
                contents.type === "courses"
                  ? "#courses"
                  : `/curriculum/${courseName}/introduction`
              }
            >
              <a className="btn btn--purple" onClick={enrollToCourse}>
                <span className="btn__text">{contents.buttonText}</span>
              </a>
            </Link>
          </div>
          <div className="w-1/2 m-auto md:w-5/12 spotlightImage">
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
