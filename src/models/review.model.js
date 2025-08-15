const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        lawyer: {
            type: Schema.Types.ObjectId,
            ref: "LawyerProfile",
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        comment: {
            type: String,
            trim: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Prevent double-review: unique per lawyer+author
reviewSchema.index({ lawyer: 1, author: 1 }, { unique: true });

module.exports = mongoose.model("Review", reviewSchema);
