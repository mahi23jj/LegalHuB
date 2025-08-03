const Document = require("../models/document.model.js");
const Article = require("../models/article.model.js");
const Right = require("../models/rights.model.js");
const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/apiError.js");
const ApiResponse = require("../utils/apiResponse.js");
const User = require("../models/user.model.js");

const renderHome = (req, res) => {
    res.render("pages/index");
};

const renderDictionary = (req, res) => {
    res.render("pages/dictionary");
};

const renderDocument = asyncHandler(async (req, res) => {
    // Extract filter parameters and pagination from query string
    const {
        search,
        state,
        department,
        sortBy,
        page = 1,
        limit = 6  // Feel free to adjust
    } = req.query;

    // Build filter object
    let filter = {};

    if (search && search.trim()) {
        filter.$or = [
            { title: { $regex: search.trim(), $options: 'i' } },
            { description: { $regex: search.trim(), $options: 'i' } }
        ];
    }

    if (state && state !== 'all') {
        filter.state = state;
    }

    if (department && department !== 'all') {
        filter.department = department;
    }

    // Build sort object
    let sort = {};
    switch (sortBy) {
        case 'oldest':
            sort = { createdAt: 1 };
            break;
        case 'downloads':
            sort = { downloadCount: -1 };
            break;
        case 'alphabetical':
            sort = { title: 1 };
            break;
        case 'newest':
        default:
            sort = { createdAt: -1 };
            break;
    }

    // Pagination logic
    const currentPage = Math.max(1, parseInt(page));
    const perPage = Math.max(1, parseInt(limit));
    const skip = (currentPage - 1) * perPage;

    const [documents, totalDocuments] = await Promise.all([
        Document.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(perPage),
        Document.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(totalDocuments / perPage);

    // Get unique states and departments
    const allStates = await Document.distinct('state');
    const allDepartments = await Document.distinct('department');

    // Filter and sort options for the frontend
    const filterOptions = {
        states: allStates.sort(),
        departments: allDepartments.sort(),
        sortOptions: [
            { value: 'newest', label: 'Newest First' },
            { value: 'oldest', label: 'Oldest First' },
            { value: 'downloads', label: 'Most Downloaded' },
            { value: 'alphabetical', label: 'A-Z' }
        ]
    };

    // Current filters for form pre-fill
    const currentFilters = {
        search: search || '',
        state: state || 'all',
        department: department || 'all',
        sortBy: sortBy || 'newest'
    };

    res.render("pages/documents", {
        documents,
        filterOptions,
        currentFilters,
        resultsCount: documents.length,
        currentPage,
        totalPages,
        totalDocuments,
        request: req
    });
});

const renderArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find()
        .populate("author", "name email")
        .sort({ createdAt: -1 });
    res.render("pages/articles", { articles });
});

const renderFundamental = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    // ✅ Total rights count karo
    const totalRights = await Right.countDocuments();

    // ✅ Rights ko paginate karo
    const rights = await Right.find().skip(skip).limit(limit);

    res.render("pages/fundamental", {
        rights,
        currentPage: page,
        totalPages: Math.ceil(totalRights / limit),
    });
});

const renderAbout = (req, res) => {
    res.render("pages/about");
};

const renderPrivacyPolicy = asyncHandler(async (req, res) => {
    res.render("pages/privacy");
});

const renderTermsAndConditions = asyncHandler(async (req, res) => {
    res.render("pages/terms");
});

const renderLoginForm = async (req, res) => {
    res.render("users/login");
};

const getLawyers = asyncHandler(async (req, res) => {
    const lawyers = await User.find({});
    res.render("pages/lawyers", { lawyers });
});

module.exports = {
    renderHome,
    renderDictionary,
    renderDocument,
    renderArticles,
    renderFundamental,
    renderPrivacyPolicy,
    renderTermsAndConditions,
    renderAbout,
    renderLoginForm,
    getLawyers,
};
