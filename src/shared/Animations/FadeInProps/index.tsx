import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

export const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeInOut",
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
        >
            {children}
        </motion.div>
    );
};