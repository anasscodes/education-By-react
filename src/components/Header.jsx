import { FaArrowRight } from "react-icons/fa";

function Header() {
return (
    <header id='header'>
        <nav className="navbar">
            <a href="#home" className="logo"> Educational </a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Product</a></li>
                <li><a href="#reviews">Pricing</a></li>
                <li><a href="#join-us">Contact</a></li>
            </ul>
            <div className="account">
                <a href="#">Login</a>
                <a href="#join-us" className="btn-join"> Join Us <FaArrowRight /> </a>
            </div>
        </nav>
        
    </header>
    )
}

export default Header
