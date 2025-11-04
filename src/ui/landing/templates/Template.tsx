
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../organisms/Header"
import Sidebar from "../organisms/Sidebar"

const Template = () => {

        const [sidebarOpen, setSidebarOpen] = useState(false)
        

    return (
        <>
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} />
        <Outlet/>
        </>
    )
}

export default Template