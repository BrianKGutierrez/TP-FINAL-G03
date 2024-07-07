const mongoose = require('mongoose');
const {Schema} = mongoose;

const Pago = require('./pago');
const Alquiler = require('./alquiler');

const CuotaSchema = new Schema({
    alquiler: {type: Schema.Types.ObjectId, ref:Alquiler, required: true},
    mes: {type: Number, required: true},
    monto: {type: Number, required: true},
    nroCuota: {type: Number, required: true},
    adelantos: [{type: Pago.schema, required: true}],
    estado: {type: Boolean, required: true}
});

module.exports = mongoose.models.Cuota || mongoose.model('Cuota', CuotaSchema);