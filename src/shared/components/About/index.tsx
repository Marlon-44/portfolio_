import { ContactInfo } from "../ContactInfo"
import { NumericData } from "../NumericData"
import { Socials } from "../Socials"
import styles from "./index.module.css"

export const About = ()=> {
    return (
        <div className={styles.about}>
            <h2 className={styles.title}>ABOUT ME</h2>
            <p className={styles.description}>
                Hi, I'm Marlon - a Web development professional with a solid foundation in
                HTML, CSS, JavaScript, Typescript, React, C# and .Net Core, focused on creating clean, functional, and responsive interfaces.
            </p>
            <NumericData experience={1} projects={6} certifications={12}/>
            <ContactInfo phoneNumber="(+57) 30X X45 39XX" email="contactme@gmail.com"/>
            <Socials/>
            <button className={styles.contactButton}>
                CONTACT ME 
            </button>
        </div>
    )
}