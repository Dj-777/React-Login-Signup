var express = require('express');
var router = express.Router();
const userController = require("../controllers/users");

/* GET users listing. */
// router.get('/', function(req, res, next));
// {
  // console.log("I am in user")
  // res.send({user:'respond with a resource'});
// });

router.post("/users",userController.Users);


module.exports = router;
