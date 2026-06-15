import { About } from "../../shared/components/About"
import { Banner } from "../../shared/components/Banner"
import styles from "./index.module.css"
import { FlipCard } from "../../shared/components/FlipCard"

export const Home = () => {
    return (
        
            <section className={styles.firstSection}>
                <FlipCard/>
                <Banner />
                <About />
                
            </section>
    )
}