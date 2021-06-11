import styles from './SectionAuthor.module.scss';
import Link from "next/link";
import AuthorDetails from '../BlogListing/AuthorDetails';

export default function SectionAuthor(props) {
    const { username, bio } = props.primaryAuthor;
    console.log(props);
    return(
        <section className={`${styles.section} py-10 lg:py-20`}>
            <div className="container container--post">
                <div className="flex items-center justify-between mb-7">
                    <h2>About the Author</h2>
                    <span>
                        <Link href="#">
                            <a className={`${styles.profileLink} linkUnderline`}>View Profile</a>
                        </Link>
                    </span>
                </div>
                <div className={styles.widget}>
                    <div className={styles.details}>
                        
                        <AuthorDetails 
                          username={username}
                        />

                        <div className={styles.stats}>
                            <div className={styles.statsItem}>
                                <strong>1157</strong>
                                <span>Blogs</span>
                            </div>
                            <div className={styles.statsItem}>
                                <strong>45</strong>
                                <span>Followers</span>
                            </div>
                            <div className={styles.statsItem}>
                                <strong>678</strong>
                                <span>Following</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>{bio}</p>
                        {!bio && (
                        <p>ML data annotations made super easy. Just upload data, invite your team and build training/evaluation dataset in hours.ML data annotations made super easy. Just upload data, invite your team.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}