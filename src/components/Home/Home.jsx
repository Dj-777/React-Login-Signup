import React, {  useState } from "react";
import "./Home.css";
const Home = () => {
  const [action, setAction] = useState("Home");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        
      </div>
    </div>
  );
};

export default Home;
