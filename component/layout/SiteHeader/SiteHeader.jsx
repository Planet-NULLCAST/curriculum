import styles from './SiteHeader.module.scss';

export default function HomeSpotlight() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.mainMenu}>
                    <li><a href="">What the Ducks?</a></li>
                    <li><a href="">Curriculum</a></li>
                    <li><a href="">Leaderboard</a></li>
                    <li><a href="">Community</a></li>
                </ul>
            </nav>
            <div className={styles.wrapBtn}>
                <a href="" className={styles.btn}>Login</a>
                <a href="" className={styles.btn}>Donate</a>
            </div>
        </header>
    );
}