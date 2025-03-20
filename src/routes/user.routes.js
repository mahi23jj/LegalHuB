const express = require("express");
const passport = require("passport");
const {
    registerUser,
    loginUser,
    logoutUser,
    // getUserProfile,
    // updateUser
} = require("../controllers/user.controller");
const { isLoggedIn } = require("../middlewares/multer.middleware.js");

const router = express.Router();

// User routes using router.route()
router.route("/register").post(registerUser);

router.route("/login").post(
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    loginUser
);


router.route("/logout").get(logoutUser);
// router.route("/profile").get(isLoggedIn, getUserProfile);
// router.route("/update").put(isLoggedIn, updateUser);

module.exports = router;
