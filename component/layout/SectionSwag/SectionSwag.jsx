import styles from "./SectionSwag.module.scss";

export default function SectionSwag() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="text-center">Want #swag?</h2>
        <div className={styles.subtitle}>
          <h3>Join our monthly raffle! </h3>
        </div>
        <div className="md:flex items-center justify-between mb-10 xl:mb-20">
          <div className="md:w-8/12 xl:w-7/12 font-darker font-bold text-25 xl:text-34 text-gray-01 text-center md:text-left">
            <p className="mb-10">
              Every month, One Lucky Duck gets free swag shipped to their
              doorstep, wherever in the world you are! All you have to do is
              join our Discord channel today and tweet about the amazing things
              we do. #nullcast #luckyduck
            </p>
            <p className={styles.pinktext}>
              We will announce the winners on Twitter and through our discord
              channel.
            </p>
          </div>
          <div className={styles.duck}>
            <img src="/images/duck.svg" alt="" />
          </div>
        </div>
        <div className="cta text-center">
          <a href="https://discord.com/invite/5byDDp2qbK" className="btn">
            <span className="btn__text">JOIN THE FLOCK</span>
          </a>
        </div>
      </div>
    </section>
  );
}
