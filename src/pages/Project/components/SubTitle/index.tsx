import styles from "./index.module.css"

type SubtitleProps ={
    subtitle: string
}

export const Subtitle =({subtitle}:SubtitleProps)=>{
    return(
        <h3 className={styles.subtitle}>{subtitle}</h3>
    )
}