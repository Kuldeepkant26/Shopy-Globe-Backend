const mongoose = require('mongoose');

// Define the schema for the Cart collection
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,  // ID of the user who owns the cart
    },
    productId: {
        type: String,  // ID of the product in the cart
    },
    quantity: {
        type: Number   // Quantity of the product
    }
});

// Export the Cart model based on the schema
module.exports = mongoose.model('Cart', cartSchema);
