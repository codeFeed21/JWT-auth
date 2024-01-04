const Router = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const adminMiddleware = require('../middlewares/admin');
const { Admin, Product } = require('../db');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

router.post('/signup', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: 'Admin created successfully!',
  });
});

router.post('/signin', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(secret);

  const user = await Admin.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      secret
    );

    res.json({
        token,
    })  
  } else {
    res.status(403).json({
      msg: 'Incorrect Email or Password!',
    });
  }
});

router.get('/products', adminMiddleware, async (req, res) => {
  const response = await Product.find({});
  res.json({
    products: response,
  });
});

router.post('/add-products', adminMiddleware, async (req, res) => {
  const name = req.body.title;
  const price = req.body.price;
  const inStock = req.body.inStock;
  const description = req.body.description;
  const productImageLink = req.body.productImageLink;

  const newProduct = await Product.create({
    title: name,
    price,
    inStock,
    description,
    image: productImageLink,
  });
  res.json({
    msg: 'Product Added Successfully!',
    productId: Product._id,
  });
});

module.exports = router;
