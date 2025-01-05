const express = require("express");
const router = express.Router();
const{body}=require("express-validator");
const userController = require("../controllers/user.controllers");


router.post("/register",[
    body('email','Invalid email').isEmail(),
    body('fullname.firstname','First name must be at least 3 characters long').isLength({min:3}),
    body('password','Password must be at least 6 characters long').isLength({min:6})
],
userController.registerUser
);
module.exports = router;