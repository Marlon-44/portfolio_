import styles from './index.module.css';

export const Banner = () => {

    return (

        <section className={styles.banner__container}>

            <div className={`${styles.banner__text} ${styles.left}`}>
                <p className={styles.banner__subtitle}>
                    Marlon Almanza
                </p>
                <h1 className={styles.banner__title}>
                    FULLSTACK
                </h1>
            </div>

            <div className={styles.scheme}>

            </div>

            <div className={`${styles.banner__text} ${styles.right}`}>
                <h1 className={styles.banner__title}>
                    DEVELOPER
                </h1>
                
                <p className={styles.banner__subtitle2}>
                    I'm a Colombia-based Full Stack Web Developer building modern websites and web applications.
                </p>
            </div>

        </section>

    )

}