import Header from '@ui/common/organisms/Header'
import Sidebar from '@ui/common/organisms/Sidebar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Template = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex min-h-screen bg-gray-50 w-full'>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* ADD lg:ml-64 here to push content right on desktop */}
      <div className='flex-1 flex flex-col lg:ml-64'>
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className='flex-1 p-6 mt-14 md:p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Template
