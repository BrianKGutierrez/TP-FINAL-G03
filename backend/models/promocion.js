const mongoose = require('mongoose');
const {Schema} = mongoose;
const PromocionSchema = new Schema({
 nombre: {type:String, required: true},
 descripcion: {type:String, required: true},
 fechaInicio: {type: String, required: true}, 
 fechaFin: {type: String, required: true}, 
 categoria:{type: String, required: true}, 
 precio: {type: Number, required:true},
 descuento: {type: Number, required: true},
 imagen: {type:String, required: true},
})
module.exports = mongoose.models.Promocion || mongoose.model('Promocion', PromocionSchema);