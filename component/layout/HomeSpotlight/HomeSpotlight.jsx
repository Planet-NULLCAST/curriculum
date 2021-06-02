import styles from './HomeSpotlight.module.scss';

export default function HomeSpotlight() {
    return (
        <section className={styles.spotlight}>
            <h2>
                <span className={styles.spotlight__title}>Planet Nullcast</span>
                <span className={styles.spotlight__title}>A Place where</span>
                <span className={styles.spotlight__title}>code-crazy devs chill!</span>
            </h2>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
        </section>
    );
}