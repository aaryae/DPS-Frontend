import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../organisms/Header"
import Sidebar from "../organisms/Sidebar"

const Template = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <div className="flex-1 flex flex-col">
                <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
                
                <main className="flex-1 p-8 mt-14 md:p-8  lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Template