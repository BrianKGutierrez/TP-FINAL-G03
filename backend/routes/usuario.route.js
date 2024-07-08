const express = require("express");
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const authCtrl = require('../controllers/auth.controller');

// Rutas para CRUD de usuarios
router.post('/', authCtrl.verifyToken, usuarioCtrl.createUsuario); // Crear usuario
router.post('/login', usuarioCtrl.loginUsuario); // Login de usuario

router.get('/', usuarioCtrl.getUsuarios); // Obtener todos los usuarios
router.get('/:id', authCtrl.verifyToken, usuarioCtrl.getUsuario); // Obtener usuario por ID
router.put('/:id', authCtrl.verifyToken, usuarioCtrl.editUsuario); // Actualizar usuario por ID
router.delete('/:id', authCtrl.verifyToken, usuarioCtrl.deleteUsuario); // Eliminar usuario por ID

module.exports = router;
