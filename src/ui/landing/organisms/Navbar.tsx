import Logo from "@ui/common/atoms/Logo"
import Profile from "../atoms/Profile"
import HamburgerMenu from "../molecules/HamburgerMenu"
import NavbarList from "../molecules/NavbarList"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavbarList />
        </div>
        <div className="hidden md:block">

          <Profile />
        </div>

        {/* Mobile Menu */}
        <HamburgerMenu>
          <NavbarList />
          <Profile />
        </HamburgerMenu>
      </div>
    </nav>
  )
}

export default Navbar
