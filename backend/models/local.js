const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
  titulo: { type: String, required: true },
  direccion: { type: String, required: true },
  superficie:{ type: String, required: true},
  image: { type: String, required: true },
  precio: { type: Number, required: true },
  habilitado: { type: Boolean, required: true },
  alquilado: { type: Boolean, required: true }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
