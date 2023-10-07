import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [action, setAction] = useState("Home");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="buttons">
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>

        <Link to="/dashboard">
          <button className="dashboard-button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
