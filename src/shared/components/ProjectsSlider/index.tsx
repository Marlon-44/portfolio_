import styles from "./index.module.css"
import { projects } from "../../../data/projects"
import { ProjectCard } from "../ProjectCard"

export const ProjectsSlider = () => {
    return (
        <div className={styles.generalContainer}>
            {
                projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project} />
                ))
            }
        </div>
    )
}