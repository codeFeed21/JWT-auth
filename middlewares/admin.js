const jwt = require('jsonwebtoken');
const dotenv =  require('dotenv');
dotenv.config();

const secret = process.env.SECRET; 

function adminMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
}

module.exports = adminMiddleware;