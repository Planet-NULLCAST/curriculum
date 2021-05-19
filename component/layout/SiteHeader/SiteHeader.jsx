import styles from './SiteHeader.module.scss';

export default function HomeSpotlight() {
    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <nav>
                    <ul className={styles.mainMenu}>
                        <li><a href="">What the Ducks?</a></li>
                        <li><a href="">School of Ducks</a></li>
                        <li>
                            <a href="">Write <img src="/images/hand.png" className="ml-1" alt=""/></a>
                        </li>
                        <li><a href="">Community</a></li>
                    </ul>
                </nav>
                <div className={styles.wrapBtn}>
                    <a href="" className="btn btn--black">
                        <span className="btn__text">Login</span>
                        <svg className="btn__arrow" width="14" height="9" fill="none" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg"><path d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z" fill="#fff"/></svg>
                    </a>
                    <a href="" className="btn btn--blackborder">
                        <span className="btn__text">Donate</span>
                    </a>
                </div>
            </div>
        </header>
    );
}