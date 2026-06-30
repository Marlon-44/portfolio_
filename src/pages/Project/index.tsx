import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { Banner } from "./components/Banner";
import styles from "./index.module.css"
import { Title } from "../../shared/components/Title";
import { Description } from "../../shared/components/Description";
import { AllProjectsPagination } from "../../shared/components/AllProjectsPagination";
import { FadeIn } from "../../shared/Animations/FadeInProps";
import { Subtitle } from "./components/SubTitle";
export const ProjectPage = () => {

    const { id } = useParams();

    const project = projects.find(
        p => p.id === Number(id)
    );

    if (!project) {
        return <h1>Proyecto no encontrado</h1>
    }


    return (
        <div className={styles.projectPage}>

            <Banner project={project} />
            <FadeIn>
                <div className={styles.projectImage}>
                    <img src={project.image} alt="" />
                </div>
            </FadeIn>


            <section className={styles.studyCaseSection}>
                <FadeIn>
                    <Subtitle subtitle="PROBLEM:" />
                </FadeIn>

                {
                    project.problem.map((p, index) => (
                        <FadeIn>
                            <Description description={p} key={index} />
                        </FadeIn>

                    ))
                }
            </section>
            <FadeIn>
                <div className={styles.projectImage}>
                    <img src={project.gallery[0]} alt="" />
                </div>
            </FadeIn>


            <section className={styles.studyCaseSection}>
                <FadeIn>
                    <Subtitle subtitle="SOLUTION:" />
                </FadeIn>

                {
                    project.solution.map((s, index) => (
                        <FadeIn>
                            <Description description={s} key={index} />
                        </FadeIn>

                    ))
                }
            </section>
            <FadeIn>
                <div className={styles.projectImage}>
                    <img src={project.gallery[1]} alt="" />
                    <img src={project.gallery[2]} alt="" />
                </div>
            </FadeIn>


            <section className={styles.studyCaseSection}>
                <FadeIn>
                    <Subtitle subtitle="RESULTS:" />
                </FadeIn>
                
                {
                    project.results.map((r, index) => (
                        <FadeIn>
                            <Description description={r} key={index} />
                        </FadeIn>
                        
                    ))
                }
            </section>

            <AllProjectsPagination projectId={Number(project.id)} />
        </div>
    )
}