import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { AboutPage } from "../pages/About"
import { ContactPage } from "../pages/Contact"
import { ProjectPage } from "../pages/Project"
import { ProjectsPage } from "../pages/Projects"

export const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home/>} />
                    <Route path="/project/:id" element={<ProjectPage/>} />
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/contactme" element={<ContactPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
