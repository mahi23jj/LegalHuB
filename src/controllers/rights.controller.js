const Right = require('../models/rights.model');
const asyncHandler = require('../utils/asyncHandler.js');
const ApiError = require('../utils/apiError.js');
const ApiResponse = require('../utils/apiResponse.js');

// ✅ Create a Right
const createRight = asyncHandler(async (req, res) => {
    const { name, description, sourceLink, category } = req.body;

    if (!name || !description || !sourceLink || !category) {
        throw new ApiError(400, "All fields are required");
    }
    // ✅ Check if the name already exists
    const existingRight = await Right.findOne({ name });
    if (existingRight) {
        throw new ApiError(400, "A right with this name already exists");
    }

    const right = await Right.create({ name, description, sourceLink, category });

    res.status(201).json(new ApiResponse(201, right, "Right created successfully"));
});

// ✅ Get All Rights
const getAllRights = asyncHandler(async (req, res) => {
    const rights = await Right.find();
    // res.status(200).json(new ApiResponse(200, rights, "Rights fetched successfully"));
    res.render('pages/fundamental', { rights });
});

// ✅ Get Right by ID
const getRightById = asyncHandler(async (req, res) => {
    const right = await Right.findById(req.params.id);

    if (!right) {
        throw new ApiError(404, "Right not found");
    }

    // res.status(200).json(new ApiResponse(200, right, "Right fetched successfully"));
    res.render('pages/right-details', { right });
});

// ✅ Update Right
const updateRight = asyncHandler(async (req, res) => {
    const { name, description, sourceLink, category } = req.body;

    const right = await Right.findById(req.params.id);
    if (!right) {
        throw new ApiError(404, "Right not found");
    }

    right.name = name || right.name;
    right.description = description || right.description;
    right.sourceLink = sourceLink || right.sourceLink;
    right.category = category || right.category;

    await right.save();

    res.status(200).json(new ApiResponse(200, right, "Right updated successfully"));
});

// ✅ Delete Right
const deleteRight = asyncHandler(async (req, res) => {
    const right = await Right.findById(req.params.id);
    if (!right) {
        throw new ApiError(404, "Right not found");
    }

    await right.deleteOne();

    res.status(200).json(new ApiResponse(200, null, "Right deleted successfully"));
});

module.exports = {
    createRight,
    getAllRights,
    getRightById,
    updateRight,
    deleteRight
};
