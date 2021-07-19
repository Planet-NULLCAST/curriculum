import styles from "./WhatsNewSpotlight.module.scss";

export default function WhatsNewSpotlight() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.main__left}>
          <h1>What's new in Nullcast</h1>
          <p>We ship every week, so you can ship more great designs.</p>
        </div>
        <div className={styles.main__right}>
          <img src="/images/whats-new-spotlight.svg" alt="image" />
        </div>
      </section>
    </>
  );
}
