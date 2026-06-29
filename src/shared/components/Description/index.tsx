import styles from "./index.module.css"
type propsType ={
    description : string;
}
export const Description =({description}:propsType)=>{
    return(
        <p className={styles.description}>
            {description}
        </p>
    )
}