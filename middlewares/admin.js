const jwt = require('jsonwebtoken');

const { secret } = require('../config');

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(' ');
  const jwtToken = words[1];

  try {
    const decodeValue = jwt.verify(jwtToken, secret);
    console.log(decodeValue);
    if (decodeValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: 'You are not authenticated!',
      });
    }
  } catch (e) {
    res.json({
      msg: 'Incorrect Inputs!',
    });
  }
}

module.exports = adminMiddleware;
