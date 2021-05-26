import styles from './ListingFeatured.module.scss'
import Link from "next/link";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import Details from './Details';

export default function ListingFeatured() {
    return (
        <section className={styles.section}>
            <div className="container container--small md:flex">
                <div className="md:w-1/3 md:pr-6">
                    <Fade>
                    <figure>
                        <Image
                        src="/images/temp/blog-featured.png"
                        alt="Blog image"
                        width={380}
                        height={318}
                        layout="responsive"
                        />
                    </figure>
                    </Fade>
                </div>
                <Fade>
                <div className={` ${styles.text} w-2/3 md:pl-6`}>
                    <div className="tags">
                        <a href="" className="tags__item">Development</a>
                        <a href="" className="tags__item">Latest Updates</a>
                    </div>
                    <h3>
                        <Link href="">
                            <a>Creative Search Bar and Input Field Design Inspiration</a>
                        </Link>
                    </h3>
                    <p>A successful UI design can attract new customers, increase customer engagement and enhance business. A well-designed search bar and input field will enhance user experience.Styled Search Bar Design with Code LinkIn the</p>
                    
                    <Details />
                    
                </div>
                </Fade>
            </div>
        </section>
    );
}