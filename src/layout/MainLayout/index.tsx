import { Outlet } from "react-router-dom"
import { Footer } from "../../shared/components/Footer"
import { Header } from "../../shared/components/Header"
import styles from "./index.module.css"

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}