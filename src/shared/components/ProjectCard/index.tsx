import { Link } from "react-router-dom"
import type { Project } from "../../../types/projects"
import styles from "./index.module.css"

type Props = {
    project: Project
}
export const ProjectCard = ({ project }: Props) => {
    console.log(project)
    return (
        <Link to={`/project/${project.id}`} className={styles.link}>
            <div className={styles.cardContainer}
                style={{ backgroundImage: `url(${project.image})` }}>
                <div className={styles.overlay}></div>
                <div className={styles.info}>
                    <h3>{project.category}</h3>
                    <h2 className={styles.title}>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            </div>
        </Link>

    )
}