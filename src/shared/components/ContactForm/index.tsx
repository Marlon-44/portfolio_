import { useState } from "react";
import { Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser"; // 1. Importamos la librería

import { Description } from "../Description";
import { Title } from "../Title";

import styles from "./index.module.css";
import { FadeIn } from "../../Animations/FadeInProps";

interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

const initialState: FormData = {
    name: "",
    email: "",
    service: "freelance",
    message: "",
};

export const ContactForm = () => {
    const [form, setForm] = useState<FormData>(initialState);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(false);
        setError("");

        try {
            setLoading(true);

            // 1. Acceso a variables de entorno en Vite
            const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            const templateParams = {
                name: form.name,
                email: form.email,
                service: form.service,
                message: form.message,
            };

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            setSuccess(true);
            setForm(initialState);
        } catch (err) {
            console.error("Error al enviar el correo:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <FadeIn>
                    <img
                        src="/assets/16.png"
                        alt="LET'S WORK TOGETHER"
                    />
                </FadeIn>
                <div className={styles.hi}></div>
            </div>

            <div className={styles.formContainer}>
                <FadeIn>
                    <Title title="LET'S WORK TOGETHER" />
                </FadeIn>

                <FadeIn>
                    <Description
                        description="
                    Let’s build something impactful together—
                    whether it’s your brand,
                    your website,
                    or your next big idea."
                    />
                </FadeIn>

                {success && (
                    <Alert
                        variant="success"
                        onClose={() => setSuccess(false)}
                        dismissible
                    >
                        Message sent successfully!
                    </Alert>
                )}

                {error && (
                    <Alert
                        variant="danger"
                        onClose={() => setError("")}
                        dismissible>
                        {error}
                    </Alert>
                )}

                <FadeIn>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.double}>
                            <div className={styles.field}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="service">Service Needed</label>
                            <select
                                id="service"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                            >
                                <option value="Trabajo de tiempo completo">Full Time Job</option>
                                <option value="Freelance">Freelance Project</option>
                                <option value="Landing page">Landing page</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.button}
                        >
                            {loading ? "Sending..." : "SEND MESSAGE"}
                        </button>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
};