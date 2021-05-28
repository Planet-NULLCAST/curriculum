import styles from './BlogSpotlight.module.scss';

export default function BlogSpotlight() {
    return (
        <section className={styles.section}>
            <figure>
                <img src="/images/temp/blogmain.png" alt=""/>
            </figure>
            <div className={styles.author}>
                <div className={styles.thumbnail}>
                    <img src="/images/temp/avatar1.png" alt="" width="70" height="70" />
                </div>
                <h4>
                    <a href="">Allie Grater</a>
                </h4>
                <h5>Master Ninja</h5>
            </div>
        </section>
    );
}