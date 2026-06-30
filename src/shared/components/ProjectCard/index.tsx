import { Link } from "react-router-dom"
import type { Project } from "../../../types/projects"
import { Category } from "../Category"
import { Description } from "../Description"
import styles from "./index.module.css"

// Convención: 'Props' con mayúscula y más descriptivo si crece el archivo
type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Link to={`/project/${project.id}`} className={styles.cardLink}>
            {/* Cambiado div por article para mejor semántica */}
            <article className={styles.cardContainer}>
                <div className={styles.cardImage}>
                    {/* Accesibilidad mejorada con un alt descriptivo */}
                    <img src={project.image} alt={`Miniatura del proyecto ${project.title}`} />
                </div>
                
                <Category category={project.category} />
                <h2>{project.title}</h2>
                <Description description={project.description} />
            </article>
        </Link>
    )
}