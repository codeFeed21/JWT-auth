const jwt = require('jsonwebtoken');
const dotenv =  require('dotenv');
dotenv.config();

const secret = process.env.SECRET; 

function adminMiddleware(req, res, next){
    const token = req.headers.authorization; // bearer token
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodeValue = jwt.verify(jwtToken, secret);
        if(decodeValue.username){
            next();
        }else{
            res.status(403).json({
                msg:"You are not authenticated!"
            })
        }
    } catch(e) {
        res.json({
            msg:"Incorrect Inputs!"
        })
    }
}

module.exports = adminMiddleware;