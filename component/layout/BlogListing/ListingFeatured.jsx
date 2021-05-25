import styles from './ListingFeatured.module.scss'
import Link from "next/link";
import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function ListingFeatured() {
    return (
        <section className={styles.section}>
            <div className="container md:flex items-center">
                <div className="w-1/3">
                    <Fade>
                    <figure>
                        <Image
                        src="/images/temp/blog-featured.png"
                        alt="Blog image"
                        width={380}
                        height={318}
                        />
                    </figure>
                    </Fade>
                </div>
                <Fade>
                <div className="w-2/3">
                    <div className="tags">
                        <a href="" className="tags__item">Development</a>
                        <a href="" className="tags__item">Latest Updates</a>
                    </div>
                    <h3>
                    Creative Search Bar and Input Field Design Inspiration
                    </h3>
                    <p>A successful UI design can attract new customers, increase customer engagement and enhance business. A well-designed search bar and input field will enhance user experience.Styled Search Bar Design with Code LinkIn the</p>
                    <p className="time">
                        <span>February 26,2021</span>
                        <span>5 Min Read</span>
                    </p>

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
                </Fade>
            </div>
        </section>
    );
}