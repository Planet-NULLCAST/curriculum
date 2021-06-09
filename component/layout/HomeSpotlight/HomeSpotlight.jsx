import styles from './HomeSpotlight.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomeSpotlight() {

    useEffect(function mount() {

        const title1 = document.getElementById('title1');
        const title2 = document.getElementById('title2');
        const title3 = document.getElementById('title3');

        const onScroll = () => {
            anim(title1, title2, title3);
        };

        window.addEventListener("scroll", onScroll);
        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });


    return (
        <section className={styles.spotlight}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div>
                <h2>
                    <span className={styles.spotlight__title} id="title1">Planet Nullcast</span>
                    <span className={styles.spotlight__title} id="title2">A Place where</span>
                    <span className={styles.spotlight__title} id="title3">code-crazy devs chill!</span>
                </h2>
                <div className={styles.btnWrap}>
                    <Link href="https://discord.com/invite/5byDDp2qbK">
                        <a className="btn btn--whiteBorder" target="_blank">
                            <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M5 7h30v24H5z"/><path d="M5.116 36.21h24.36l-1.164-3.767c.173.15 9.98 8.557 9.98 8.557V4.228C38.176 1.942 36.208 0 33.77 0L5.125.005C2.687.005.709 1.951.709 4.237V31.98c0 2.41 1.975 4.23 4.407 4.23zm18.02-26.502l-.056.021.02-.02h.036zM10.1 11.876c3.131-2.279 6.034-2.17 6.034-2.17l.234.231c-3.832.914-5.57 2.626-5.57 2.626.178-.038 7.915-4.501 17.29.113 0 0-1.74-1.6-5.336-2.626l.317-.313c.498.002 3.128.094 5.944 2.153 0 0 3.15 5.381 3.15 11.992-.104-.126-1.954 2.847-6.716 2.95 0 0-.806-.913-1.38-1.71 2.785-.799 3.827-2.398 3.827-2.398-5.42 3.413-10.172 2.88-15.855.574-.053 0-.077-.024-.105-.051v-.01c-.027-.026-.05-.051-.104-.051h-.102a5.783 5.783 0 00-.581-.342s1.04 1.599 3.714 2.398c-.702.802-1.398 1.712-1.398 1.712-4.759-.113-6.495-3.085-6.495-3.085 0-6.622 3.132-11.993 3.132-11.993z" fill="#5C6BC0"/><path d="M23.444 21.817c1.215 0 2.204-1.025 2.204-2.289 0-1.255-.984-2.28-2.204-2.28v.005c-1.21 0-2.2 1.021-2.204 2.285 0 1.254.99 2.28 2.204 2.28zM15.553 21.817c1.215 0 2.204-1.025 2.204-2.289 0-1.255-.982-2.28-2.197-2.28l-.007.005c-1.214 0-2.203 1.021-2.203 2.285 0 1.254.989 2.28 2.203 2.28z" fill="#5C6BC0"/></svg>
                            <span className="btn__text">Join Discord</span>
                        </a>
                    </Link>
                    <Link href="/curriculum">
                        <a className="btn btn--whiteBorder">
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M33.033 18.116a1.516 1.516 0 01-.093-1.613 11.133 11.133 0 001.344-5.375C34.254 4.94 29.141-.08 22.954 0 16.848.08 11.92 5.056 11.92 11.182c0 2.48.807 4.77 2.173 6.625a2.1 2.1 0 01-.117 2.651c-1.013 1.123-3.195 1.852-7.815-1.24a3.065 3.065 0 00-4.741 2.094C.6 26.799.497 39 15.765 39h5.415c14.32 0 18.135-12.203 11.853-20.884z" fill="#F4D05F"/><path d="M13.975 20.458c-.299.332-.7.63-1.237.804 1.864.448 2.957-.1 3.591-.804a2.1 2.1 0 00.118-2.651 11.132 11.132 0 01-2.173-6.625c0-5.776 4.38-10.529 10-11.12a11.188 11.188 0 00-1.32-.061C16.848.08 11.92 5.056 11.92 11.182c0 2.48.807 4.77 2.173 6.625a2.1 2.1 0 01-.118 2.651zM3.774 21.313a3.07 3.07 0 011.85-2.38 3.06 3.06 0 00-1.175-.237 3.065 3.065 0 00-3.03 2.617C.602 26.799.498 39 15.766 39h2.354C2.851 39 2.955 26.8 3.774 21.313z" fill="#FFB641"/><path d="M6.133 26.229a1.982 1.982 0 00-.274 2.484c1.486 2.303 5.207 6.573 12.368 6.573 4.362 0 8.973-2.728 9.831-7.244.71-3.73-1.466-8.29-5.738-8.093-3.13.144-4.961 2.85-7.607 4.101a18.01 18.01 0 01-5.917 1.623c-.973.096-1.88-.218-2.663.556z" fill="#EAA12C"/><path d="M29.193 8c-.365 0-.696-.307-.784-.763l-.387-2.018c-.103-.533.166-1.067.599-1.192.433-.126.867.204.97.736l.387 2.018c.103.533-.166 1.067-.599 1.192a.67.67 0 01-.186.027z" fill="#313131"/><path d="M32.572 5.255s.244 3.491-1.373 5.073c-1.618 1.58 1.078 4.06 4.276 1.725.46-.336.925-.55 1.385-.668a1.34 1.34 0 001.01-1.295 1.33 1.33 0 00-.948-1.279 3.348 3.348 0 00-1.41-.1s1.934-1.687 1.456-3.638c-.155-.63-.904-.893-1.435-.52-.688.481-1.755.99-2.96.702z" fill="#FFB641"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h39v39H0z"/></clipPath></defs></svg>
                            <span className="btn__text">School of Ducks</span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.scroll}>
                <svg width="42" height="88" viewBox="0 0 42 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="44" r="20" stroke="#626262" strokeWidth="2"/>
                <path d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z" fill="#626262" />
                <path d="M20.3 54.04l-5.9-5.9a1.044 1.044 0 010-1.482 1.044 1.044 0 011.481 0l4.111 4.111V35.053a1.053 1.053 0 112.107 0v15.708l4.111-4.111a1.044 1.044 0 011.482 0c.41.41.41 1.07 0 1.481l-5.901 5.901a1.043 1.043 0 01-.745.309c-.274 0-.54-.095-.745-.3z" fill="#626262" />
                </svg>
            </div>
        </section>
    );
}


const anim = (title1, title2, title3) => {
    const scrollValue = document.documentElement.scrollTop;
    console.log(1 + (scrollValue / 100));
    title1.style.transform = 'rotate('+ (scrollValue / -40)+'deg) translateY('+ (scrollValue / 30) +'px)';
    title2.style.transform = 'translateY('+ (scrollValue / 10) +'px)';
    title3.style.transform = 'rotate('+ (scrollValue / 50 - 4.58)+'deg) scale('+ (1 + (scrollValue / 5000)) +') translateY('+ (scrollValue / 20) +'px)';
}