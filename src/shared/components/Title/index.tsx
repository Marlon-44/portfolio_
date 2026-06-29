
import styles from "./index.module.css"

type propType ={
    title: string
}


export const Title =({title}:propType)=>{
    return(
        <h2 className={styles.title}> {title}</h2>
    )
}