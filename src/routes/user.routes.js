const express = require("express");
const passport = require("passport");
const {
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller.js");
const { isLoggedIn } = require("../middlewares/auth.middleware.js");

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

router.route("/update").put(isLoggedIn, updateUser);

router.route("/delete").delete(isLoggedIn, deleteUser);

module.exports = router;
