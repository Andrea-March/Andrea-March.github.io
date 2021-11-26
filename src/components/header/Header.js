import React, {useState} from "react";
import './header.css'
import logo from '../../static/coffee2.png'
import {Link} from "react-router-dom";

const Header = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };
    return(
        <>
        <div className="navbar">
            <div className="navbar-container">
                <nav className="navbar">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logo-img" src={logo} /><p className="logo-name">For Coffee Lovers.</p>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-links" onClick={closeMobileMenu}>
                                Articles
                            </Link>
                        </li>
                        <li className="nav-item"> <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link></li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Header;