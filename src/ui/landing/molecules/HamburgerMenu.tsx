import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const HamburgerMenu = ({ children }: {children:React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          size="lg"
          className="text-gray-700"
        />
      </button>
      {isOpen && (
  <>
    <div
      className="fixed inset-0 bg-black bg-opacity-30"
      onClick={() => setIsOpen(false)}
    />
    <div className="bg-white shadow-lg border-t absolute top-full left-0 w-full">
      <div className="flex flex-col items-center py-4 space-y-4">
        {children}
      </div>
    </div>
  </>
)}

    </div>
  )
}

export default HamburgerMenu
