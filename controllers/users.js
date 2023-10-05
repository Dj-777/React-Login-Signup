const express = require("express");
const app = express();
const cors = require("cors");
const UserRecord = require("../model/User");
app.use(cors());

let Usercontroller = {};

Usercontroller.Users = async (req, res) => {
  try {
      let {name,email,password}=req.body.data;
    // console.log(req.body.data) 
    if(name == null ||email == null || password == null){
      res.send({status:0,message: "Must have to fill all the fields"})
    }else{
      const project = await UserRecord.findOne({ where: { email: email } });
     console.log(project);
      if (project === null) {
        console.log("I am inside users controller");
        await UserRecord.create({
          name: name,
          email: email,
          password: password,
        });
       return res.send({ status:1,message: "Congratulations, you have successfully registered" });
      } else {
        res.send({ status:0,message: "Email already found" });
      }
    }
  } catch (error) {
    console.log(error, "error", error.message);
    res.send({ error: "error", message: error.message });
  }
};
module.exports = Usercontroller;
