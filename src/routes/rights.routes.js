const express = require('express');
const {
    createRight,
    getAllRights,
    getRightById,
    updateRight,
    deleteRight
} = require('../controllers/rights.controller.js');

const router = express.Router();

// ✅ Create a right
router.route('/').post(createRight);

// ✅ Get all rights
router.route('/').get(getAllRights);

// ✅ Get right by ID
router.route('/:id').get(getRightById);

// ✅ Update right
router.route('/:id').put(updateRight);

// ✅ Delete right
router.route('/:id').delete(deleteRight);

module.exports = router;
