import styles from "./index.module.css"


type dataType = {
    phoneNumber: string;
    email: string
}
export const ContactInfo = ({ phoneNumber, email }: dataType) => {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.contactInfo}>
                <h2 className={styles.subtitle}>Call today:</h2>
                <p className={styles.info}>{phoneNumber}</p>
            </div>
            <div className={styles.contactInfo}>
                <h2 className={styles.subtitle}>Email:</h2>
                <p className={styles.info}>{email}</p>
            </div>
            
        </div>

    )
}