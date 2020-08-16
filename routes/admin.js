const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('rootDir', rootDir)
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/product', (req, res, next) => {
     res.redirect('/');
})

exports.routes = router;
exports.products = products;