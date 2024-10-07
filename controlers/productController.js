// Import models and JWT for authentication
const Products = require('../models/product.js');
const Users = require('../models/users.js');
const jwt = require('jsonwebtoken');

// Add product controller
module.exports.addProductController = async (req, res) => {
    try {
        const { title, description, price, stock, category, image } = req.body;
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).json({ success: false, message: "Authorization header missing" });

        const token = authHeader.split(' ')[1];
        let data;

        try {
            data = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT token
        } catch (err) {
            return res.status(403).json({ success: false, message: "Invalid token" });
        }

        const user = await Users.findOne({ email: data.email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });
      

        let newProduct = new Products({ title, description, price, stock, category, image, owner: user._id });
        await newProduct.save();
        res.status(200).json({ success: true, message: "Product added successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: "Internal server error" });
    }
};

// Fetch all products controller
module.exports.getAllProductsController = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json({ success: true, message: "Products fetched successfully", products });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error in fetching products" });
    }
};

// Fetch one product controller
module.exports.getOneProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findOne({ _id: id });
        res.status(200).json({ success: true, message: "Product fetched successfully", product });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error in fetching product" });
    }
};
