//obtener todos los locales,obtener un local , modficar un local, eliminar un local, 
//defino controlador para el manejo de CRUD
const localCtrl = require('./../controllers/local.controller');
const express = require('express');
const router = express.Router();
//rutas para gestion de Local
router.post('/',localCtrl.createLocal);
router.get('/', localCtrl.getLocales );
router.get('/:id', localCtrl.getLocal );
router.delete('/:id',localCtrl.deleteLocal);
router.put('/', localCtrl.editLocal);
module.exports = router;