const jwt = require('jsonwebtoken');

const { secret } = require('../config');

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(' ');
  const jwtToken = words[1];
  const decodedValue = jwt.verify(jwtToken, secret);

  if (decodedValue.username) {
    req.username = decodedValue.username;
    req.randomData = 'asdfdf';
    next();
  } else {
    res.status(403).json({
      msg: 'You are not authenticated !',
    });
  }
}

module.exports = userMiddleware;
