import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import userIcon from "../Assets/person.png";
import userEmail from "../Assets/email.png";
import userPassword from "../Assets/password.png";
const LoginSignup = () => {
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
  const handleInputChange = (e) => {
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
  const handleSubmitChange = (name, email, password) => {
    console.log(name, email, password, "e");
    let getUserData = JSON.parse(localStorage.getItem("User"));
    console.log(getUserData);
    if (getUserData !== null) {
      getUserData?.map((e) => {
        console.log("Inisde Map");
        if (e?.email === email) {
          setErrMessage(
            "Email is already registered please use Another Email!"
          );
        } else {
          let id = Math.floor(Math.random() * 4000);
          let userData = [
            ...getUserData,
            { name: name, email: email, password: password, id: id },
          ];
          localStorage.setItem("User", JSON.stringify(userData));
          setSuccessMessage(
            "Congratulations, you have successfully registered"
          );
          setTimeout(() => {
            setAction("Login");
            setErrMessage(null);
            setSuccessMessage(null);
          }, 2000);
        }
      });
    } else {
      let id = Math.floor(Math.random() * 4000);
      let userData = [{ name: name, email: email, password: password, id: id }];
      localStorage.setItem("User", JSON.stringify(userData));
      setSuccessMessage("Congratulations, you have successfully registered");
    }
  };
  const handleLoginChange = (email, password) => {
    let getUserData = JSON.parse(localStorage.getItem("User"));
    getUserData?.map((e) => {
      console.log("Inisde Map");
      if (e?.email === email) {
        if (e?.email === email && e?.password === password) {
          let userData = [{ name: e.name, email: email, password: password }];
          localStorage.setItem("LoginUser", JSON.stringify(userData));
          setSuccessMessage("Congratulations, you have successfully Login");
          setTimeout(() => {
            setAction("Login");
            setErrMessage(null);
            setSuccessMessage(null);
          }, 2000);
        } else {
          setErrMessage("Email and pasword doest not match");
        }
      } else {
        setErrMessage("No Email Found please register first");
      }
    });
  };
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
          <div className="input">
            <img src={userIcon} alt="" />
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => handleInputChange(e)}
              id="name"
              value={name}
            />
          </div>
        )}

        <div className="input">
          <img src={userEmail} alt="" />
          <input
            type="email"
            placeholder="Enter Email Id"
            onChange={(e) => handleInputChange(e)}
            id="email"
            value={email}
          />
        </div>
        <div className="input">
          <img src={userPassword} alt="" />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => handleInputChange(e)}
            id="password"
            value={password}
          />
        </div>
        {action === "Sign Up" && (
          <div className="input">
            <img src={userPassword} alt="" />
            <input
              type="confirmPassword"
              placeholder="Enter ConfirmPassword Password"
              onChange={(e) => handleInputChange(e)}
              id="confirmPassword"
              value={confirmPassword}
            />
          </div>
        )}
        <span className="errMessage">{errMessage}</span>
        {successMessage !== null && (
          <span className="successMessage">{successMessage}</span>
        )}
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSubmitChange(name, email, password);
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
  );
};

export default LoginSignup;
