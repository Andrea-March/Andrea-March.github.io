import React from "react";
import './Loader.css'
import logo from '../../../static/logo_new.webp'

const Loader = ({loading}) => {
    console.log(loading)
    return  loading?
        (<div className="loader-div">
            <img src={logo} className="spinner"/>
        </div>)
        :
        (null)
}


export default Loader