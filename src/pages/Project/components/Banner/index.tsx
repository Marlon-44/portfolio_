import { Title } from "../../../../shared/components/Title"
import type { Project } from "../../../../types/projects"
import styles from "./index.module.css"

type props ={
    project: Project
}

export const Banner=({project}: props)=>{
    return(
        <section className={styles.banner}>
            <Title title={project.title}/>
        </section>
    )
}