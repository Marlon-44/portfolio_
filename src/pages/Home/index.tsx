import { About } from "../../shared/components/About"
import { Banner } from "../../shared/components/Banner"
import styles from "./index.module.css"

export const Home = () => {
    return (
        <div className={styles.container}>
            <Banner/>
            <About/>
        </div>
    )
}