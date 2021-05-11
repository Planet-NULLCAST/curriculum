import styles from './HomeSpotlight.module.scss';

export default function HomeSpotlight() {
    return (
        <section className={styles.spotlight}>
            <h2>
                <div className={styles.spotlight__title}>Planet Nullcast</div>
                <div className={styles.spotlight__title}>A Place where</div>
                <div className={styles.spotlight__title}>code-crazy devs chill!</div>
            </h2>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
        </section>
    );
}