import React from 'react'
import navbarImage from "../../images/navbarImage.png"
import "./Navbar.css"
import Button from "../Button/Button.js"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img src={navbarImage} alt = "" />
        </div>  
        <div className="navbar-right">
            <div className="navbar-link">
                <i className="fa-solid fa-phone"></i>
                <p>+769 586 4558</p>
            </div>
            <div className="navbar-link">
                <i className="fa-solid fa-envelope"></i>
                <p>service@openauto.ca</p>
            </div>
            <div className="navbar-button">
                <Button 
                    type=''
                    label= "Download the mobile app"
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar