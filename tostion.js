const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TostionSchema = new Schema(
  {
    trilla: [{ type: Schema.Types.ObjectId, ref: "Trilla" }],
    tipo_de_tostion: String,
    "peso_grano_(kg)": Number,
    porcentaje_merma: Number,
    fecha_de_tostion: Date,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Tostion = mongoose.model("Tostion", TostionSchema);

module.exports = Tostion;
