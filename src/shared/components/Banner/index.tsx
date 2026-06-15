import { useEffect, useState } from 'react';
import styles from './index.module.css';

export const Banner = () => {

    const [rotationY, setRotationY] = useState(0);
    const [rotationX, setRotationX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            if (window.innerWidth <= 768) {

                setRotationX(0);
                setRotationY(0);
                setTranslateX(0);

                return;
            }

            const scroll = window.scrollY;

            // Puedes ajustar este valor
            const progress = Math.min(scroll / 600, 1);

            // Giro principal
            setRotationY(progress * 180);

            // Pequeña inclinación
            setRotationX(progress * -8);

            // Movimiento lateral
            setTranslateX(progress * 120);

        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        }

    }, []);


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
                <div className={styles.hi}>
                    <p>Hi!</p>
                </div>
            </div>

            <div
                className={styles.banner__image}
                style={{
                    transform: `
                        perspective(1500px)
                        translateX(${translateX}%)
                        rotateX(${rotationX}deg)
                        rotateY(${rotationY}deg)
                    `
                }}
            >
                <img
                    src="/assets/16.png"
                    alt="Marlon Almanza"
                />


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