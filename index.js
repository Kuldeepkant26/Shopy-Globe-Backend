const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not set

// Routes
const authRouter = require('./routes/auth.js');
const productRouter = require('./routes/product.js');
const cartRouter = require('./routes/cart.js');

const Users = require('./models/users.js');

// Middleware
app.use(cors()); // Corrected CORS usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
async function DBconnection() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB connection error: ", error);
    }
}

DBconnection();

// Root Route
app.get('/', async (req, res) => {
    res.send("Root Route");
});

// Auth Routes
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
