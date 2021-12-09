const express = require('express');
const mainController = require("../controllers/mainController");
const productController = require("../controllers/productController");

const router = express.Router();

router.get('/', mainController.index);
router.get('/carrito-de-compras', productController.productCart);
router.get('/detalle-producto', productController.productDetail);
router.get('/crear-producto', productController.productCreate);
router.get('/modificar-producto', productController.productEdit);



module.exports = router;