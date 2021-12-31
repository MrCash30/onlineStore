const mongoose = require('mongoose');

// buat schema untuk db = sequalize
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    size: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['S', 'M', 'L']
    },
    description: {
        type: String
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['men', 'woman', 'kids']
    }
});

// buat model utk db at mongo shell
const Product = mongoose.model('Product', productSchema);

module.exports = Product;