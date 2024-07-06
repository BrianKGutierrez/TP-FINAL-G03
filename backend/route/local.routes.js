const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/producto.controller.js');
const upload = require('../middlewares/upload');

router.get('/', productCtrl.getProducts);
router.get('/featured', productCtrl.getFeaturedProducts);
router.post('/', upload.single('image'), productCtrl.createProduct);
router.put('/:id', upload.single('image'), productCtrl.editProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;


module.exports = router;
