import styles from './BlogSpotlight.module.scss';
import AuthorDetails from '../BlogListing/AuthorDetails';

export default function BlogSpotlight(props) {
    const { title, bannerImage, createdAt } = props;

    return (
        <>
        <section className={styles.postTitle}>
            <div className="container">
                <div className={styles.title}>
                    {/* <h2>Creative Search Bar and Input Field Design Inspiration</h2> */}
                    <h2>
                        {title}
                    </h2>
                    <h3 className="date">12 May 2021</h3>
                    {/* <h3 className="date">{createdAt}</h3> */}
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.postWrap}>
                <figure>
                    {!bannerImage && (
                      <img src="/images/temp/blogmain.png" alt=""/>
                    )}
                    <img src={bannerImage} alt=""/>
                </figure>
                <div className={styles.author}>
                    <div className={styles.item}>
                        <AuthorDetails />
                    </div>
                    <div className={styles.item}>
                        <AuthorDetails />
                    </div>
                    <div className={styles.item}>
                        <AuthorDetails />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}