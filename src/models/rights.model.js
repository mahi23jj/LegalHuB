const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const rightsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    sourceLink: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

rightsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Right', rightsSchema);
