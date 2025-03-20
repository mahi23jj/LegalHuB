const User = require("../models/user.model.js");
const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const passport = require("passport");

// 📌 Register User
const registerUser = asyncHandler(async (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        req.flash('error', "All fields are required");
        return res.redirect('/login');
    }

    if (password !== confirmPassword) {
        req.flash('error', "Passwords do not match");
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
        req.login(newUser, (err) => {
            if (err) {
                req.flash('error', 'Login failed.');
                return res.redirect('/login'); // Return here to prevent further execution
            }
            req.flash('success', 'Welcome! Account created successfully.');
            return res.redirect('/'); // Return here for single response
        });
    } catch (err) {
        req.flash('error', err.message);
        return res.redirect('/login');
    }
});




// 📌 Login User
const loginUser = asyncHandler(async (req, res, next) => {
    console.log('login');
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
const getUserProfile = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
        res.redirect('/login');
    }
    res.render('users/profile', { user });
});

// 📌 render updateform
const renderUpdateForm = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
        return res.redirect('/login');
    }
    res.render('users/updateUser', { user });
})

// 📌 Update User
const updateUser = asyncHandler(async (req, res) => {
    const { username, name, email, specialization, licenseNumber, experience, profilePicture } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
        return next(new apiError(404, "User not found"));
    }

    user.username = username || user.username;
    user.name = name || user.name;
    user.email = email || user.email;
    user.specialization = specialization || user.specialization;
    user.licenseNumber = licenseNumber || user.licenseNumber;
    user.experience = experience || user.experience;
    user.profilePicture = profilePicture || user.profilePicture;
    await user.save();
    req.flash('success', "Profile updated successfully!");
    return res.redirect('/account');
});

// 📌 Delete User
const deleteUser = asyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.user._id);
    req.flash('success', "Account deleted successfully!");
    return res.redirect('/login');
});


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    renderUpdateForm,
    updateUser,
    deleteUser,
};
