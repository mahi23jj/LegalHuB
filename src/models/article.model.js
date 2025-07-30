const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            unique: true, // Enforcing unique titles
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
        },
        tags: {
            type: [String],
            default: [],
            validate: {
                validator: function (tags) {
                    return (
                        Array.isArray(tags) &&
                        new Set(tags).size === tags.length
                    ); // Ensuring unique tags
                },
                message: "Tags must be unique",
            },
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, // Reference to a User model
            ref: "User",
            required: [true, "Author is required"],
        },
        publishedAt: {
            type: Date,
            default: () => new Date(), // Ensuring the default value is always fresh
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
