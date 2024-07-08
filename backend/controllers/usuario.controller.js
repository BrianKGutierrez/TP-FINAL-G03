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
usuarioCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener usuarios'
        });
    }
};

usuarioCtrl.getUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({
                status: '0',
                msg: 'Usuario no encontrado'
            });
        }
        res.json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el usuario'
        });
    }
};

usuarioCtrl.editUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUsuario = req.body; // Puedes enviar todo el cuerpo de la solicitud para actualizar

        // Realizamos la actualización del usuario en la base de datos
        await Usuario.findByIdAndUpdate(id, updatedUsuario, { new: true });

        res.json({
            status: '1',
            msg: 'Usuario actualizado'
        });
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar el usuario'
        });
    }
};

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndRemove(req.params.id);
        res.status(200).json({
            status: '1',
            msg: 'Usuario eliminado'
        });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar el usuario'
        });
    }
};

module.exports = usuarioCtrl;
