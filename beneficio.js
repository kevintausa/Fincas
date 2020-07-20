const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beneficioSchema = new Schema({
    cosecha: [{ type: Schema.Types.ObjectId, ref: 'Cosecha' }],
    fecha_de_beneficio: Date,
    tipo_de_beneficio: String,
    tipo_de_despulpado: String,
    horas_de_fermentacion: Number,
    forma_de_lavado: String,
    procedencia_del_agua: String,

}, { timestamps: { createdAt: 'created_at' } });


const BeneficioSchema = mongoose.model('Beneficio', beneficioSchema)

module.exports = BeneficioSchema