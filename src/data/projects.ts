// src/types/project.ts
// src/data/projects.ts

import type { Project } from "../types/projects.ts";
import coverP1 from "/p1.jpg";
import coverP2 from "/p2.jpg";
import coverP3 from "/p3.jpg";
import coverP4 from "/p4.jpg";

export const projects: Project[] = [
    {
        id: 1,
        title: "EmprendIA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex exercitationem voluptatem voluptatum dignissimos possimus",
        category: "Frontend",
        image: coverP1,
        technologies: ["React", "TypeScript", "Tailwind"],
        github: "https://github.com/...",
        demo: "https://..."
    },
    {
        id: 2,
        title: "AcademiCORE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex exercitationem voluptatem voluptatum dignissimos possimus",
        category: "Full-stack",
        image: coverP2,
        technologies: ["React", "TypeScript", "Tailwind"],
        github: "https://github.com/...",
        demo: "https://..."
    },
    {
        id: 3,
        title: "CARTAGENA TURISTICA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex exercitationem voluptatem voluptatum dignissimos possimus",
        category: "Frontend",
        image: coverP3,
        technologies: ["React", "TypeScript", "Tailwind"],
        github: "https://github.com/...",
        demo: "https://..."
    },
    {
        id: 4,
        title: "COL-LAGE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex exercitationem voluptatem voluptatum dignissimos possimus",
        category: "Frontend",
        image: coverP4,
        technologies: ["React", "MongoDB", "Express"],
        featured: true
    }
];
