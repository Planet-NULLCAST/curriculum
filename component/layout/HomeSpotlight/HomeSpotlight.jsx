import styles from './HomeSpotlight.module.scss';
import Fade from 'react-reveal/Fade';

export default function HomeSpotlight() {
    return (
        <section className={styles.spotlight}>
            <h2>
                <Fade duration={800} cascade>
                <span className={styles.spotlight__title}>Planet Nullcast</span>
                <span className={styles.spotlight__title}>A Place where</span>
                <span className={styles.spotlight__title}>code-crazy devs chill!</span>
                </Fade>
            </h2>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
        </section>
    );
}