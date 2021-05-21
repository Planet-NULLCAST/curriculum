import styles from './ChapterList.module.scss';

export default function ChapterList(){

    return(
        <section className={styles.section}>
            <div className="container container--small">
                <ul className={styles.list}>
                    <li>
                        <div className={styles.text}>
                            <h3>Syntax and Selectors</h3>
                            <p>Learn how to add styles websites with CSS and how to use selectors to apply styles to specific elements.</p>
                            <a href="" className="btn btn--purple">
                                <span className="btn__text">Start</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className={styles.text}>
                            <h3>Syntax and Selectors</h3>
                            <p>Learn how to add styles websites with CSS and how to use selectors to apply styles to specific elements.</p>
                            <a href="" className="btn btn--purple">
                                <span className="btn__text">Start</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="cta text-center">
                    <a href="" className="btn">
                        <span className="btn__text">VIEW MORE</span>
                    </a>
                </div>
            </div>
        </section>
    );

}