import React, { useState } from 'react'
import './LoginSignup.css'
import userIcon from '../Assets/person.png'
import userEmail from  '../Assets/email.png'
import userPassword from "../Assets/password.png"
const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action ==="Login" ? <div></div> :            
        <div className="input">
                <img src={userIcon} alt="" />
                <input type="text" placeholder='Enter Name' />
            </div>}            

            <div className="input">
                <img src={userEmail} alt="" />
                <input type="email" placeholder='Enter Email Id'/>
            </div>
            <div className="input">
                <img src={userPassword} alt="" />
                <input type="password" placeholder='Enter Password'/>
            </div>
        </div>
        {action === "Sign Up" ? <div></div> :    <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
        </div>}
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default LoginSignup