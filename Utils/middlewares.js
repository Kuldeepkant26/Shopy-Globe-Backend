module.exports.isLogedIn = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }
        const token = authHeader.split(' ')[1];
        try {
            data = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        } catch (err) {
            return res.status(403).json({
                success: false,
                message: "Invalid token"
            });
        }
        if (data) {
            next();
        }
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "login verification failed"
        })
    }
}