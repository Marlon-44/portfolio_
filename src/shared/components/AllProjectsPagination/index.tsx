import styles from "./index.module.css";
import { projects } from "../../../data/projects";
import { Title } from "../Title";
import { ProjectCard } from "../ProjectCard";
import { useState } from "react";
import { FadeIn } from "../../Animations/FadeInProps";

type Props = {
    projectId: number;
};

export const AllProjectsPagination = ({ projectId }: Props) => {
    const filteredProjects = projects.filter((p) => p.id !== projectId);

    const [visibleCount, setVisibleCount] = useState(2);

    const projectsToShow = filteredProjects.slice(0, visibleCount);

    const isAtTheEnd = visibleCount >= filteredProjects.length;

    const handleLoadMore = () => {
        if (isAtTheEnd) {
            setVisibleCount(2);
        } else {
            setVisibleCount((prev) => prev + 2);
        }
    };

    return (
        <section className={styles.generalContainer}>
            <FadeIn>
                <div style={{ display: "flex" }}>
                    <Title title="MORE PROJECTS"/>
                    <div className={styles.halfDiv}></div>
                </div>
            </FadeIn>

            <div className={styles.projectsSection}>
                {projectsToShow.map((p, index) => (
                    <FadeIn key={p.id} delay={index * 0.15}>
                        <ProjectCard project={p} />
                    </FadeIn>
                ))}
            </div>

            {filteredProjects.length > 2 && (
                <FadeIn>
                    <button
                        onClick={handleLoadMore}
                        className={styles.loadMoreBtn}
                    >
                        {isAtTheEnd ? "LOAD LESS" : "LOAD MORE"}
                    </button>
                </FadeIn>
            )}
        </section>
    );
};