
import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.infoSection}>
                <div className={styles.info}>
                    <p >Email: </p>
                    <h3>contactme@gmail.com</h3>
                </div>

                <div className={styles.info}>
                    <p >Call today: </p>
                    <h3>302 445 3961</h3>
                </div>
                <div className={styles.info}>
                    <p>Social: </p>
                    <div className={styles.socialContainer}>
                        <img className={styles.socialIcon} src="/assets/linkedin.svg" alt="LinkedIn" />
                        <img className={styles.socialIcon} src="/assets/github.svg" alt="Github" />
                        <img className={styles.socialIcon} src="/assets/instagram.svg" alt="Instagram" />
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.bottom}>
                <p>Developed by Marlon Almanza. Designed by Duncan Shen.</p>
            </div>

        </footer>
    )
}
