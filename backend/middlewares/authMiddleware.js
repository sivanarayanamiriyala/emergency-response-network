const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header is present and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]; // Extract token
            if (!token) {
                return res.status(401).json({ message: 'Not authorized, no token provided' });
            }

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password'); // Get user and exclude password

            if (!req.user) {
                return res.status(401).json({ message: 'User not found, not authorized' });
            }

            next(); // Call the next middleware
        } catch (error) {
            console.error('JWT verification failed:', error.message);
            return res.status(401).json({ message: 'Not authorized, token invalid or expired' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token provided' });
    }
};
