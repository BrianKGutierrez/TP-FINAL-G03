const Local = require('../models/local');
const localCtrl = {}
//Dar de alta un Local
localCtrl.createLocal = async (req, res) => {
    var local = new Local(req.body);
    try {
        await local.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Local guardado.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}

//Obtener todos los locales
localCtrl.getLocales = async (req, res) => {
    var locales = await Local.find();
    res.json(locales);
}    
//Obtener un local
localCtrl.getLocal = async (req, res) => {
    const local = await Local.find({_id: req.params.id});
    res.json(local);
}
//Eliminar un Local
localCtrl.deleteLocal = async (req, res)=>{
    try {
        await Local.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: '1',
            msg: 'Local Eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//Editar un Local
localCtrl.editLocal = async (req, res) => {
    const vlocal = new Local(req.body);
    try {
        await Local.updateOne({_id: req.body._id}, vlocal);
        res.json({
            'status': '1',
            'msg': 'Local Actualizado',
            //vlocal
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion',
            vlocal
        })
    }
} 
module.exports = localCtrl;