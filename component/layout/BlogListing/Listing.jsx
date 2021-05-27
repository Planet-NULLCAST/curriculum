import styles from './Listing.module.scss';
import Link from "next/link";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import ListingItem from './ListingItem'

export default function Listing() {
    return (
        <section className={styles.listing}>
            <div className="container container--small">
                <Fade>
                <div className={styles.listing__tab}>
                    <ul className="tags tags--large">
                        <li>
                        <Link href="/">
                            <a className="tags__item">Latest Updates</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a className="tags__item">Web</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a className="tags__item">Mobile</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a className="tags__item">Javascript</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a className="tags__item">Algorithm</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a className="tags__item">Angular</a>
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
                    <ListingItem />
                </div>
                <div className={styles.wrapBtn}>
                    <Link href="#">
                        <a className="btn btn--gray">
                            <span className="btn__text">Load more</span>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}