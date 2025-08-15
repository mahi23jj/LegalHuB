const express = require("express");
const { createReview, deleteReview } = require("../controllers/review.controller.js");
const { isLoggedIn } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.route("/:lawyerId").post(isLoggedIn, createReview);
router.route("/:lawyerId/:reviewId").delete(isLoggedIn, deleteReview);

module.exports = router;
