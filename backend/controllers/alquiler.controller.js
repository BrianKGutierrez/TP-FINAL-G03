const Alquiler = require('../models/alquiler');

const alquilerCtrl = {};

alquilerCtrl.getAlquileres = async (req, res) => {
    const alquileres = await Alquiler.find().populate('local propietario');
    res.json(alquileres);
};

alquilerCtrl.createAlquiler = async (req, res) => {
    const newAlquiler = new Alquiler(req.body);
    await newAlquiler.save();
    res.json({ status: 'Alquiler creado' });
};

alquilerCtrl.getAlquiler = async (req, res) => {
    const alquiler = await Alquiler.findById(req.params.id).populate('local propietario');
    res.json(alquiler);
};

alquilerCtrl.editAlquiler = async (req, res) => {
    const { id } = req.params;
    const updatedAlquiler = {
        plazoMeses: req.body.plazoMeses,
        costoalquiler: req.body.costoalquiler,
        fecha: req.body.fecha,
        local: req.body.local,
        propietario: req.body.propietario
    };
    await Alquiler.findByIdAndUpdate(id, { $set: updatedAlquiler }, { new: true });
    res.json({ status: 'Alquiler actualizado' });
};

alquilerCtrl.deleteAlquiler = async (req, res) => {
    await Alquiler.findByIdAndRemove(req.params.id);
    res.json({ status: 'Alquiler eliminado' });
};

module.exports = alquilerCtrl;
