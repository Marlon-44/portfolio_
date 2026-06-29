import { useState } from "react";
import { Alert } from "react-bootstrap";

import { Description } from "../Description";
import { Title } from "../Title";

import styles from "./index.module.css";

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



    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();
        setSuccess(false);
        setError("");

        try {

            setLoading(true);
            // Simulación de petición

            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

            console.log(form);
            setSuccess(true);
            setForm(initialState);
        }

        catch {
            setError(
                "Something went wrong. Please try again."
            );
        }

        finally {
            setLoading(false);
        }
    };



    return (

        <section className={styles.container}>

            <div className={styles.imageContainer}>
                <img
                    src="/assets/16.png"
                    alt="LET'S WORK TOGETHER"
                />
                <div className={styles.hi}></div>
            </div>


            <div className={styles.formContainer}>
                <Title title="LET'S WORK TOGETHER" />
                <Description
                    description="
                    Let’s build something impactful together—
                    whether it’s your brand,
                    your website,
                    or your next big idea."
                />

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


                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.double}>
                        <div className={styles.field}>
                            <label htmlFor="name">
                                Name
                            </label>
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
                            <label htmlFor="email">
                                Email
                            </label>
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

                            <option value="job">
                                Full Time Job
                            </option>

                            <option value="freelance">
                                Freelance Project
                            </option>

                            <option value="branding">
                                Branding
                            </option>

                            <option value="web">
                                Web Development
                            </option>
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
                        {
                            loading
                                ? "Sending..."
                                : "SEND MESSAGE"
                        }
                    </button>
                </form>
            </div>
        </section>

    );

};