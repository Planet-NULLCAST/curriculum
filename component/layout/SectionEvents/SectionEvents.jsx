import styles from './SectionEvents.module.scss';

export default function SectionEvents()  {
    return (
        <section className={styles.section}>
            <div className='container mx-auto px-3 md:px-4'>
                <div className="sectionHeader mb-10 lg:mb-20 xl:mb-32">
                    <h2 className='sectionHeader__title md:w-64'>Upcoming Event</h2>
                    <p className="sectionHeader__description">Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more.</p>
                </div>
                <div className={styles.event}>
                    <figure>
                        <img src="/images/temp/event1.png" alt=""/>
                        <figcaption>
                            <h3>Google I/O Extended 2019 Watch Party - Trivandrum</h3>
                            <p>May 11/2021, 10.00am - 01.00pm</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}