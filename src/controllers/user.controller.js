const User = require("../models/user.model.js");
const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const passport = require("passport");

// 📌 Register User
const registerUser = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        req.flash('error', "All fields are required");
        return res.redirect('/login');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        req.flash('error', "User already exists");
        return res.redirect('/login');
    }

    try {
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.flash('success', 'Welcome to the platform!');
        return res.redirect('/');
    } catch (err) {
        req.flash('error', err.message);
        return res.redirect('/login');
    }
});



// 📌 Login User
const loginUser = asyncHandler(async (req, res, next) => {
    req.flash('success', "Logged in successfully!");
    return res.redirect('/'); // ✅ Redirect after login
});

// 📌 Logout User
const logoutUser = asyncHandler(async (req, res, next) => {
    if (!req.session) {
        return next(new apiError(500, "Session not found"));
    }

    // ✅ Pehle flash message store karo
    req.flash('success', 'Logged out successfully');

    req.logout((err) => {
        if (err) return next(new apiError(500, "Logout failed"));

        req.session.destroy((err) => {
            if (err) return next(new apiError(500, "Session destruction failed"));

            res.clearCookie('connect.sid'); // ✅ Session cookie clear karo
            return res.redirect('/'); // ✅ Redirect karo flash message ke saath
        });
    });
});


// 📌 Get User Profile
// exports.getUserProfile = asyncHandler(async (req, res, next) => {
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//         return next(new apiError(404, "User not found"));
//     }

//     res.status(200).json(new apiResponse(200, user, "User profile fetched successfully"));
// });

// // 📌 Update User
// exports.updateUser = asyncHandler(async (req, res, next) => {
//     const { username, email } = req.body;
//     const user = await User.findById(req.user._id);

//     if (!user) {
//         return next(new apiError(404, "User not found"));
//     }

//     user.username = username || user.username;
//     user.email = email || user.email;
//     await user.save();

//     res.status(200).json(new apiResponse(200, user, "User updated successfully"));
// });


module.exports = { registerUser, loginUser, logoutUser };