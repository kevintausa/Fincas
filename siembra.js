const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiembraSchema = new Schema({
    lote: [{ type: Schema.Types.ObjectId, ref: 'Lote' }],
    especie: String,
    variedad_botanica: String,
    proveedor_de_semilla: String,
    manejo_de_cultivo: String,
    fecha_de_siembra: Date,
    numero_de_plantas: Number,
}, { timestamps: { createdAt: 'created_at' } });


const Siembra = mongoose.model('Siembra', SiembraSchema)

module.exports = Siembra