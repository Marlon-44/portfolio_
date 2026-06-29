
export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
}