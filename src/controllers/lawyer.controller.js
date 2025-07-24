const User = require('../models/user.model.js');
const asyncHandler = require('../utils/asyncHandler');
const apiError = require('../utils/apiError');
const apiResponse = require('../utils/apiResponse');

const getLawyers = asyncHandler(async (req, res) => {
    const lawyers = await User.find({});
    res.status(200).json(new apiResponse(200, lawyers, 'Lawyers fetched successfully'));
});

const viewLawyer = asyncHandler(async (req, res) => {
    const lawyer = await User.findById(req.params.id);
    if (!lawyer) {
        return res.status(404).send("Lawyer not found");
    }
    res.render('pages/lawyer-profile', { lawyer });
});

module.exports = {
    getLawyers,
    viewLawyer,
};