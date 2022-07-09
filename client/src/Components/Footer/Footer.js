import React from 'react'
import "./Footer.css"
import navbarImage from "../../images/navbarImage.png"
import Links from "../Links/Links.js"

function Footer() {
  return (
    <div className="footer">
        <div className="left">
            <img src = {navbarImage} alt="" />
            <p>Open Auto @ all rights reserved</p>
        </div>
        <div className="right">
            <div className="upLinks">
                <div className="link">
                    <i className="fa-solid fa-phone"></i>
                    <p>+769 586 4558</p>
                </div>
                <div className="link">
                    <i className="fa-solid fa-envelope"></i>
                    <p>service@openauto.ca</p>
                </div>
            </div>
            <div className="downLinks">
                <Links />
            </div>
        </div>
    </div>
  )
}

export default Footer