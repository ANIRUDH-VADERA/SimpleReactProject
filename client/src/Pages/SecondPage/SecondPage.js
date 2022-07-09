import React from 'react'
import "./SecondPage.css"
import Footer from "../../Components/Footer/Footer.js"
import second from "../../images/second.png"
import Button from "../../Components/Button/Button.js"  

function SecondPage() {
  return (
    <div id="SecondPage" className="secondPage">
        <div className="mainContent">
          <div className="left">
             <img  src = {second} alt="" />
          </div>
          <div className="right">
            <h1>Focused on Time Saving</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum. Iaculis urna id volutpat lacus laoreet non. Tristique senectus et netus et malesuada. Aliquam etiam erat velit scelerisque in dictum.</p>
            <Button label = "Download the mobile app" />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SecondPage