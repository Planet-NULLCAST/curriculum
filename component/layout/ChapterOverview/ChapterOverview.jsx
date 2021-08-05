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
              Without CSS, every web page would be drab plain text and images
              that flowed straight down the page. With CSS, you can add color
              and background images and change the layout of your page — your
              web pages can feel like works of art!
            </p>
            <h3 className="text-25 font-extrabold mb-5">Take-Away Skills:</h3>
            <p>
              You will learn many aspects of styling web pages! You’ll be able
              to set up the correct file structure, edit text and colors, and
              create attractive layouts. With these skills, you’ll be able to
              customize the appearance of your web pages to suit your every
              need!
            </p>
          </div>
          <div className="md:w-4/12">
            <div className={styles.overview}>
              <div className={styles.item}>
                <h3>Certificate</h3>
                <p>of completion for free</p>
              </div>
              <div className={styles.item}>
                <h3>490,362</h3>
                <p>People who have taken this course</p>
              </div>
              <div className={styles.item}>
                <p>Time to Complete</p>
                <h3>10 Hours</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
