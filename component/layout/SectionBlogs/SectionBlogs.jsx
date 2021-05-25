import styles from './SectionBlogs.module.scss';

export default function SectionBlogs() {
    return (
        <section className='pt-10 lg:pt-20'>
            <div className='container'>
                <div className="sectionHeader">
                    <h2 className='sectionHeader__title md:w-36 lg:w-44 xl:w-56'>Series of Blogs</h2>
                    <p className="sectionHeader__description">Get the latest scoop from the world of tech ranging from javascript to AI and other crazy hacks from dev ducks across the globe.</p>
                </div>
                <div className={styles.blogList}>

                    <div className={styles.blogItem}>
                        <figure className={styles.blogImage}>
                            <img src="/images/temp/blog1.png" className="w-full" alt=""/>
                        </figure>
                        <h3>
                            <a href="">All you need to know about Supabase</a>
                        </h3>
                        <div className="authorDetails">
                            <div className="authorDetails__icon">
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className="authorDetails__text">
                                <h4 className="authorDetails__title">
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex items-center">
                                    <h5 className="authorDetails__position">Master Ninja</h5>
                                    <div className="authorDetails__points">
                                        <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l.938 7.219L8 16c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8z" fill="#F66"/><path d="M16 8c0 4.422-3.578 8-8 8V0c4.422 0 8 3.578 8 8z" fill="#E62E6B"/><path d="M8 2.444l.625 4.337L8 12.324l-2.976.658a.47.47 0 01-.566-.4l-.39-3.161-1.456-2.608a.47.47 0 01.194-.645L5.57 4.733l2.093-2.147A.468.468 0 018 2.444H8z" fill="#FC6"/><path d="M13.389 6.811l-1.443 2.61-.404 3.163a.47.47 0 01-.567.398l-2.967-.66-.008.002v-9.88c.127 0 .247.051.334.14l2.11 2.15 2.751 1.435c.233.122.321.411.194.642z" fill="#FFA64D"/><path d="M8 7.157l.24-.449L8 6.22H6.992a.47.47 0 00-.47.468v3.563a.469.469 0 00.938 0V9.169l.524-.002H8l.177-.51L8 8.228h-.016l-.52.002-.002-1.075h.522a.29.29 0 01.016 0z" fill="#E62E6B"/><path d="M8 6.22v.937c.294.008.54.25.54.536a.553.553 0 01-.54.536v.938a1.485 1.485 0 001.477-1.474c0-.807-.66-1.465-1.477-1.474z" fill="#B32453"/></svg>
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
                        <div className="authorDetails">
                            <div className="authorDetails__icon">
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className="authorDetails__text">
                                <h4 className="authorDetails__title">
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex items-center">
                                    <h5 className="authorDetails__position">Master Ninja</h5>
                                    <div className="authorDetails__points">
                                        <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l.938 7.219L8 16c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8z" fill="#F66"/><path d="M16 8c0 4.422-3.578 8-8 8V0c4.422 0 8 3.578 8 8z" fill="#E62E6B"/><path d="M8 2.444l.625 4.337L8 12.324l-2.976.658a.47.47 0 01-.566-.4l-.39-3.161-1.456-2.608a.47.47 0 01.194-.645L5.57 4.733l2.093-2.147A.468.468 0 018 2.444H8z" fill="#FC6"/><path d="M13.389 6.811l-1.443 2.61-.404 3.163a.47.47 0 01-.567.398l-2.967-.66-.008.002v-9.88c.127 0 .247.051.334.14l2.11 2.15 2.751 1.435c.233.122.321.411.194.642z" fill="#FFA64D"/><path d="M8 7.157l.24-.449L8 6.22H6.992a.47.47 0 00-.47.468v3.563a.469.469 0 00.938 0V9.169l.524-.002H8l.177-.51L8 8.228h-.016l-.52.002-.002-1.075h.522a.29.29 0 01.016 0z" fill="#E62E6B"/><path d="M8 6.22v.937c.294.008.54.25.54.536a.553.553 0 01-.54.536v.938a1.485 1.485 0 001.477-1.474c0-.807-.66-1.465-1.477-1.474z" fill="#B32453"/></svg>
                                        </div>
                                        <span>1000</span>
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
                        <div className="authorDetails">
                            <div className="authorDetails__icon">
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className="authorDetails__text">
                                <h4 className="authorDetails__title">
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex items-center">
                                    <h5 className="authorDetails__position">Master Ninja</h5>
                                    <div className="authorDetails__points">
                                        <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l.938 7.219L8 16c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8z" fill="#F66"/><path d="M16 8c0 4.422-3.578 8-8 8V0c4.422 0 8 3.578 8 8z" fill="#E62E6B"/><path d="M8 2.444l.625 4.337L8 12.324l-2.976.658a.47.47 0 01-.566-.4l-.39-3.161-1.456-2.608a.47.47 0 01.194-.645L5.57 4.733l2.093-2.147A.468.468 0 018 2.444H8z" fill="#FC6"/><path d="M13.389 6.811l-1.443 2.61-.404 3.163a.47.47 0 01-.567.398l-2.967-.66-.008.002v-9.88c.127 0 .247.051.334.14l2.11 2.15 2.751 1.435c.233.122.321.411.194.642z" fill="#FFA64D"/><path d="M8 7.157l.24-.449L8 6.22H6.992a.47.47 0 00-.47.468v3.563a.469.469 0 00.938 0V9.169l.524-.002H8l.177-.51L8 8.228h-.016l-.52.002-.002-1.075h.522a.29.29 0 01.016 0z" fill="#E62E6B"/><path d="M8 6.22v.937c.294.008.54.25.54.536a.553.553 0 01-.54.536v.938a1.485 1.485 0 001.477-1.474c0-.807-.66-1.465-1.477-1.474z" fill="#B32453"/></svg>
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
                        <div className="authorDetails">
                            <div className="authorDetails__icon">
                                <a href="">
                                    <img src="/images/temp/avatar1.png" className="w-full" alt=""/>
                                </a>
                            </div>
                            <div className="authorDetails__text">
                                <h4 className="authorDetails__title">
                                    <a href="">Allie Grater</a>
                                </h4>
                                <div className="flex items-center">
                                    <h5 className="authorDetails__position">Master Ninja</h5>
                                    <div className="authorDetails__points">
                                        <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l.938 7.219L8 16c-4.422 0-8-3.578-8-8 0-4.422 3.578-8 8-8z" fill="#F66"/><path d="M16 8c0 4.422-3.578 8-8 8V0c4.422 0 8 3.578 8 8z" fill="#E62E6B"/><path d="M8 2.444l.625 4.337L8 12.324l-2.976.658a.47.47 0 01-.566-.4l-.39-3.161-1.456-2.608a.47.47 0 01.194-.645L5.57 4.733l2.093-2.147A.468.468 0 018 2.444H8z" fill="#FC6"/><path d="M13.389 6.811l-1.443 2.61-.404 3.163a.47.47 0 01-.567.398l-2.967-.66-.008.002v-9.88c.127 0 .247.051.334.14l2.11 2.15 2.751 1.435c.233.122.321.411.194.642z" fill="#FFA64D"/><path d="M8 7.157l.24-.449L8 6.22H6.992a.47.47 0 00-.47.468v3.563a.469.469 0 00.938 0V9.169l.524-.002H8l.177-.51L8 8.228h-.016l-.52.002-.002-1.075h.522a.29.29 0 01.016 0z" fill="#E62E6B"/><path d="M8 6.22v.937c.294.008.54.25.54.536a.553.553 0 01-.54.536v.938a1.485 1.485 0 001.477-1.474c0-.807-.66-1.465-1.477-1.474z" fill="#B32453"/></svg>
                                        </div>
                                        <span>1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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