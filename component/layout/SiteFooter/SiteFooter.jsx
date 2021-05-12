import styles from './SiteFooter.module.scss';

export default function HomeSpotlight() {
    return (
        <footer className={styles.footer}>
            <div className="container mx-auto px-2 md:px-0">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <h2 className="font-darker font-black text-64 leading-none mb-12">Subscribe Our Newsletter </h2>
                        <form className={styles.form}>
                            <input type="text" className={styles.email} placeholder="Enter your mail" />
                            <button className="btn btn--subscribe">
                                <span className="btn__text">Subscribe</span>
                            </button>
                        </form>
                        <ul className={styles.nevFooter}>
                            <li>
                                <a href="">What the Ducks?</a>
                            </li>
                            <li>
                                <a href="">Curriculum</a>
                            </li>
                            <li>
                                <a href="">Leaderboard</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <div className={styles.socialWrap}>
                            <a href="" className={styles.twitter}>
                                <img src="/images/twitter-large.svg" alt=""/>
                            </a>
                            <a href="" className={styles.linkedin}>
                                <img src="/images/linkedin-large.svg" alt=""/>
                            </a>
                            <a href="" className={styles.discord}>
                                <img src="/images/discord-large.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>Made with <span className={styles.red}>❤️</span> by Neoito Ducks</p>
                </div>
            </div>
        </footer>
    );
}