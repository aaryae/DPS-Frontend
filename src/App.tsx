import Header from '@ui/landing/organisms/Header'
import Sidebar from '@ui/landing/organisms/Sidebar'
import { useState } from 'react'
import './App.css'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
    <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(true)} />
    </>
  )
}

export default App
