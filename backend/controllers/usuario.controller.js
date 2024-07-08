const mongoose = require("mongoose");
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const usuarioCtrl = {};

// Crear usuario
usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Usuario guardado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.',
            'error': error.message 
        });
    }
};

// Login usuario
usuarioCtrl.loginUsuario = async (req, res) => {
    const criteria = {
        usuario: req.body.usuario,
        password: req.body.password
    };
    try {
        const user = await Usuario.findOne(criteria);
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            });
        } else {
           
            res.json({
                status: 1,
                msg: "success",
                usuario: user.usuario,
                perfil: user.perfil,
                userid: user._id,
                email: user.email,
                activo: user.activo,
                token: token // retorno el token generado
            });
        }
    } catch (error) {
        res.json({
            status: 0,
            msg: 'error'
        });
    }
};
// Obtener todos los usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            'status': '1',
            'msg': 'Usuarios encontrados',
            'data': usuarios
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación',
            'error': error.message
        });
    }
};

// Obtener usuario por ID
usuarioCtrl.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({
                'status': '0',
                'msg': 'Usuario no encontrado'
            });
        } else {
            res.status(200).json({
                'status': '1',
                'msg': 'Usuario encontrado',
                'data': usuario
            });
        }
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación'
        });
    }
};

// Actualizar usuario
usuarioCtrl.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            res.status(404).json({
                'status': '0',
                'msg': 'Usuario no encontrado'
            });
        } else {
            res.status(200).json({
                'status': '1',
                'msg': 'Usuario actualizado',
                'data': usuario
            });
        }
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación'
        });
    }
};

// Eliminar usuario
usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            res.status(404).json({
                'status': '0',
                'msg': 'Usuario no encontrado'
            });
        } else {
            res.status(200).json({
                'status': '1',
                'msg': 'Usuario eliminado'
            });
        }
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación'
        });
    }
};

module.exports = usuarioCtrl;
