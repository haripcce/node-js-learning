const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const {title, imageUrl, description, price} = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.UpdateProduct = (req, res, next) => {
  const { id, title, imageUrl, description, price } = req.body;
  const product = new Product(id, title, imageUrl, description, price);
  product.update();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  const prodId = req.params.productId;
  console.log('dd',prodId)
  Product.fetchById(prodId, (product) => {
    
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      product: product,
      pageTitle: `Edit ${product.title}`,
      path: '/admin/edit-product',
      editing: editMode
    });
  })
};

exports.geProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    });
  };