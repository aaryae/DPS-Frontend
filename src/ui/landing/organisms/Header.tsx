import { faBars, faBell, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "@ui/common/atoms/Logo"
import { useState } from "react"

const Header = ({ onMenuToggle }:any) => {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-600" />
          </button>
          <Logo />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
              aria-label="Notifications"
            >
              <FontAwesomeIcon icon={faBell} className="text-gray-600" size="lg" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <div className="text-sm text-gray-600">No new notifications</div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
              aria-label="Profile menu"
            >
              <div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-white" size="sm" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-gray-700">You</span>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">aaryae</p>
                  <p className="text-xs text-gray-500">aaryadangol.com.np</p>
                </div>
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;