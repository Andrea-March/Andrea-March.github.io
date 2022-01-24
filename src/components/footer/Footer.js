import React from "react";
import './footer.css'
import '../../shared/styles/SharedStyles.css'
import whoweare from "../../static/about.webp";
import {useNavigate} from "react-router-dom";

const Footer = () =>{

    const navigate = useNavigate()
    return(
        <>
            <div className="flex-column mb-10 bg-primary">
                <div className="whoarewe dFlex">
                    <p>About</p>
                </div>
                <div className="whoarewe-row">
                    <img src={whoweare} alt=""/>
                    <div className="find-out-more dFlex">
                        <p>
                            My name is Andrea, and I'm a coffee lover! I'd like to share my passion with everybody, and I have this blog to talk about my favorite beverage!
                        </p>
                        <p>
                            Find out more!
                        </p>
                        <div className="find-out-more-btn dFlex bg-acc" onClick={() => {navigate('/about');}}>
                            <p>- About Me -</p>
                        </div>

                    </div>
                </div>
                <script
                    type="text/javascript"
                    src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
                    data-name="bmc-button"
                    data-slug="cofeelovers"
                    data-color="#d4dbe0"
                    data-emoji=""
                    data-font="Cookie"
                    data-text="Buy me a coffee"
                    data-outline-color="#000000"
                    data-font-color="#000000"
                    data-coffee-color="#FFDD00" />
            </div>

        <div className="footer flex-column">
            <div className="flex-row">
                <p>Copyright @2022 For Coffee Lovers</p>
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
        </>
    )
}

export default Footer;