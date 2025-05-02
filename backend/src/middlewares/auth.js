const jwt = require('jsonwebtoken');
const User = require('../app/models/User');

const isAuthenticated = async (req, res, next) => {   
    try {
        // Get token from header
        let token;
        const authHeader = req.headers.authorization || req.headers['Authorization'];
        
        if (authHeader) {
            if (authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            } else {
                token = authHeader;
            }
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. No token provided.',
            });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            
            if (!decoded.id) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid token. No user ID found.',
                });
            }

            // Find user
            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found.',
                });
            }

            // Attach user to request
            req.user = user;
            next();

        } catch (jwtError) {
            if (jwtError.name === 'TokenExpiredError') {
                return res.status(401).json({
                    success: false,
                    message: 'Token has expired. Please login again.',
                });
            }
            
            return res.status(401).json({
                success: false,
                message: 'Invalid token.',
                details: jwtError.message
            });
        }

    } catch (error) {
        console.error('Authentication Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

module.exports = isAuthenticated;