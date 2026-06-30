import { Link } from "react-router-dom"
import { Description } from "../Description"
import { ProjectsSlider } from "../ProjectsSlider"
import { Title } from "../Title"
import styles from "./index.module.css"
import { FadeIn } from "../../Animations/FadeInProps"

export const FeaturedProjects =()=>{
    const description = "These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling."

    return(
        <section className={styles.sectionContainer}>
            <FadeIn>
                <Title title ="FEATURED PROJECTS"/>
            </FadeIn>
            <FadeIn>
                <Description description ={description}/>
            </FadeIn>
            
            <ProjectsSlider/>
            
            <Link to="/projects" className={styles.browseProjects}>BROWSE ALL PROJECTS</Link>
            
        </section>
    )
}