import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
return (
    <footer id="footer">
        <div className="container">
            <div className="footer-row">
                <div className="col">
                    <h2>EduPro</h2>
                    <p>Your gateway to quality education and skill development.</p>
                    <div className="social">
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className="col">
                    <h2>Company Info</h2>
                    <ul>
                        <li>
                            <a href="#home">About Us</a>
                        </li>
                        <li>
                            <a href="#courses">Careers</a>
                        </li>
                        <li>
                            <a href="#join-us">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Features</h2>
                    <ul>
                        <li>
                            Business Marketing
                        </li>
                        <li>
                            User Analytic 
                        </li>
                        <li>
                            Live Chat
                        </li>
                        <li>
                            Unlimited Support
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Resources</h2>
                    <ul>
                        <li>
                            IOS & Android Apps
                        </li>
                        <li>
                            Watch a demo
                        </li>
                        <li>
                            Customers
                        </li>
                        <li>
                            API
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© 2026 EduPro.| All rights reserved made by 
                    <a href="https://portfolio-kohl-five-91.vercel.app/" target="_blank">
                        <strong className="text-primary"> Anas Mouatani </strong>
                    </a>
                </p>
            </div>
        </div>

    
    </footer>
)
}

export default Footer
