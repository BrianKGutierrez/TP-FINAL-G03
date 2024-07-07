const Cuota = require('../models/cuota');
const cuotaCtrl = {}

//Obtengo todos las cuotas
cuotaCtrl.getCuotas = async (req, res) => {
    const cuotas = await Cuota.find();
    res.json(cuotas);
}

//Doy de alta una cuota
cuotaCtrl.crearCuota = async (req, res) => {
    const cuota = new Cuota(req.body);
    try {
        await Cuota.save();
        res.json({
            'status': '1',
            'msg':'Cuota registrada'
        })
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al registrar la cuota'
        });
    }
}

//Obtengo información de una cuota
cuotaCtrl.getCuota = async (req, res) => {
    const cuota = await Cuota.findById(req.params.id);
    if (!cuota) return res.status(404).json({ msg: 'cuota no encontrada' });
    res.json(cuota);
}

//Actualizo una cuota
cuotaCtrl.updateCuota = async (req, res) => {
    const vcuota = new Cuota(req.body);
    try {
        await Cuota.updateOne({_id: req.body.id}, vcuota);
        res.json({
            'status': '1',
            'msg':'cuota actualizado'
        })
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al actualizar la cuota'
        })
    }
}

//Elimino una cuota
cuotaCtrl.deleteCuota = async (req, res) => {
    try {
        await Cuota.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg':'cuota eliminada'
        })
    } catch (error) {
        res.status(404).json({
            'status': '0',
            'msg': 'Error al eliminar la cuota'
        })
    }
}

module.exports = cuotaCtrl;