import { useEffect, useState } from "react";
import styles from "./index.module.css"


export const Header = () => {

    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        let lastScroll = window.scrollY;

        const handleScroll = () => {

            if (window.innerWidth <= 768) {
                setShowAnnouncement(true);
                return;
            }
            const currentScroll = window.scrollY;
            // bajando
            if (currentScroll > lastScroll) {
                setShowAnnouncement(true);
            }
            // subiendo
            else {
                setShowAnnouncement(false);
            }
            lastScroll = currentScroll;
        }

        window.addEventListener("scroll", handleScroll);
        

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);
    console.log(showAnnouncement)

    return (
        <header className={`${styles.header} ${menuOpen ? styles.grow : ""}`}>
            <nav className={styles.headerNav}>

                <div className={styles.headerTop}>
                    <div className={styles.logoContainer}>
                        <a href="/" className={styles.logo}>
                            <img className={styles.logoImage} src="/assets/17.png" alt="Logo" />
                        </a>
                    </div>
                    {
                        showAnnouncement && (
                            <div
                                className={`${styles.headerAnnouncement} ${menuOpen ? styles.hidden : ""
                                    }  `}
                            >
                                
                                <p>Available for work</p>
                                <span className={styles.greenCircle}></span>
                            </div>
                        )
                    }
                    <button
                        className={`${styles.menuButton} ${menuOpen ? styles.active : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>


                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""} ${showAnnouncement ? styles.hidden : ""
                                    }`}>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>Home</span>
                            <span className={styles.top}   >Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>About</span>
                            <span className={styles.top}   >About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>Projects</span>
                            <span className={styles.top}   >Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>Resume</span>
                            <span className={styles.top}>Resume</span>
                        </a>
                    </li>
                    <li>
                        <button className={`${styles.contactButton2} ${menuOpen ? styles.active : ""}`}>Contact</button>
                    </li>


                </ul>

                <button className={styles.contactButton}>Contact</button>


            </nav>
        </header>
    )
}