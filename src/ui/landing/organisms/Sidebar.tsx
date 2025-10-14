import { navItems } from "@data/navItems.data";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@ui/common/atoms/Logo";
const Sidebar = ({ isOpen, onClose }:{isOpen:boolean,onClose:()=>void}) => {
 
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out pt-16 lg:pt-0 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:z-auto`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo section (hidden on desktop) */}
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-sm group"
              >
                <FontAwesomeIcon icon={item.icon} className="text-gray-500 group-hover:text-gray-700" />
                {item.label}
              </a>
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