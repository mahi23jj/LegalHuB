const express = require('express');
const {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    downloadDocument,
    applyOnline,
    trackDownload
} = require('../controllers/document.controller.js');

const router = express.Router();

// ✅ Create Document
router.route('/').post(createDocument);

// ✅ Get All Documents
router.route('/').get(getAllDocuments);

// ✅ Get Document by ID
router.route('/:id').get(getDocumentById);

// ✅ Update Document
router.route('/:id').put(updateDocument);

// ✅ Delete Document
router.route('/:id').delete(deleteDocument);

// ✅ Download Document
router.route('/:id/download').get(downloadDocument);

// ✅ Apply Online Link
router.route('/:id/apply').get(applyOnline);

// ✅ Track Download
router.route('/:id/track').post(trackDownload);

module.exports = router;
