import React, {useState} from "react";
import './header.css'
import logo from '../../static/logo_new.webp'
import {Link} from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget'

const Header = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };

    const openNetlify = () => {
        netlifyIdentity.open()
        if(click){
            setClick(false)
        }
    }

    let signText = netlifyIdentity.currentUser() ? 'Log Out' : 'Sign in / Sign up'

    return(
        <div className="navbar">
            <div className="navbar-container">
                <nav className="navbar">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img className="logo-img" src={logo} alt=""/><p className="logo-name">For Coffee Lovers.</p>
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
                        {/*
                        <li className="nav-item">
                            <Link to="/guides" className="nav-links" onClick={closeMobileMenu}>
                            Brewing Guides
                        </Link></li>
                        */}
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        <li className="nav-item" >
                            <div className="nav-links signin" onClick={() =>{openNetlify()}}> {signText}</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;