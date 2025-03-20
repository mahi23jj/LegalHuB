const Document = require('../models/document.model.js');
const asyncHandler = require('../utils/asyncHandler.js');
const ApiError = require('../utils/apiError.js');
const ApiResponse = require('../utils/apiResponse.js');

// ✅ Create Document
const createDocument = asyncHandler(async (req, res) => {
    const { title, description, downloadLink, applyLink, state, department, guidelines, requiredDocuments } = req.body;

    if (!title || !description || !downloadLink || !applyLink || !state || !department || !guidelines || !requiredDocuments) {
        throw new ApiError(400, "All fields are required");
    }

    const document = await Document.create({
        title,
        description,
        downloadLink,
        applyLink,
        state,
        department,
        guidelines,
        requiredDocuments
    });

    res.status(201).json(new ApiResponse(201, document, "Document created successfully"));
});

// ✅ Get All Documents (Pass data to EJS)
const getAllDocuments = asyncHandler(async (req, res) => {
    const documents = await Document.find();

    // ✅ Render ke andar `documents` pass karna zaroori hai
    res.render('pages/documents', { documents });
});

// ✅ Get Document by ID
const getDocumentById = asyncHandler(async (req, res) => {
    const document = await Document.findById(req.params.id);

    if (!document) {
        throw new ApiError(404, "Document not found");
    }

    // 👉 EJS ke liye single document pass kar raha hoon
    res.render('pages/documentDetails', { document })
});

// ✅ Update Document
const updateDocument = asyncHandler(async (req, res) => {
    const { title, description, downloadLink, applyLink, state, department, guidelines, requiredDocuments } = req.body;

    const document = await Document.findById(req.params.id);
    if (!document) {
        throw new ApiError(404, "Document not found");
    }

    document.title = title || document.title;
    document.description = description || document.description;
    document.downloadLink = downloadLink || document.downloadLink;
    document.applyLink = applyLink || document.applyLink;
    document.state = state || document.state;
    document.department = department || document.department;
    document.guidelines = guidelines || document.guidelines;
    document.requiredDocuments = requiredDocuments || document.requiredDocuments;

    await document.save();

    res.status(200).json(new ApiResponse(200, document, "Document updated successfully"));
});

// ✅ Delete Document
const deleteDocument = asyncHandler(async (req, res) => {
    const document = await Document.findById(req.params.id);
    if (!document) {
        throw new ApiError(404, "Document not found");
    }

    await document.deleteOne();

    res.status(200).json(new ApiResponse(200, null, "Document deleted successfully"));
});

// ✅ Download Document
const downloadDocument = asyncHandler(async (req, res) => {
    const document = await Document.findById(req.params.id);
    if (!document) {
        throw new ApiError(404, "Document not found");
    }
    res.redirect(document.downloadLink); // Direct download ke liye redirect kar diya
});

// ✅ Apply Online Link
const applyOnline = asyncHandler(async (req, res) => {
    const document = await Document.findById(req.params.id);
    if (!document) {
        throw new ApiError(404, "Document not found");
    }
    res.redirect(document.applyLink);
});

module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    downloadDocument,
    applyOnline
};
