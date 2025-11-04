import { navItems } from "@data/navItems.data";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@ui/common/atoms/Logo";
import { NavLink } from "react-router-dom";



const Sidebar = ({ isOpen, onClose }:{isOpen:boolean,onClose:()=>void}) => {
 
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000054] bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out  lg:pt-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:z-auto`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo section (hidden on desktop) */}
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          {/* Navigation */}
          {/* className="flex-1 space-y-2"  */}
          <nav className={`flex-1 space-y-2 ${isOpen? "":"pt-16"}`} >
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
          <FontAwesomeIcon
            icon={item.icon}
            className="text-gray-500 group-hover:text-gray-700"
          />
          {item.label}
        </NavLink>
            ))}
          </nav>

          {/* Logout button */}
          <button className="w-full px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium text-sm flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar;