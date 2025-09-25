import Logo from "@ui/common/atoms/Logo"
import Notification from "../atoms/Notification"
import Profile from "../atoms/Profile"

const Header = () => {
  return (

    <nav className="fixed top-0 z-50 w-full shadow-md ">
      <div className='flex justify-between  my-4 mx-8'>
        <Logo/>
        <div className="flex gap-6">
        <Notification/>
        <Profile/>
        </div>
      </div>
    </nav>
  )
}

export default Header
