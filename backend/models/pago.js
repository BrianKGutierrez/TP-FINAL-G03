const mongoose = require('mongoose');
const {Schema} = mongoose;

//const Alquiler = require('./alquiler');
//const Adelanto = require('./adelanto');

const PagoSchema = new Schema({
    //alquiler: {type: Schema.Types.ObjectId, ref:Alquiler, required: true},
    nroCuota: {type: Number, required: true},
    monto: {type: Number, required: true},
    tipoDePago: {type: String, required: true},
    fechaDePago: {type: Date, required: true},
    estado: {type: Boolean, required: true},
    //adelantos: [{type: Adelanto.schema, required: true}]
});

module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);