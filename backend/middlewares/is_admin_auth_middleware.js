module.exports = (req, res, next) => {
    // Check if user object exists in the request (from authMiddleware)
    if (!req.user) {
        return res.status(401).json({ message: 'Access denied.' });
    }

    // Check if user is admin
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    // If user is admin, pass control to the next middleware
    next();
};
