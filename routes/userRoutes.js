const Router = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middlewares/users');
const { Admin, User, Products } = require('../db');

router.get('/products', (req, res) => {});

router.post('/signup', (req, res) => {});

router.post('/signin', (req, res) => {});
router.post('/products/:productId', userMiddleware, (req, res) => {});
router.get('/purchasedProducts', userMiddleware, (req, res) => {});

module.exports = router;