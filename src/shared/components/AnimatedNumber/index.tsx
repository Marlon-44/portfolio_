import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
    value: number;
    duration?: number;
}

export const AnimatedNumber = ({
    value,
    duration = 500
}: AnimatedNumberProps) => {

    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    setCount(0);
                }
            },
            {
                threshold: 0.5
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);


    useEffect(() => {

        if (!isVisible) return;
        let current = 0;
        const increment = value / (duration / 16);
        const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(interval);

    }, [isVisible, value, duration]);

    return (
        <h2 ref={ref}>
            {count}
        </h2>
    )

}