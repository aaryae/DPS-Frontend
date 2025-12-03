import { navItems } from '@data/navItems.data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className='fixed inset-0 bg-black/50 z-40 lg:hidden' onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-[#f1f1f1] border-r border-gray-300 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full z-50'}
          lg:translate-x-0 lg:z-auto
        `}
      >
        <div className='h-full flex flex-col p-6 overflow-y-auto '>
          {/* Logo section (visible on mobile) */}
          <div className='mb-8 lg:hidden'>
            <div className='text-2xl font-bold text-blue-950'>F-Sewa</div>
          </div>

          {/* Navigation */}
          <nav className={`flex-1 space-y-2 ${isOpen ? '' : 'pt-16'}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `
           ${isActive ? 'bg-blue-950 text-white ' : 'text-gray-700 hover:bg-gray-50'}
          flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors group 
           `
                }
              >
                <FontAwesomeIcon icon={item.icon} className='text-gray-500 group-hover:text-gray-700' />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logout button */}
          <button className='w-full px-4 py-2.5 bg-gray-100 border hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2 mt-4'>
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
