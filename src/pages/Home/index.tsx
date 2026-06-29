import { About } from "../../shared/components/About"
import { Banner } from "../../shared/components/Banner"
import styles from "./index.module.css"
import { FlipCard } from "../../shared/components/FlipCard"
import { FeaturedProjects } from "../../shared/components/FeaturedProjects"
import { ContactForm } from "../../shared/components/ContactForm"

export const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.firstSection}>
                <FlipCard/>
                <Banner />
                <About />
            </section>
            <FeaturedProjects/>
            <ContactForm/>
        </div>
            
    )
}