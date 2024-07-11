const Promocion = require('../models/promocion');
const promocionCtrl = {}
promocionCtrl.getPromociones = async (req, res) => {
    var promociones = await Promocion.find().populate("local");
    res.json(promociones);
}
promocionCtrl.createPromocion = async (req, res) => {
    var promocion = new Promocion(req.body);
    try {
        await promocion.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
promocionCtrl.getPromocion = async (req, res) => {
    const promocion = await Promocion.findById(req.params.id).populate("local");
    res.json(promocion);
}
promocionCtrl.editPromocion = async (req, res) => {
    const vpromocion = new Promocion(req.body);
    try {
        await Promocion.updateOne({ _id: req.body._id }, vpromocion);
        res.json({
            'status': '1',
            'msg': 'Producto updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
promocionCtrl.deletePromocion = async (req, res) => {
    try {
        await Promocion.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = promocionCtrl;