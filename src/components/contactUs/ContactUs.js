import React from "react";

import './ContactUs.css'


const ContactUs = () => {

    return(
        <div className="contact-us">
            <div className="contact-bar">
                Hey There! Let's get in touch!
            </div>
            <div className="contact-form">
                    <p>
                        Hi there! I'm
                    </p>
                    <div className="form-group">
                        <input type="input" className="name-input" autoComplete="off" name="name" id='name' placeholder="Your Name"
                               required/>
                        {/*<label htmlFor="name" id="name-label" className="name-label">Name</label> */}
                    </div>
                    <p>
                        and this is my message for you:
                    </p>
                <textarea placeholder="Be Nice :)" className="message-text" required maxLength={500}/>
                <p className="max-length">max length: 500 words</p>
                <p>
                    I can be contacted back at my email address:
                </p>
                    <input type="email" className="email-input" autoComplete="off" name="mail" id='mail' placeholder="Your Email"
                           required/>
                    {/*<label htmlFor="mail" className="email-label">Email</label> */}
                <div className="button-send">
                    Send!
                </div>

            </div>
        </div>
    )


}


export default ContactUs