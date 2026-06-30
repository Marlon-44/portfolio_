import styles from "./index.module.css"
type props ={
    category: string
}
export const Category =({category}: props)=>{
    return(
        <h3 className={styles.category}>{category}</h3>
    )
}