import styles from './SectionVideos.module.scss';

export default function SectionVideos()  {
    return (
        <section className={styles.section}>
            <div className='container mx-auto px-3 md:px-4'>
                <div className={styles.videoList}>

                    <div className={styles.videoItem}>
                        <figure>
                            <img src="/images/temp/video1.png" alt=""/>
                            <a href="" className={styles.play}>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.765 74.031a2.944 2.944 0 01-2.942-2.943V28.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L44.65 73.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L63.476 50 45.71 35.194z" fill="#fff"/><path d="M49.913 100a49.726 49.726 0 01-24.437-6.386 2.942 2.942 0 112.887-5.128c17.169 9.664 38.9 6.676 52.847-7.276C98.42 64 98.42 36 81.21 18.791c-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C75.765 94.98 62.897 100 49.913 100z" fill="#fff"/></svg>
                            </a>
                            <figcaption>
                                <h3>All you need to know about Supabase</h3>
                            </figcaption>
                        </figure>

                    </div>


                    <div className={styles.videoItem}>
                        <figure>
                            <img src="/images/temp/video2.png" alt=""/>
                            <a href="" className={styles.play}>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.765 74.031a2.944 2.944 0 01-2.942-2.943V28.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L44.65 73.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L63.476 50 45.71 35.194z" fill="#fff"/><path d="M49.913 100a49.726 49.726 0 01-24.437-6.386 2.942 2.942 0 112.887-5.128c17.169 9.664 38.9 6.676 52.847-7.276C98.42 64 98.42 36 81.21 18.791c-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C75.765 94.98 62.897 100 49.913 100z" fill="#fff"/></svg>
                            </a>
                            <figcaption>
                                <h3>All you need to know about Supabase</h3>
                            </figcaption>
                        </figure>

                    </div>


                    <div className={styles.videoItem}>
                        <figure>
                            <img src="/images/temp/video3.png" alt=""/>
                            <a href="" className={styles.play}>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.765 74.031a2.944 2.944 0 01-2.942-2.943V28.913a2.943 2.943 0 014.827-2.261l25.306 21.088a2.942 2.942 0 010 4.522L44.65 73.349a2.942 2.942 0 01-1.885.682zm2.944-38.837v29.612L63.476 50 45.71 35.194z" fill="#fff"/><path d="M49.913 100a49.726 49.726 0 01-24.437-6.386 2.942 2.942 0 112.887-5.128c17.169 9.664 38.9 6.676 52.847-7.276C98.42 64 98.42 36 81.21 18.791c-17.21-17.212-45.212-17.21-62.42 0-17.21 17.21-17.21 45.21 0 62.42a2.943 2.943 0 01-4.161 4.162c-19.504-19.505-19.504-51.24 0-70.745 19.504-19.502 51.237-19.503 70.744 0 19.504 19.506 19.504 51.24 0 70.745C75.765 94.98 62.897 100 49.913 100z" fill="#fff"/></svg>
                            </a>
                            <figcaption>
                                <h3>All you need to know about Supabase</h3>
                            </figcaption>
                        </figure>

                    </div>

                </div>
            </div>
        </section>
    );
}