const express = require("express");
const router = express.Router();
const{body}=require("express-validator");
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/register",[
    body('email','Invalid email').isEmail(),
    body('fullname.firstname','First name must be at least 3 characters long').isLength({min:3}),
    body('password','Password must be at least 6 characters long').isLength({min:6})
],
userController.registerUser
);

router.post("/login",[
    body('email','Invalid email').isEmail(),
    body('password','Password must be at least 6 characters long').isLength({min:6})
],
userController.loginUser
);

router.get("/profile",authMiddleware.authUser,userController.getUserProfile);

router.get("/logout",authMiddleware.authUser,userController.logoutUser); 

module.exports = router;
