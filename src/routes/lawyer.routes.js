const express = require('express');
const router = express.Router();
const { verifyLawyer } = require('../controllers/lawyer.controller.js');

// router.get('/lawyers', getLawyers);
router.get('/lawyers/verify/:id', verifyLawyer);

module.exports = router;
