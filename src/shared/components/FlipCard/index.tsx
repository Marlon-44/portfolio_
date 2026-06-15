import { useEffect, useState } from "react";
import styles from "./index.module.css"

export const FlipCard = () => {
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
                const maxScroll = window.innerHeight * 0.8;
                const progress = Math.min(
                    scroll / maxScroll,
                    1
                );
                
                setRotationY(progress * 180);
                setRotationX(progress * -8);
                setTranslateX(progress * 120);
            }
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            }
        }, []);
    
    return (
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

            <div className={styles.hi}>
                <p>Hi!</p>
            </div>
        </div>
    )
}