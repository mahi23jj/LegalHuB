const express = require('express');
const router = express.Router();
const {
    renderHome,
    renderDictionary,
    renderDocument,
    renderArticles,
    renderFundamental,
    renderAbout,
    renderPrivacyPolicy,
    renderTermsAndConditions,
    renderLoginForm,
} = require('../controllers/page.controller.js');

const { getLawyers, viewLawyer } = require('../controllers/lawyer.controller.js');
const { getUserProfile, renderUpdateForm } = require("../controllers/user.controller.js");
const { publishArticle, renderEditForm } = require('../controllers/article.controller.js');

router.get('/', renderHome);
router.get('/dictionary', renderDictionary);
router.get('/documents', renderDocument);
router.get('/articles', renderArticles);
router.get('/rights', renderFundamental);
router.get('/lawyers', getLawyers);
router.get('/lawyers/:id', viewLawyer);
router.get('/about', renderAbout);
router.get('/privacy', renderPrivacyPolicy);
router.get('/terms', renderTermsAndConditions);
router.get('/login', renderLoginForm);
router.get('/account', getUserProfile);
router.get('/account/update', renderUpdateForm);
router.get('/articles/publish', publishArticle);
router.get('/articles/:id/edit', renderEditForm);


module.exports = router;
