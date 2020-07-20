const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trillaSchema = new Schema(
  {
    secado: [{ type: Schema.Types.ObjectId, ref: "Secado" }],
    "peso_cafe_pergamino_seco_(kg)": Number,
    porcentaje_humedad: Number,
    'peso_pasilla_(kg)': Number,
    malla_12: Number,
    malla_14: Number,
    malla_16: Number,
    malla_18: Number,
    fecha_de_trilla: Date,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Trilla = mongoose.model("Trilla", trillaSchema);

module.exports = Trilla;
