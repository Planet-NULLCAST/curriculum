import styles from './Listing.module.scss';
import Link from "next/link";
import Image from "next/image";
import Fade from 'react-reveal/Fade';

export default function Listing() {
    return (
        <section className={styles.listing}>
            <div className="container">
                <Fade>
                <div className={styles.listing__tab}>
                    <ul>
                        <li>
                        <Link href="/">
                            <a>Latest Updates</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a>Web</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a>Mobile</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a>Javascript</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a>Algorithm</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a>Angular</a>
                        </Link>
                        </li>
                    </ul>
                    <div>
                        <Link href="/">
                            <a>Explore topics</a>
                        </Link>
                    </div>
                </div>
                </Fade>

                <div className={styles.listing__list}>
                    <div className={styles.listing__item}>
                        <figure className={styles.listing__figure}>
                            <Image 
                                src="/images/temp/blog-1.png"
                                alt="Blog image"
                                width={350}
                                height={370}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}