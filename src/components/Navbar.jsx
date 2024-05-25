import logo from "../assets/fhd_logo.ico"
import { FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 -10" src={logo} alt="logo" height={75} width={75}/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/fahad-muhammed-836456280/"><FaLinkedin /></a>
                <a href="https://x.com/notfahadh"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/notfahadh"><FaInstagram /></a>
                <a href="https://www.facebook.com/notfahadh"><FaFacebook /></a>
            </div>
    </nav>  
  )
}

export default Navbar