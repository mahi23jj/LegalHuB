const express = require('express');
const router = express.Router();
const { getLawyers, viewLawyer } = require('../controllers/lawyer.controller.js');

router.get('/', getLawyers);
// router.get('/lawyers/verify/:id', viewLawyer);

module.exports = router;
