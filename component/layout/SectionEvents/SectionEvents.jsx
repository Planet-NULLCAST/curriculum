import styles from './SectionEvents.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function SectionEvents()  {
    return (
        <section className={styles.section}>
            <div className='container'>
                <Fade>
                <div className="sectionHeader mb-10 lg:mb-20 xl:mb-32">
                    <h2 className='sectionHeader__title md:w-64'>See what Quacking?</h2>
                    <p className="sectionHeader__description">Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more.</p>
                </div>
                </Fade>
                <div className={styles.event}>
                    <figure>
                        <Image
                            src="/images/temp/event1.png"
                            alt=""
                            width={978}
                            height={539} 
                        />
                        <figcaption>
                            <h3>
                                <span>Google I/O Extended 2019 Watch Party - Trivandrum</span>
                            </h3>
                            <p>May 11/2021, 10.00am - 01.00pm</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}