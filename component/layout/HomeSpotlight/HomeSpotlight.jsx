import styles from './HomeSpotlight.module.scss';
import Link from 'next/link';

export default function HomeSpotlight() {
    return (
        <section className={styles.spotlight}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div>
                <h2>
                    <span className={styles.spotlight__title}>Planet Nullcast</span>
                    <span className={styles.spotlight__title}>A Place where</span>
                    <span className={styles.spotlight__title}>code-crazy devs chill!</span>
                </h2>
                <div className={styles.btnWrap}>
                    <Link href="https://discord.com/invite/5byDDp2qbK">
                        <a className="btn btn--whiteBorder" target="_blank">
                            <span className="btn__text">Join Discord</span>
                        </a>
                    </Link>
                    <Link href="/curriculum">
                        <a className="btn btn--whiteBorder">
                            <span className="btn__text">School of Ducks</span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.scroll}>
                <svg width="42" height="88" viewBox="0 0 42 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="44" r="20" stroke="#626262" strokeWidth="2"/>
                <path d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z" fill="#626262" />
                <path d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z" fill="#626262" />
                </svg>
            </div>
        </section>
    );
}