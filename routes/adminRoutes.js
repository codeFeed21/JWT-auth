const Router = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const adminMiddleware = require('../middlewares/admin');
const { Admin, User, Products } = require('../db');

router.post('/signup', (req, res) => {});
router.post('/signin', (req, res) => {});

router.get('/products', (req, res) => {});
router.post('/products', adminMiddleware, (req, res) => {});

module.exports = router;