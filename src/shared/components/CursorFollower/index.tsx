import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export const CursorFollower = () => {

    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const speed = 0.12;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        const animate = () => {
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;
            if (circleRef.current) {
                circleRef.current.style.transform = `
                    translate(
                        ${currentX - 10}px,
                        ${currentY - 10}px
                    )
                `;
            }
            requestAnimationFrame(animate);
        }

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (

        <div
            ref={circleRef}
            className={styles.cursorFollower}
        />
    )

}