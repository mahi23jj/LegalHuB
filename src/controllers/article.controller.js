const Article = require('../models/article.model');
const User = require('../models/user.model'); // Importing User model
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const ApiResponse = require('../utils/apiResponse');

// ✅ Create Article
const createArticle = asyncHandler(async (req, res) => {
    const { title, content, tags } = req.body;
    const author = req.user?._id; // Assign logged-in user's ID

    if (!title?.trim() || !content?.trim()) {
        throw new ApiError(400, "Title and content are required");
    }

    const article = await Article.create({ title, content, tags, author });

    res.status(201).json(new ApiResponse(201, article, "Article created successfully"));
});


// ✅ Get All Articles
const getAllArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find().populate('author', 'name email role').sort({ createdAt: -1 });

    // res.status(200).json(new ApiResponse(200, articles, 'Articles fetched successfully'));
    res.render('pages/articles', { articles });
});

// ✅ Get Single Article by ID
const getArticleById = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id).populate('author', 'name email role');

    if (!article) {
        throw new ApiError(404, 'Article not found');
    }

    // res.status(200).json(new ApiResponse(200, article, 'Article fetched successfully'));
    res.render('pages/article-details', { article });
});

// ✅ Update Article (Only Author or Admin Can Update)
const updateArticle = asyncHandler(async (req, res) => {
    const { title, content, tags } = req.body;
    const article = await Article.findById(req.params.id);

    if (!article) {
        throw new ApiError(404, 'Article not found');
    }

    // Check if the logged-in user is the author or an admin
    const isAdmin = req.user.role === 'admin';
    if (article.author.toString() !== req.user._id.toString() && !isAdmin) {
        throw new ApiError(403, 'Unauthorized: You can only update your own articles');
    }

    const updateData = {};
    if (title?.trim()) updateData.title = title;
    if (content?.trim()) updateData.content = content;
    if (tags) updateData.tags = tags;

    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
        runValidators: true
    });

    res.status(200).json(new ApiResponse(200, updatedArticle, 'Article updated successfully'));
});

// ✅ Delete Article (Only Author or Admin Can Delete)
const deleteArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);

    if (!article) {
        throw new ApiError(404, 'Article not found');
    }

    // Check if the logged-in user is the author or an admin
    const isAdmin = req.user.role === 'admin';
    if (article.author.toString() !== req.user._id.toString() && !isAdmin) {
        throw new ApiError(403, 'Unauthorized: You can only delete your own articles');
    }

    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json(new ApiResponse(200, null, 'Article deleted successfully'));
});

module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
};
