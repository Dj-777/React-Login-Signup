import React, { useEffect, useState } from 'react'
import axios from "axios"
import './LoginSignup.css'
import userIcon from '../Assets/person.png'
import userEmail from  '../Assets/email.png'
import userPassword from "../Assets/password.png"
const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up");
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [conformpassword,setConformPassword] = useState(null);
    const [error,setError]=useState(null);
  
        useEffect(() => {
            // console.log(password,"password"); // This will show the updated value of 'password' whenever it changes
            if(password !== conformpassword){
                console.log("Password and conform password doestnot match")
                setError("Password and conform password doestnot match")
            }else{
                setError(null)
            }
        }, [password,conformpassword]);
        const handelInputForUser= (formData)=>{
      if(formData.target.id ==="name"){
       setName(formData.target.value) 
      }
      if(formData.target.id === "email"){
        setEmail(formData.target.value)
      }
      if(formData.target.id === "password"){
       setPassword(formData.target.value)
      }
      if(formData.target.id === "conformpassword"){
        setConformPassword(formData.target.value)
       }  
    }
    const HandleSubmit  = () => {
        console.log(name,email,password,conformpassword)
        // axios.get("http://localhost:3000/users",  { crossdomain: true }).then(response => {
        //     console.log(response.data)
        //     // setText(response.data.text);
        //     // setAuthor(response.data.author);
        //   });
        axios.post("http://localhost:3000/user/users",{
            data: ({name,email,password,conformpassword}),
        })

    }
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
                <input type="text" placeholder='Enter Name' onChange={(data)=>handelInputForUser(data)} value={name}  id="name" />
            </div>}            

            <div className="input">
                <img src={userEmail} alt="" />
                <input type="email" placeholder='Enter Email Id' onChange={(data)=>handelInputForUser(data)} value={email} id="email" />
            </div>
            <div className="input">
                <img src={userPassword} alt="" />
                <input type="password" placeholder='Enter Password' onChange={(data)=>handelInputForUser(data)} value={password} id="password" />
            </div>
            <div className="input">
                <img src={userPassword} alt="" />
                <input type="password" placeholder='Enter conform-Password' onChange={(data)=>handelInputForUser(data)} value={conformpassword} id="conformpassword" />
            </div>
            {error === null ? <div></div> : <span className='passwordError'>{error}</span>}
            
        </div>
        {action === "Sign Up" ? <div></div> :    <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
        </div>}
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray":"submit"}  onClick={() => { setAction("Sign Up"); HandleSubmit(); }}>
               Sign Up
            </div>
            <div className={action === "Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login");}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default LoginSignup