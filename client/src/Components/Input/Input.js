import React,{useState} from 'react'
import "./Input.css"

function Input(props) {
    return (
    <div className="input">
        <input 
        type="text" 
        name={props.name} 
        value={props.val} 
        onChange={(e)=>{props.change(e)}} 
        placeholder={props.placeholder}> 
        </input>
    </div>
  )
}

export default Input