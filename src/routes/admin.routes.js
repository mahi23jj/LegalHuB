const express = require("express");
const router = express.Router();
const {isAdmin} = require("../middlewares/auth.middleware.js");
const {dashboardStats, adminApproveLawyer, renderUserPage} = require("../controllers/adminDashboard.js");

// render pages
router.route("/dashboard/users").get(isAdmin, renderUserPage);

router.route("/dashboard").get(isAdmin, dashboardStats);
router.route("/approve-lawyer/:id").post(isAdmin, adminApproveLawyer);


module.exports = router;