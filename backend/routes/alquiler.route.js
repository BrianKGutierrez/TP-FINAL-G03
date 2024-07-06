const alquilerCtrl = require('../controllers/alquiler.controller');
const express = require('express');
const router = express.Router();

router.get('/', alquilerCtrl.getAlquileres);
router.post('/', alquilerCtrl.createAlquiler);
router.get('/:id', alquilerCtrl.getAlquiler);
router.put('/:id', alquilerCtrl.editAlquiler);
router.delete('/:id', alquilerCtrl.deleteAlquiler);

module.exports = router;
