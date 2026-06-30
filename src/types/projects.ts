export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;

    year: string;
    industry: string;
    client: string;
    projectDuration: string;

    image: string;
    gallery: string[];

    technologies: string[];

    github?: string;
    demo?: string;

    problem: string[];
    solution: string[];
    results: string[];

    featured?: boolean;
}