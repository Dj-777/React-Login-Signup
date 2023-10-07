import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashBoard.css";
import userIcon from "../Assets/person.png";
import userEmail from "../Assets/email.png";
import userPassword from "../Assets/password.png";
const DashBoard = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  let [errMessage, setErrMessage] = useState(null);
  let [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    console.log(!password, !confirmPassword);
    if (!password || !confirmPassword) {
      console.log("Hello");
      setErrMessage(null);
    } else if (password !== confirmPassword) {
      console.log(password, "pass", confirmPassword);
      setErrMessage("Password and Confrom password does not match");
    } else {
      setErrMessage(null);
    }
  }, [password, confirmPassword]);
  const handelInputForUser = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmitChange = (name, email, password, confirmPassword) => {
    console.log(name, email, password, "e");
    axios
      .post("http://localhost:3000/user/users", {
        data: { name, email, password, confirmPassword },
      })
      .then((res) => {
        console.log(res?.data?.message, "res");
        if (res?.data?.status === 1) {
          setSuccessMessage(res?.data?.message);
          setTimeout(() => {
            setAction("Login");
            setErrMessage(null);
            setSuccessMessage(null);
          }, 5000);
        } else if (res?.data?.status === 0) {
          console.log("Inside elseif");
           setErrMessage(res?.data?.message);
          setTimeout(() => {
            setErrMessage(null);
            setSuccessMessage(null);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrMessage(error?.data?.message);
      });
  };
  

  //This API Is for LOGIN for now i am commenting it...
  const handleLoginChange = (email, password) => {
     
      email === null ? email = null : email = email 
      password === null ? password = null : password = password 
      axios
      .post("http://localhost:3000/user/userslogin", {
        data: { email, password},
      }).then((res)=>{
        if(res?.data?.status === 0 ){
          setErrMessage(res?.data?.message);
          setTimeout(() => {
            setErrMessage(null);
            setSuccessMessage(null);
          }, 5000);
        }
        else if(res?.data?.status === 1){
          setSuccessMessage(res?.data?.message);
          setTimeout(() => {
            setErrMessage(null);
            setSuccessMessage(null);
          }, 5000);
        }else{
          console.log("Nothing");
        }
      }).catch((error)=>{
        console.log(error);
        setErrMessage(error?.data?.message);
      })
  
  };
  //This API Is for LOGIN for now i am commenting it...

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div>
            <div className="input">
              <img src={userIcon} alt="" />
              <input
                type="text"
                placeholder="Enter Name"
                onChange={(e) => handelInputForUser(e)}
                id="name"
                value={name}
              />
            </div>
          </div>
        )}
        <div className="input">
          <img src={userEmail} alt="" />
          <input
            type="email"
            placeholder="Enter Email Id"
            onChange={(data) => handelInputForUser(data)}
            value={email}
            id="email"
          />
        </div>
        <div className="input">
          <img src={userPassword} alt="" />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(data) => handelInputForUser(data)}
            value={password}
            id="password"
          />
        </div>

        {/* {error === null ? <div></div> : <span className='passwordError'>{error}</span>} */}

        {action === "Sign Up" && (
          <div className="input">
            <img src={userPassword} alt="" />
            <input
              type="confirmPassword"
              placeholder="Enter ConfirmPassword Password"
              onChange={(e) => handelInputForUser(e)}
              id="confirmPassword"
              value={confirmPassword}
            />
          </div>
        )}

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        <span className="errMessage">{errMessage}</span>
        {successMessage !== null && (
          <span className="successMessage">{successMessage}</span>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              handleSubmitChange(name, email, password, confirmPassword);
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
               handleLoginChange(email, password);
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
