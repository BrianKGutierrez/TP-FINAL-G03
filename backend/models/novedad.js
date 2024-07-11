const mongoose = require("mongoose");
const { Schema } = mongoose;
const NovedadSchema = new Schema({
  fechaCreacion: {type: Date, required: true},
  fechaFinalizacion : {type: Date},
  descripcion: { type: String, required: true },
  estado: { type: Boolean, required: true },
  local: { type: Schema.Types.ObjectId, ref: "Local", required: true },
  propietario: {
    type: Schema.Types.ObjectId,
    ref: "Propietario",
    required: true,
  },
});
module.exports =
  mongoose.models.NovedadSchema || mongoose.model("Novedad", NovedadSchema);
