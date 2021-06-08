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
                    <div className="overflow-auto mb-3 992:mb-5 w-full">
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
                    </div>
                    <div className="mb-5 more">
                        <Link href="/">
                            <a className="btn btn--blackborder">Explore topics
                            <svg
                                className="btn__arrow"
                                width="14"
                                height="9"
                                fill="#000"
                                viewBox="0 0 14 9"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.794 3.862L10.119.205a.703.703 0 00-.992.997l2.467 2.454H.704a.703.703 0 100 1.406h10.89L9.127 7.518a.703.703 0 10.992.997l3.674-3.656a.705.705 0 000-.996z"
                                />
                            </svg>
                            </a>
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