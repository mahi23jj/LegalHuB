const express = require('express');
const { getTerm } = require('../controllers/dictionary.controller');

const router = express.Router();

router.get('/:term', getTerm);

module.exports = router;
