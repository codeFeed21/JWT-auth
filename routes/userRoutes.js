const Router = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middlewares/users');
const { User, Product } = require('../db');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

router.get('/products', async (req, res) => {
  const response = await Product.find({});

  res.json({
    products: response,
  });
});

router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });
  res.json({
    msg: ' User created Successfully!',
  });
});

router.post('/signin', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username: username,
    password: password,
  });
  if (user) {
    const token = jwt.sign({ username }, secret);
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: ' Incorrect Credentials!',
    });
  }
});

router.post('/products/:productId', userMiddleware, async (req, res) => {
  const productId = req.params.productId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedProducts: productId,
      },
    }
  );

  res.json({
    msg: 'Product purchased !',
  });
});
router.get('/purchasedProducts', userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });

  const products = await Product.find({
    _id: {
      $in: user.purchasedProducts,
    },
  });

  res.json({
    products: products,
  });
});

module.exports = router;
