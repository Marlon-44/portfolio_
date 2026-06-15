import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { Prueba } from "../pages/Prueba"

export const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home/>} />
                    <Route path="/prueba" element={<Prueba/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
