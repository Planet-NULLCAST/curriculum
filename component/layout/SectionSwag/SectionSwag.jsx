import styles from './SectionSwag.module.scss';

export default function SectionSwag()  {
    return (
        <section className={styles.section}>
            <div className='container mx-auto px-3 md:px-4'>
                <h2>Want #swag?</h2>
                <div className="subtitle">
                    <h3>Join our monthly raffle! </h3>
                </div>
            </div>
        </section>
    );
}