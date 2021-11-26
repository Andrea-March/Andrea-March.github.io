import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <div className="footer dFlex">
            <p>Copyright @2021</p>
            <div className="social dFlex">
                <i className="fa fa-facebook fa-2x"  onClick={()=>{}}/>
                <i className="fa fa-instagram fa-2x" onClick={()=>{}}/>
            </div>
        </div>
    )
}

export default Footer;