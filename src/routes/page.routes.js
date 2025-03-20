const express = require('express');
const router = express.Router();
const {
    renderHome,
    renderDictionary,
    renderDocument,
    renderArticles,
    renderFundamental,
    renderUserProfile,
    renderAbout,
    renderPrivacyPolicy,
    renderTermsAndConditions,
    renderLoginForm,
} = require('../controllers/page.controller.js');

const { getLawyers, viewLawyer } = require('../controllers/lawyer.controller.js');

router.get('/', renderHome);
router.get('/dictionary', renderDictionary);
router.get('/documents', renderDocument);
router.get('/articles', renderArticles);
router.get('/rights', renderFundamental);
router.get('/lawyers', getLawyers);
router.get('/lawyers/:id', viewLawyer);
router.get('/user-profile', renderUserProfile);
router.get('/about', renderAbout);
router.get('/privacy', renderPrivacyPolicy);
router.get('/terms', renderTermsAndConditions);
router.get('/login', renderLoginForm);

module.exports = router;
