
const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup Controller
module.exports.signupController = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        //make sure password length is 6 atleast
        // if (password.length < 6) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Password should be at least 6 characters long"
        //     });
        // }
        // Check if the user already exists
        const user = await Users.findOne({ email: email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Hash the password
        let salt = await bcrypt.genSalt(10);
        let encrypt = await bcrypt.hash(password, salt);

        // Create a new user
        let newUser = new Users({
            name: username,
            email,
            password: encrypt
        });
        await newUser.save();

        // Generate JWT token
        let token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Exclude password from response
        newUser.password = undefined;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            newUser,
            token
        });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error during signup"
        });
    }
};

// Get User Controller
module.exports.getuserController = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        // Verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: "Token has expired"
            });
        }


        // Fetch the user and exclude password
        const user = await Users.findOne({ email: decode.email }).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User data fetched successfully",
            user
        });
    } catch (error) {
        console.error("Error during fetching user data:", error);

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        res.status(500).json({
            success: false,
            message: "Internal server error while fetching user data"
        });
    }
};

// Login Controller
module.exports.loginController = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Check if user exists
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Compare passwords
        let compare = await bcrypt.compare(password, user.password);
        if (!compare) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Generate token
        let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        console.log(token)

        // Exclude password from response
        user.password = undefined;

        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
            token
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error during login"
        });
    }
};
