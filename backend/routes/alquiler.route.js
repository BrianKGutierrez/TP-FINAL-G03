const alquilerCtrl = require('../controllers/alquiler.controller');
const autCtrl = require('./../controllers/auth.controller');//necesario para el auth
const express = require('express');
const router = express.Router();

router.get('/', autCtrl.verifyToken, alquilerCtrl.getAlquileres);
router.post('/', autCtrl.verifyToken, alquilerCtrl.createAlquiler);
router.get('/:id',autCtrl.verifyToken,  alquilerCtrl.getAlquiler);
router.put('/:id', autCtrl.verifyToken, alquilerCtrl.editAlquiler);
router.delete('/:id',autCtrl.verifyToken,  alquilerCtrl.deleteAlquiler);

module.exports = router;
