import { useEffect, useState } from "react";
import styles from "./index.module.css"
import { Link } from "react-router-dom";


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


                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""} ${showAnnouncement ? styles.hidden : ""}`}>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>Home</span>
                            <span className={styles.top}   >Home</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/about" className={styles.cube_link}>
                            <span className={styles.front}>About</span>
                            <span className={styles.top}   >About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={styles.cube_link}>
                            <span className={styles.front}>Projects</span>
                            <span className={styles.top}   >Projects</span>
                        </Link>
                    </li>
                    <li>
                        <a href="/" className={styles.cube_link}>
                            <span className={styles.front}>Resume</span>
                            <span className={styles.top}>Resume</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/contactme" className={`${styles.contactButton2} ${menuOpen ? styles.active : ""}`}>Contact</Link>
                    </li>


                </ul>

                <Link  to="/contactme" className={styles.contactButton}>Contact</Link>


            </nav>
        </header>
    )
}