const mongoose = require('mongoose');
const {Schema} = mongoose;

//const Alquiler = require('./alquiler');

const PagoSchema = new Schema({
    medioPago: {type: String, required: true},
    fechaPago: {type: Date, required: true},
    monto: {type: Number, required: true}
});

module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);