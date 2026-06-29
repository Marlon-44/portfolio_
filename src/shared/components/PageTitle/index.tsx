import styles from "./index.module.css"

type props ={
    text: string
}
export const PageTitle =({text}:props)=>{
    return(
        <h2 className={styles.title}>{text}</h2>
    )
}