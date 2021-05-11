import styles from './SectionBlogs.module.scss';

export default function SectionBlogs() {
    return (
        <section className='py-10 lg:py-20'>
            <div className='container mx-auto'>
                <div className="sectionHeader md:flex justify-between items-center">
                    <h2 className='font-darker text-gray-01 font-extrabold leading-none text-64 lg:w-3/12 text-right'>Series of Blogs</h2>
                    <p className="description font-bold text-18 lg:w-1/2 text-right">Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more.</p>
                </div>
                <div className={styles.blogGrid}>
                    <div className={styles.blogGrid__item}>
                        <figure>
                            <img src="/public/images/temp/blog1.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}