import styles from './CourseJourney.module.scss';
import Image from 'next/image'

export default function CourseJourney() {
    
    return (
        <section className={styles.path}>
            <div className="container container--small">
                <div className={styles.row}>
                    <div className="w-6/12">
                        <h3>Start with HTML</h3>
                        <p>Our online program is an amazing way for children to learn coding from the comfort of your home. The convenience and attentiveness you love about drop-in programs is combined with the extensive coding curriculum of Mighty Coders.</p>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/html5.svg"
                            alt="HTML5"
                            width={143}
                            height={199}
                            layout="fixed"
                            margin={0}
                        />
                    </div>
                    <svg className={styles.svgpath} width="969" height="379" viewBox="0 0 969 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_1" d="M19.5 15v175.5h936V396" stroke="#63717A" strokeDasharray="10 10"/>
                            <path d="M19.5 15v175.5h936V396" stroke="#0a78d9" strokeDasharray="10 10" clipPath="url(#box_1)" strokeWidth="4" />
                        <defs>
                            <clipPath id="box_1"><path fill="#62D32C" d="M0 0h58v53H0z"/></clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.row}>
                    <div className="w-6/12">
                        <h3>Start with HTML</h3>
                        <p>Our online program is an amazing way for children to learn coding from the comfort of your home. The convenience and attentiveness you love about drop-in programs is combined with the extensive coding curriculum of Mighty Coders.</p>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/css3.svg"
                            alt="HTML5"
                            width={143}
                            height={199}
                            layout="fixed"
                            margin={0}
                        />
                    </div>
                    <svg className={styles.svgpath} width="969" height="379" viewBox="0 0 969 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_2" d="M19.5 15v175.5h936V396" stroke="#63717A" strokeDasharray="10 10"/>
                            <path d="M19.5 15v175.5h936V396" stroke="#20d034" strokeDasharray="10 10" clipPath="url(#box_2)" strokeWidth="4" />
                        <defs>
                            <clipPath id="box_2"><path fill="#62D32C" d="M0 0h58v53H0z"/></clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.row}>
                    <div className="w-6/12">
                        <h3>Start with HTML</h3>
                        <p>Our online program is an amazing way for children to learn coding from the comfort of your home. The convenience and attentiveness you love about drop-in programs is combined with the extensive coding curriculum of Mighty Coders.</p>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/browser.svg"
                            alt="HTML5"
                            width={143}
                            height={199}
                            layout="fixed"
                            margin={0}
                        />
                    </div>
                    <svg className={styles.svgpath} width="969" height="379" viewBox="0 0 969 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_3" d="M19.5 15v175.5h936V396" stroke="#63717A" strokeDasharray="10 10"/>
                            <path d="M19.5 15v175.5h936V396" stroke="#f7df2c" strokeDasharray="10 10" clipPath="url(#box_3)" strokeWidth="4" />
                        <defs>
                            <clipPath id="box_3"><path fill="#62D32C" d="M0 0h58v53H0z"/></clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.row}>
                    <div className="w-6/12">
                        <h3>Start with HTML</h3>
                        <p>Our online program is an amazing way for children to learn coding from the comfort of your home. The convenience and attentiveness you love about drop-in programs is combined with the extensive coding curriculum of Mighty Coders.</p>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/images/js.svg"
                            alt="HTML5"
                            width={143}
                            height={199}
                            layout="fixed"
                            margin={0}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}