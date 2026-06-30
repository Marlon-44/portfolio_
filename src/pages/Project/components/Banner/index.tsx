import { Category } from "../../../../shared/components/Category"
import { Description } from "../../../../shared/components/Description"
import { FadeIn } from "../../../../shared/Animations/FadeInProps"
import { PageTitle } from "../../../../shared/components/PageTitle"
import type { Project } from "../../../../types/projects"
import styles from "./index.module.css"

type props = {
    project: Project
}

export const Banner = ({ project }: props) => {
    return (
        <section className={styles.banner}>
            <FadeIn>
                <Category category={project.category} />
            </FadeIn>
            <FadeIn>
                <PageTitle text={project.title} />
            </FadeIn>
            <FadeIn>
                <Description description={project.description} />
            </FadeIn>
            <FadeIn>
                <div className={styles.data}>
                    <div className={styles.singleDataContainer}>
                        <p className={styles.dataTitle}>Year:</p>
                        <h3 className={styles.dataInfo}>{project.year}</h3>
                    </div>
                    <div className={styles.singleDataContainer}>
                        <p className={styles.dataTitle}>Industry:</p>
                        <h3 className={styles.dataInfo}>{project.industry}</h3>
                    </div>
                    <div className={styles.singleDataContainer}>
                        <p className={styles.dataTitle}>Client</p>
                        <h3 className={styles.dataInfo}>{project.client}</h3>
                    </div>
                    <div className={styles.singleDataContainer}>
                        <p className={styles.dataTitle}>Project Duration</p>
                        <h3 className={styles.dataInfo}>{project.projectDuration}</h3>
                    </div>
                </div>
            </FadeIn>

        </section>
    )
}