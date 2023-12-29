const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

function userMiddleware(req, res, next) {
    try{
        const token = req.headers.authorization;
        const words = token.split(' ');
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        req.username = decodedValue.username;
        next();
    } catch(error) {
        res.status(403).json({
            msg: "You are not authenticated"
        });
    }
}

module.exports = userMiddleware;