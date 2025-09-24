import Anchor from "../atoms/Anchor";

const NavbarList = () => {
  return (
    <div className="flex gap-6 my-auto">
      <Anchor value="Home" redirect="/home" />
      <Anchor value="About" redirect="/about" />
      <Anchor value="Contact Us" redirect="/contact-us" />
      <Anchor value="How it works?" redirect="/how-it-works" />
      <Anchor value="Send money" redirect="/send-money" />
    </div>
  )
}

export default NavbarList;