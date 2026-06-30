// src/data/projects.ts

import type { Project } from "../types/projects.ts";

import coverP1 from "/p1.jpg";
import coverP2 from "/p2.jpg";
import coverP3 from "/p3.jpg";
import coverP4 from "/p4.jpg";

import p1_1 from "/assets/p1-1.jpg";
import p1_2 from "/assets/p1-2.jpg";
import p1_3 from "/assets/p1-3.jpg";

import p2_1 from "/assets/p2-1.jpg";
import p2_2 from "/assets/p2-2.jpg";
import p2_3 from "/assets/p2-3.jpg";

import p3_1 from "/assets/p3-1.jpg";
import p3_2 from "/assets/p3-2.jpg";
import p3_3 from "/assets/p3-3.jpg";

import p4_1 from "/assets/p4-1.jpg";
import p4_2 from "/assets/p4-2.jpg";
import p4_3 from "/assets/p4-3.jpg";

export const projects: Project[] = [
    {
        id: 1,
        title: "EmprendIA",
        description:
            "Plataforma impulsada por inteligencia artificial para ayudar a emprendedores a validar ideas de negocio, generar estrategias y automatizar procesos.",

        category: "Frontend",

        year: "2025",
        industry: "Educación / Inteligencia Artificial",
        client: "Proyecto Personal",
        projectDuration: "3 meses",

        image: coverP1,

        gallery: [
            p1_1,
            p1_2,
            p1_3
        ],

        technologies: [
            "React",
            "TypeScript",
            "Tailwind",
            "OpenAI API"
        ],

        github: "https://github.com/...",
        demo: "https://...",

        problem: [
            "Muchos emprendedores tienen ideas prometedoras, pero carecen de herramientas que les permitan evaluar su viabilidad antes de invertir tiempo y dinero.",

            "Los procesos de investigación de mercado y construcción de modelos de negocio suelen ser complejos para personas sin experiencia.",

            "Era necesario crear una experiencia intuitiva que permitiera obtener recomendaciones inteligentes de forma rápida."
        ],

        solution: [
            "Se desarrolló una aplicación web moderna que guía al usuario durante el proceso de validación de su idea mediante asistentes impulsados por IA.",

            "La plataforma genera análisis de mercado, perfiles de cliente y propuestas de valor utilizando modelos de lenguaje.",

            "Toda la interfaz fue diseñada para ofrecer una experiencia clara, rápida y completamente responsive."
        ],

        results: [
            "Reducción significativa del tiempo necesario para validar una idea de negocio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti, aperiam, numquam rerum sit deserunt libero porro odio fugit voluptatibus sint laudantium laborum rem dolore sequi nihil velit blanditiis incidunt.",

            "Experiencia de usuario optimizada mediante una interfaz sencilla e intuitiva. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti, aperiam, numquam rerum sit deserunt libero porro odio fugit voluptatibus sint laudantium laborum rem dolore sequi nihil velit blanditiis incidunt.",

            "Arquitectura preparada para integrar nuevas herramientas de inteligencia artificial. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti, aperiam, numquam rerum sit deserunt libero porro odio fugit voluptatibus sint laudantium laborum rem dolore sequi nihil velit blanditiis incidunt."
        ]
    },

    {
        id: 2,
        title: "AcademiCORE",
        description:
            "Sistema académico integral para instituciones educativas con gestión de estudiantes, docentes y procesos administrativos.",

        category: "Full-stack",

        year: "2025",
        industry: "Educación",
        client: "Proyecto Universitario",
        projectDuration: "5 meses",

        image: coverP2,

        gallery: [
            p2_1,
            p2_2,
            p2_3
        ],

        technologies: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TypeScript"
        ],

        github: "https://github.com/...",
        demo: "https://...",

        problem: [
            "Las instituciones educativas administraban gran parte de la información mediante hojas de cálculo y procesos manuales.",

            "La consulta de información académica requería múltiples plataformas y generaba retrasos."
        ],

        solution: [
            "Se implementó una plataforma full-stack centralizada para gestionar estudiantes, profesores, asignaturas y calificaciones.",

            "El sistema incorpora autenticación por roles y paneles personalizados para cada tipo de usuario.",

            "Se diseñó una API REST escalable que facilita futuras integraciones."
        ],

        results: [
            "Centralización completa de la información académica.",

            "Disminución del tiempo dedicado a tareas administrativas.",

            "Mayor seguridad gracias al manejo de permisos y autenticación."
        ]
    },

    {
        id: 3,
        title: "Cartagena Turística",
        description:
            "Sitio web para la promoción y comercialización de experiencias turísticas premium en Cartagena.",

        category: "Frontend",

        year: "2025",
        industry: "Turismo",
        client: "Cartagena Turística",
        projectDuration: "2 meses",

        image: coverP3,

        gallery: [
            p3_1,
            p3_2,
            p3_3
        ],

        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS"
        ],

        github: "https://github.com/...",
        demo: "https://...",

        problem: [
            "La empresa necesitaba mejorar su presencia digital para atraer turistas nacionales e internacionales.",

            "Los clientes encontraban difícil visualizar los diferentes planes turísticos disponibles."
        ],

        solution: [
            "Se diseñó una página moderna enfocada en la experiencia visual, priorizando fotografías de alta calidad y navegación intuitiva.",

            "Cada servicio cuenta con información organizada y llamadas a la acción claras para facilitar las reservas.",

            "El diseño fue optimizado para dispositivos móviles considerando que la mayoría del tráfico proviene de smartphones."
        ],

        results: [
            "Mejora considerable en la presentación de los servicios turísticos.",

            "Incremento en las consultas provenientes del sitio web.",

            "Mayor confianza transmitida gracias a un diseño profesional."
        ]
    },

    {
        id: 4,
        title: "COL-LAGE",
        description:
            "Plataforma para la gestión colaborativa de proyectos creativos y trabajo en equipo.",

        category: "Frontend",

        year: "2024",
        industry: "Productividad",
        client: "Startup",
        projectDuration: "4 meses",

        image: coverP4,

        gallery: [
            p4_1,
            p4_2,
            p4_3
        ],

        technologies: [
            "React",
            "MongoDB",
            "Express"
        ],

        featured: true,

        problem: [
            "Los equipos creativos utilizaban múltiples herramientas para gestionar proyectos y compartir recursos.",

            "La falta de centralización ocasionaba pérdida de información y baja productividad."
        ],

        solution: [
            "Se construyó una plataforma donde los equipos pueden organizar tareas, compartir archivos y colaborar en tiempo real.",

            "La interfaz fue diseñada para minimizar la curva de aprendizaje y mejorar el flujo de trabajo.",

            "Se implementó una arquitectura preparada para futuras funcionalidades colaborativas."
        ],

        results: [
            "Mayor organización de proyectos.",

            "Mejor comunicación entre los miembros del equipo.",

            "Reducción del tiempo invertido en la coordinación de tareas."
        ]
    }
];