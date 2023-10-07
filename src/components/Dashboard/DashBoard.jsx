import React, { useEffect, useState } from "react";
import "./DashBoard.css";
const DashBoard = () => {
  let [email, setEmail] = useState(null);
const getUserData=()=>{
 let storedEmail=JSON.parse(localStorage.getItem("email"))
  setEmail(storedEmail)
 console.log(email);
 console.log(setEmail);
} 
useEffect(() => {
  getUserData();
}, []); //
  return (
    <div className="container">
      <div className="header">
      <h1 color="Green">Hello,{email}</h1>        
      </div>
    </div>
  );
};

export default DashBoard;
