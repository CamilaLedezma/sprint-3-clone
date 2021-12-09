const express = require('express');
const mainController = require("../controllers/mainController");
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const router = express.Router();

router.get('/', mainController.index);
router.get('/carrito-de-compras', productController.productCart);
router.get('/detalle-producto', productController.productDetail);
router.get('/crear-producto', productController.productCreate);
router.get('/modificar-producto', productController.productEdit);
router.get('/ingresar', userController.login);
router.get('/registro', userController.register);


module.exports = router;