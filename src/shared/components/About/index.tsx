import { ContactInfo } from "../ContactInfo"
import { Description } from "../Description"
import { NumericData } from "../NumericData"
import { Socials } from "../Socials"
import { Title } from "../Title"
import styles from "./index.module.css"

export const About = ()=> {
    const description = "Hi, I'm Marlon - a Web development professional with a solid foundation in HTML, CSS, JavaScript, Typescript, React, C# and .Net Core, focused on creating clean, functional, and responsive interfaces."
    return (
        <div className={styles.about}>
            <Title title="ABOUT ME"/>
            <Description description={description}/>
            <NumericData experience={1} projects={6} certifications={12}/>
            <ContactInfo phoneNumber="(+57) 30X X45 39XX" email="contactme@gmail.com"/>
            <Socials/>
            <button className={styles.contactButton}>
                CONTACT ME 
            </button>
        </div>
    )
}