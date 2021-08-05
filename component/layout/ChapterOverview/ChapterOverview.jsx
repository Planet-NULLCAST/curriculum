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
             After gaining a prerequisite understanding of HTML and CSS, make way for some juicy Javascript.
             It is with Javascript that you can step up your website-building game by boosting its interactiveness. 
             So, head down to master the fundamentals and then to create algorithms that matter in the real-world.

            </p>
            <h3 className="text-25 font-extrabold mb-5">Take-Away Skills:</h3>
            <p>
              By the end of this course, you’ll be able to upskill yourself to amplify web interactivity, data manipulation and animation.
              It’s all the fun stuff in one package!<br>
              You’ll also come across Object Oriented Programming (OOP) and Functional Programming 
              (FP) which are two essential programming paradigms for working with JS.

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
