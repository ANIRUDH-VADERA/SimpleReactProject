import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <div className="button">
    {props.type === "submit" ? 
    <button type={props.type} onClick={()=>{props.handleClick()}} >
            {props.label}
    </button>
     :
    <button type={props.type} >
            {props.label}
    </button>
    }
    </div>
  )
}

export default Button