import styles from "./index.module.css"

export const Socials =()=>{
    return(
        <div className={styles.socialContainer}>
            <img className={styles.socialIcon} src="/src/assets/linkedin.svg" alt="LinkedIn" />
            <img className={styles.socialIcon} src="/src/assets/github.svg" alt="Github" />
            <img className={styles.socialIcon} src="/src/assets/instagram.svg" alt="Instagram" />
        </div>
        
    )
}