const express = require("express");
const app = express();
const cors = require("cors");
const UserRecord = require("../model/User");
app.use(cors());

let Usercontroller = {};

Usercontroller.Users = async (req, res) => {
  try {
      let {name,email,password,confirmPassword}=req.body.data;
    // console.log(req.body.data) 
    if(name == null ||email == null || password == null){
      res.send({status:0,message: "Must have to fill all the fields"})
    }else{
      const project = await UserRecord.findOne({ where: { email: email } });
      if (project === null) {
        if(password !== confirmPassword){
          res.send({status:0, message:"Password and confrom password Dosen't match"})
        }
        else{
          await UserRecord.create({
            name: name,
            email: email,
            password: password,
          });
         return res.send({ status:1,message: "Congratulations, you have successfully registered" });
        }
      } else {
        res.send({ status:0,message: "Email already found" });
      }
    }
  } catch (error) {
    console.log(error, "error", error.message);
    res.send({ error: "error", message: error.message });
  }
};

Usercontroller.UsersLogin = async (req, res) => {
  try {
    let getUSerEmail;
    console.log("inside userlogin block")
      let {email,password}=req.body.data;
    if(email == null || password == null){
      res.send({status:0,message: "User name password Doesn't contain null values!"})
    }else{
      getUSerEmail = await UserRecord.findOne({ where: { email: email } });
      if (getUSerEmail === null) {
        res.send({ status:0,message: "Email Not Found" });
      } else {
          if(!((getUSerEmail.dataValues.email && getUSerEmail.dataValues.password) === (email && password))){
            res.send({
              status:0,
              message:"Invalid user email and password"
            })
          }else{
            res.send({
              status:1,
              message:"Login success!"
            })
          }
      }
    }
  } catch (error) {
    console.log(error, "error", error.message);
    res.send({ error: "error", message: error.message });
  }
};


module.exports = Usercontroller;
