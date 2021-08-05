import styles from "./ChapterOverview.module.scss";

export default function ChapterOverview() {
  return (
    <section className="pb-10  lg:pb-20" style={{ color: "#202020" }}>
      <div className="container text-center md:text-left">
        <h2 className="text-gray-01 font-darker font-extrabold text-4xl lg:text-64 mb-10 xl:mb-14">
          Overview
        </h2>
        <div className="row md:flex">
          <div className="md:w-8/12 pt-5 md:text-18 font-medium lg:font-semibold leading-loose mb-10 md:mb-0 md:pr-5">
            <p className="mb-10">
              JavaScript (JS) is a lightweight, interpreted, or just-in-time
              compiled programming language with first-class functions. While it
              is most well-known as the scripting language for Web pages, many
              non-browser environments also use it, such as Node.js, Apache
              CouchDB etc.
            </p>
            <h3 className="text-25 font-extrabold mb-5">Take-Away Skills:</h3>
            <p>
              You will learn important basics of JavaScript. We will cover
              JavaScript's key fundamental features, turning our attention to
              it's key features such as variables, datatypes, functions.
            </p>
          </div>
          <div className="md:w-4/12">
            <div className={styles.overview}>
              <div className={styles.item}>
                <h3>Certificate</h3>
                <p>of completion for free</p>
              </div>
              {/* <div className={styles.item}>
                <h3>490,362</h3>
                <p>People who have taken this course</p>
              </div> */}
              <div className={styles.item}>
                <p>Time to Complete</p>
                <h3>~ 4 Hours</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
