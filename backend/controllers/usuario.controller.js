const mongoose = require("mongoose");
const Usuario = require('./../models/usuario');
const jwt = require('jsonwebtoken');

const usuarioCtrl = {};

usuarioCtrl.createUsuario = async (req, res) => {
    // En req.body se espera que vengan los datos de usuario a crear
    const usuario = new Usuario(req.body);
    try {
        // Intentamos guardar el usuario en la base de datos
        const nuevoUsuario = await usuario.save();

        // Si se guarda correctamente, respondemos con éxito
        res.status(200).json({
            status: '1',
            msg: 'Usuario guardado.',
            usuario: nuevoUsuario // Puedes enviar el usuario creado si lo necesitas
        });
    } catch (error) {
        // Si ocurre algún error al guardar el usuario, manejamos el error aquí
        console.error("Error al crear usuario:", error);
        res.status(400).json({
            status: '0',
            msg: 'Error procesando al crear usuario'
        });
    }
};

usuarioCtrl.loginUsuario = async (req, res) => {
    // En req.body se espera que vengan las credenciales de login
    const criteria = {
        usuario: req.body.usuario,
        password: req.body.password
    };
    try {
        // Buscamos el usuario en la base de datos
        const user = await Usuario.findOne(criteria);
        if (!user) {
            res.json({
                status: 0,
                msg: "Usuario no encontrado"
            });
        } else {
            const unToken = jwt.sign({ id: user._id }, "secretkey");
            res.json({
                status: 1,
                msg: "Éxito",
                usuario: user.usuario, // Retorno información útil para el frontend
                perfil: user.perfil,
                userid: user._id,
                token: unToken
            });
        }
    } catch (error) {
        // Manejo de errores al buscar el usuario
        console.error("Error al iniciar sesión:", error);
        res.json({
            status: 0,
            msg: 'Error'
        });
    }
};

module.exports = usuarioCtrl;
