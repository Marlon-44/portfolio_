import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { Banner } from "./components/Banner";

export const ProjectPage = () => {

    const { id } = useParams();

    const project = projects.find(
        p => p.id === Number(id)
    );

    if (!project) {
        return <h1>Proyecto no encontrado</h1>
    }

    return (
        <div>
            <Banner project={project}/>
            <h1>{project.title}</h1>

            <img
                src={project.image}
                alt={project.title}
            />

            <p>{project.description}</p>

        </div>
    )
}