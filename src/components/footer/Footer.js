import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <div className="footer flex-column">
            <div className="flex-row">
                <p>Copyright @2021 For Coffee Lovers</p>
                <p>All Rights Reserved</p>
                <div className="social flex-row">
                    <i className="fa fa-facebook fa-2x"  onClick={()=>{}}/>
                    <i className="fa fa-instagram fa-2x" onClick={()=>{}}/>
                </div>
            </div>
            <div className="privacy">
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;