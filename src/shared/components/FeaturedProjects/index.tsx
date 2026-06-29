import { Link } from "react-router-dom"
import { Description } from "../Description"
import { ProjectsSlider } from "../ProjectsSlider"
import { Title } from "../Title"
import styles from "./index.module.css"

export const FeaturedProjects =()=>{
    const description = "These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling."

    return(
        <section className={styles.sectionContainer}>
            <Title title ="FEATURED PROJECTS"/>
            <Description description ={description}/>
            <ProjectsSlider/>
            <Link to="/projects" className={styles.browseProjects}>BROWSE ALL PROJECTS</Link>
        </section>
    )
}