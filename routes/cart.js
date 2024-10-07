const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const { isLogedIn } = require('../Utils/middlewares');

// Add item to cart
router.post('/add', isLogedIn, async (req, res) => {
    try {
        const { productId, userId, quantity } = req.body;

        // Validation for quantity (should be at least 1)
        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be greater than 0"
            });
        }

        const cartItem = new Cart({
            productId, userId, quantity
        });

        await cartItem.save(); // Ensure to await saving

        return res.status(200).json({
            success: true,
            message: "Item added to cart"
        });
    } catch (error) {
        console.error("Error adding to cart:", error); // Debugging info
        return res.status(500).json({
            success: false,
            message: "Internal server error, item not added to cart"
        });
    }
});

// Update item quantity in cart
router.put('/update/:id', async (req, res) => {
    const { quantity } = req.body;
    const id = req.params.id;

    // Validation for quantity
    if (quantity < 1) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be greater than 0"
        });
    }

    try {
        const cartItem = await Cart.findById(id);

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Item not found in cart"
            });
        }

        await Cart.findByIdAndUpdate(id, { quantity });

        return res.status(200).json({
            success: true,
            message: "Item quantity updated"
        });

    } catch (error) {
        console.error("Error updating quantity:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error, failed to update quantity"
        });
    }
});

// Remove item from cart
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const cartItem = await Cart.findById(id);

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Item not found in cart"
            });
        }

        await Cart.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Item removed from cart"
        });

    } catch (error) {
        console.error("Error deleting cart item:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error, failed to delete item"
        });
    }
});

module.exports = router;
