import styles from './SectionBlogs.module.scss';
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import AuthorDetails from '../BlogListing/AuthorDetails';

export default function SectionBlogs() {
    return (
        <section className='pt-10 lg:pt-20'>
            <div className='container container--small'>
                <div className="sectionHeader">
                    <Fade>
                    <h2 className='sectionHeader__title md:w-36 lg:w-44 xl:w-56'>Series of Blogs</h2>
                    <p className="sectionHeader__description">Get the latest scoop from the world of tech ranging from javascript to AI and other crazy hacks from dev ducks across the globe.</p>
                    </Fade>
                </div>
                <div className={styles.blogList}>

                    <div className={styles.blogItem}>
                        <Fade>
                        <figure className={styles.blogImage}>
                            <Image
                                src="/images/temp/blog1.png"
                                alt="Blog image"
                                width={528}
                                height={548}
                                className="w-full"
                            />
                        </figure>
                        </Fade>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>

                        <AuthorDetails />
                    </div>


                    <div className={styles.blogItem}>
                        <Fade>
                        <figure className={styles.blogImage}>
                            <Image
                                src="/images/temp/blog2.png"
                                alt="Blog image"
                                width={528}
                                height={548}
                                className="w-full"
                            />
                        </figure>
                        </Fade>
                        <h3>
                            <a href="">Creative Search Bar and Input Field Design Inspiration</a>
                        </h3>
                        <AuthorDetails />
                    </div>


                    <div className={styles.blogItem}>
                        <Fade>
                        <figure className={styles.blogImage}>
                            <Image
                                src="/images/temp/blog3.png"
                                alt="Blog image"
                                width={528}
                                height={548}
                                className="w-full"
                            />
                        </figure>
                        </Fade>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <AuthorDetails />
                    </div>


                    <div className={styles.blogItem}>
                        <Fade>
                        <figure className={styles.blogImage}>
                            <Image
                                src="/images/temp/blog4.png"
                                alt="Blog image"
                                width={528}
                                height={548}
                                className="w-full"
                            />
                        </figure>
                        </Fade>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <AuthorDetails />
                    </div>

                </div>
                <div className="cta text-center">
                    <a href="" className="btn">
                        <span className="btn__text">VIEW ALL OUR LATEST POSTS</span>
                    </a>
                </div>
            </div>
        </section>
    );
}