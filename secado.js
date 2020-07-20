const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const secadoSchema = new Schema(
  {
    beneficio: [{ type: Schema.Types.ObjectId, ref: "Beneficio" }],
    lugar: String,
    fecha_de_secado_inicio: Date,
    fecha_de_secado_final: Date,
    'peso_seco_(kg)': Number,
  },
  { timestamps: { createdAt: "created_at" } }
);

const SecadoSchema = mongoose.model("Secado", secadoSchema);

module.exports = SecadoSchema;
