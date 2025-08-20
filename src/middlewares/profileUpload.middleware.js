const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");

// Configure Cloudinary storage for profile pictures
const storage = new CloudinaryStorage({
    cloudinary: cloudinary.cloudinary,
    params: {
        folder: 'LegalHuB/profiles',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [
            { width: 300, height: 300, crop: 'fill', gravity: 'face' },
            { quality: 'auto' }
        ]
    },
});

// File filter for validation
const fileFilter = (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files (jpg, jpeg, png, webp) are allowed!'), false);
    }
};

// Configure multer with limits
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});

// Export configurations
module.exports = {
    uploadProfilePic: upload.single('profilePicture'),
    uploadMultiple: upload.array('images', 5)
};
