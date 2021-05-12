import styles from './SectionBlogs.module.scss';

export default function SectionBlogs() {
    return (
        <section className='pt-10 lg:pt-20'>
            <div className='container mx-auto px-3 md:px-4'>
                <div className="sectionHeader">
                    <h2 className='sectionHeader__title md:w-56'>Series of Blogs</h2>
                    <p className="sectionHeader__description">Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more.</p>
                </div>
                <div className={styles.blogList}>

                    <div className={styles.blogItem}>
                        <figure className={styles.blogImage}>
                            <img src="/images/temp/blog1.png" className="w-full" alt=""/>
                        </figure>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <div className={styles.author}>
                            <div className={styles.icon}>
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className={styles.details}>
                                <h4>
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex">
                                    <h5>Master Ninja</h5>
                                    <div className={styles.points}>
                                        <div>

                                        </div>
                                        <span>1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.blogItem}>
                        <figure className={styles.blogImage}>
                            <img src="/images/temp/blog2.png" className="w-full" alt=""/>
                        </figure>
                        <h3>
                            <a href="">Creative Search Bar and Input Field Design Inspiration</a>
                        </h3>
                        <div className={styles.author}>
                            <div className={styles.icon}>
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className={styles.details}>
                                <h4>
                                <a href="">Paige Turner</a>
                                </h4>
                                <div className="flex">
                                    <h5>Master Ninja</h5>
                                    <div className={styles.points}>
                                        <div>
                                            
                                        </div>
                                        <span>750</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.blogItem}>
                        <figure className={styles.blogImage}>
                            <img src="/images/temp/blog3.png" className="w-full" alt=""/>
                        </figure>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <div className={styles.author}>
                            <div className={styles.icon}>
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className={styles.details}>
                                <h4>
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex">
                                    <h5>Master Ninja</h5>
                                    <div className={styles.points}>
                                        <div>

                                        </div>
                                        <span>1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.blogItem}>
                        <figure className={styles.blogImage}>
                            <img src="/images/temp/blog4.png" className="w-full" alt=""/>
                        </figure>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <div className={styles.author}>
                            <div className={styles.icon}>
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className={styles.details}>
                                <h4>
                                <a href="">Paige Turner</a>
                                </h4>
                                <div className="flex">
                                    <h5>Master Ninja</h5>
                                    <div className={styles.points}>
                                        <div>
                                            
                                        </div>
                                        <span>750</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cta text-center">
                    <a href="" className="btn">
                        <span className="btn__text">View all our Latest Blogs</span>
                    </a>
                </div>
            </div>
        </section>
    );
}