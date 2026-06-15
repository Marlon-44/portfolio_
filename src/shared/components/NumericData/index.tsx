import { AnimatedNumber } from "../AnimatedNumber";
import styles from "./index.module.css";

type NumericDataProps = {
    experience: number;
    projects: number;
    certifications: number
}

export const NumericData = ({
    experience,
    projects,
    certifications
}: NumericDataProps) => {

    return (

        <div className={styles.InfoContainer}>

            <div className={styles.dataInfo}>
                <AnimatedNumber value={experience}/>
                <p className={styles.subtitle}>Years of experience</p>
            </div>

            <div className={styles.dataInfo}>
                <AnimatedNumber value={projects}/>
                <p className={styles.subtitle}>Completed projects</p>
            </div>
            <div className={styles.dataInfo}>
                <AnimatedNumber value={certifications}/>
                <p className={styles.subtitle}>Completed certifications</p>
            </div>

        </div>

    )

}