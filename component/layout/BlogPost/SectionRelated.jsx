import styles from './SectionRelated.module.scss';
import Link from "next/link";
import AuthorDetails from '../BlogListing/AuthorDetails';

export default function SectionRelated() {

    return(
        <section className={`${styles.section} py-10 lg:py-20`}>
            <div className="container">
                
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-25 font-extrabold">Related Blogs</h2>
                    <span>
                        <Link href="#">
                            <a className={`${styles.moreLink} linkUnderline`}>View All Blogs</a>
                        </Link>
                    </span>
                </div>

                <div className={styles.relatedList}>
                    
                    <div className={styles.relatedItem}>
                        <figure>
                            <Link href="#">
                                <a><img src="/images/temp/related1.png" alt=""/></a>
                            </Link>
                        </figure>

                        <div className={styles.text}>
                            <p className={styles.date}>12 May 2021</p>
                            <h3>
                                <Link href="#">
                                    <a className="linkUnderline">Active Tab Animation using HTML, CSS and JS...</a>
                                </Link>
                            </h3>
                            <AuthorDetails />
                        </div>

                    </div>



                    
                    <div className={styles.relatedItem}>
                        <figure>
                            <Link href="#">
                                <a><img src="/images/temp/related2.png" alt=""/></a>
                            </Link>
                        </figure>

                        <div className={styles.text}>
                            <p className={styles.date}>12 May 2021</p>
                            <h3>
                                <Link href="#">
                                    <a className="linkUnderline">Active Tab Animation using HTML, CSS and JS...</a>
                                </Link>
                            </h3>
                            <AuthorDetails />
                        </div>

                    </div>



                    
                    <div className={styles.relatedItem}>
                        <figure>
                            <Link href="#">
                                <a><img src="/images/temp/related3.png" alt=""/></a>
                            </Link>
                        </figure>

                        <div className={styles.text}>
                            <p className={styles.date}>12 May 2021</p>
                            <h3>
                                <Link href="#">
                                    <a className="linkUnderline">Active Tab Animation using HTML, CSS and JS...</a>
                                </Link>
                            </h3>
                            <AuthorDetails />
                        </div>

                    </div>




                    
                    <div className={styles.relatedItem}>
                        <figure>
                            <Link href="#">
                                <a><img src="/images/temp/related2.png" alt=""/></a>
                            </Link>
                        </figure>

                        <div className={styles.text}>
                            <p className={styles.date}>12 May 2021</p>
                            <h3>
                                <Link href="#">
                                    <a className="linkUnderline">Active Tab Animation using HTML, CSS and JS...</a>
                                </Link>
                            </h3>
                            <AuthorDetails />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}