const express = require("express");
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');//necesario para el auth

// Rutas para CRUD de usuarios
router.post('/', autCtrl.verifyToken,usuarioCtrl.createUsuario); // Crear usuario
router.post('/login', usuarioCtrl.loginUsuario); // Login de usuario

router.get('/', autCtrl.verifyToken,usuarioCtrl.getUsuarios); // Obtener todos los usuarios
router.get('/:id',autCtrl.verifyToken, usuarioCtrl.getUsuario); // Obtener usuario por ID
router.put('/:id',autCtrl.verifyToken, usuarioCtrl.editUsuario); // Actualizar usuario por ID
router.delete('/:id',autCtrl.verifyToken, usuarioCtrl.deleteUsuario); // Eliminar usuario por ID

module.exports = router;
