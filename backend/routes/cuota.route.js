const cuotaCtrl = require('../controllers/cuota.controller');
const express = require('express');
const router = express.Router();

//rutas
router.get('/',cuotaCtrl.getCuotas);
router.post('/', cuotaCtrl.crearCuota);
router.get('/:id', cuotaCtrl.getCuota);
router.put('/:id', cuotaCtrl.updateCuota);
router.delete('/:id', cuotaCtrl.deleteCuota);

module.exports = router;