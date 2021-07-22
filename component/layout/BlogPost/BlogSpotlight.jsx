import styles from "./BlogSpotlight.module.scss";
import AuthorDetails from "../BlogListing/AuthorDetails";

import moment from "moment";

export default function BlogSpotlight(props) {
  const { title, bannerImage, createdAt, primaryAuthor } = props;
  const { username, avatar } = primaryAuthor;

  return (
    <>
      <section className={styles.postTitle}>
        <div className="container">
          <div className={styles.title}>
            <h2>{title}</h2>
            <h3 className="date">{moment(createdAt).format("Do MMMM YYYY")}</h3>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.postWrap}>
          <figure>{bannerImage && <img src={bannerImage} alt="blog" />}</figure>
          <div className={styles.author}>
            <div className={styles.item}>
              <AuthorDetails username={username} avatar={avatar} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
