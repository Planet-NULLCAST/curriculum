import BookEvent from "./BookEvent";
import styles from "./EventSpotlight.module.scss";
import GuestDetails from "./GuestDetails";

export default function EventSpotlight({ data }) {
  const {
    banner_image,
    guest_name,
    guest_designation,
    guest_image,
    guest_bio,
    registration_link
  } = data;

  return (
      <section className={styles.section}>
        <div className={styles.postWrap}>
          <figure>{banner_image && <img src={banner_image} alt="Event Image" />}</figure>
          <div className={styles.bookEvent}>
            <BookEvent data={data} />
          </div>
          <div className={styles.author}>
            <GuestDetails name={guest_name} avatar={guest_image} desig={guest_designation} />
          </div>
        </div>
      </section>
  );
}
