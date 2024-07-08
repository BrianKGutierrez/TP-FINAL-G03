const express = require("express");
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');//necesario para el auth

// Rutas para CRUD de usuarios
router.post('/',usuarioCtrl.createUsuario); // Crear usuario
router.post('/login', usuarioCtrl.loginUsuario); // Login de usuario

router.get('/',usuarioCtrl.getUsuarios); // Obtener todos los usuarios
router.get('/:id', usuarioCtrl.getUsuario); // Obtener usuario por ID
router.put('/:id', usuarioCtrl.editUsuario); // Actualizar usuario por ID
router.delete('/:id', usuarioCtrl.deleteUsuario); // Eliminar usuario por ID

module.exports = router;
